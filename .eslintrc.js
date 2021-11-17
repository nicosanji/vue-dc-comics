module.exports = {
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ["dist/*"],
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off",
  },
};
