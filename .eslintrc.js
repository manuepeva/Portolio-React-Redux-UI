module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: "latest",
    sourceType: "module",
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "prettier",
    "unused-imports",
  ],
  rules: {
    "no-console": "warn",
    "no-debugger": "warn",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
        semi: true,
        singleQuote: false,
        printWidth: 100,
        tabWidth: 2,
        trailingComma: "es5",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
