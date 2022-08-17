import { numberFixedRound } from "@balsamic/dev";
import { types } from "@babel/core";
import type { ConfigAPI, NodePath, PluginItem, PluginObj } from "@babel/core";

export const DO_NOT_MANGLE_PREFIX = "@#";

let _pluginCounter = 0;

export interface BabelPluginSimpleSettings {
  constToLet?: boolean;
  unmangleableProperties?: "mark" | "transform" | undefined;

  /** Number of digits to round floating point numbers. If 0, means no rounding at all. */
  floatRound?: number;
}

/**
 * This magic plugin optimize destructuring by maximizing shorthand.
 */
export function babelPluginSimple(settings: BabelPluginSimpleSettings): PluginItem {
  return [jsBabelSimplePlugin, {}, `simple${++_pluginCounter}`];

  function jsBabelSimplePlugin(api: ConfigAPI): PluginObj {
    api.assertVersion(7);

    function handleMember(path: NodePath<types.ObjectMember | types.Property>): void {
      const n = path.node;
      if (
        n.key.type === "StringLiteral" &&
        n.key.value &&
        settings.unmangleableProperties === "mark" &&
        !n.key.value.startsWith(DO_NOT_MANGLE_PREFIX)
      ) {
        n.key.value = `${DO_NOT_MANGLE_PREFIX}${n.key.value}`;
      } else if (
        n.key.type === "StringLiteral" &&
        settings.unmangleableProperties === "transform" &&
        n.key.value.startsWith(DO_NOT_MANGLE_PREFIX)
      ) {
        const name = n.key.value.slice(DO_NOT_MANGLE_PREFIX.length);
        n.key = types.stringLiteral(name);
      }
    }

    return {
      visitor: {
        NumericLiteral(path: NodePath<types.NumericLiteral>): void {
          const n = path.node;
          const precision = settings.floatRound;
          if (precision) {
            if (n.value.toString().includes(".")) {
              n.value = numberFixedRound(n.value, precision);
            }
          }
        },

        ObjectMember(path: NodePath<types.ObjectMember>) {
          handleMember(path);
        },

        Property(path: NodePath<types.Property>): void {
          handleMember(path);
        },

        MemberExpression(path: NodePath<types.MemberExpression>): void {
          const n = path.node;
          if (
            n.property.type === "StringLiteral" &&
            n.property.value &&
            settings.unmangleableProperties === "mark" &&
            !n.property.value.startsWith(DO_NOT_MANGLE_PREFIX)
          ) {
            n.property.value = `${DO_NOT_MANGLE_PREFIX}${n.property.value}`;
          } else if (
            n.property.type === "StringLiteral" &&
            settings.unmangleableProperties === "transform" &&
            n.property.value.startsWith(DO_NOT_MANGLE_PREFIX)
          ) {
            const name = n.property.value.slice(DO_NOT_MANGLE_PREFIX.length);
            n.property = types.stringLiteral(name);
          }
        },

        VariableDeclaration(path: NodePath<types.VariableDeclaration>): void {
          const n = path.node;
          if (settings.constToLet && n.kind === "const") {
            n.kind = "let";
          }
        },
      },
    };
  }
}