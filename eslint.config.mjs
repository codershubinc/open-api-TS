import eslintPluginImport from "eslint-plugin-import";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";

export default [
    {
        files: ["**/*.ts"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        },
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            import: eslintPluginImport
        },
        rules: {
            "import/extensions": ["error", "ignorePackages", { "ts": "always" }]
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
