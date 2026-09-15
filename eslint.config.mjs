import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import stylistic from "@stylistic/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: ["cjs/", "esm/", "types/"],
    },
    ...compat.extends("eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"),
    {
        plugins: {
            react,
            "@typescript-eslint": typescriptEslint,
            "@stylistic": stylistic
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
            },

            parser: tsParser,
            ecmaVersion: 11,
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                lib: ["esnext", "dom"]
            },
        },

        settings: {
            react: {
                pragma: "dom",
                version: "17.0"
            },
        },

        rules: {
            "@stylistic/indent": ["warn", 4, { "SwitchCase": 1 }],
            "@stylistic/linebreak-style": ["error", "windows"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/no-extra-semi": ["error"],
            "@stylistic/no-trailing-spaces": ["error"],
            "@stylistic/no-multiple-empty-lines": ["error", { max: 1 }],
            "@stylistic/space-in-parens": ["error", "never"],
            "@stylistic/space-infix-ops": ["error", { int32Hint: false }],
            "@stylistic/no-mixed-spaces-and-tabs": ["error"],
            "@stylistic/space-before-blocks": ["error", "always"],
            "@stylistic/function-call-spacing": ["error", "never"],
            "@stylistic/key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
            "@stylistic/array-bracket-spacing": ["error", "never"],
            "@stylistic/arrow-spacing": ["error", { "before": true, "after": true }],
            "@stylistic/block-spacing": ["error", "always"],
            "@stylistic/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
            "@stylistic/semi-spacing": ["error", { "before": false, "after": true }],
            "@stylistic/space-before-function-paren": ["error", "never"],
            "@stylistic/switch-colon-spacing": ["error", { "after": true, "before": false }],
            "@stylistic/template-curly-spacing": ["error", "never"],
            "@stylistic/type-annotation-spacing": ["error", { "after": true }],
            "@stylistic/object-curly-spacing": ["error", "always"],
            "@stylistic/keyword-spacing": ["error", { "before": true, "after": true }],
            "no-undef": "error",
            "consistent-return": "error",
            "no-invalid-this": "error",
            "arrow-parens": ["error", "as-needed"],
            "eol-last": ["error", "never"],
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/no-this-alias": "off",
            "no-inv": "off",
            "no-prototype-builtins": "off",
            "react/react-in-jsx-scope": "off",
            "react/no-unknown-property": "off",
            "react/no-unescaped-entities": "off",
            "react/jsx-key": "off",
            "react/prop-types": "off",
            "react/no-is-mounted": "off",
            "@typescript-eslint/explicit-member-accessibility": ["error", {
                "accessibility": "explicit",
                "overrides": {
                    "constructors": "no-public"
                }
            }],
            "react/self-closing-comp": ["warn", {
                "component": true,
                "html": true
            }],
            "@typescript-eslint/explicit-module-boundary-types": "error",
            "eqeqeq": ["error", "always"]
        },
    }];