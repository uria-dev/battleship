import globals from "globals";
import pluginJs from "@eslint/js";
import { expect, jest, test } from "@jest/globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
