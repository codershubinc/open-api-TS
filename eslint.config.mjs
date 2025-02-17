import importPlugin from "eslint-plugin-import";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";

export default [
    {
        files: ["**/*.ts"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: tsEslintParser, // ✅ Set TypeScript parser
            parserOptions: {
                project: "./tsconfig.json", // ✅ Enable type-aware linting
                tsconfigRootDir: process.cwd(),
                ecmaVersion: "latest"
            }
        },
        plugins: {
            "@typescript-eslint": tsEslintPlugin.default ?? tsEslintPlugin, // ✅ Ensure compatibility
            import: importPlugin.default ?? importPlugin
        },
        rules: {
            "import/extensions": ["error", "ignorePackages", { "ts": "always" }],
            "@typescript-eslint/explicit-function-return-type": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn"
        },
        settings: {
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "./tsconfig.json"
                }
            }
        }
    }
];
