/** @type {import('prettier').Config} */
const config = {
  // Load prettier-plugin-astro via CLI (`--plugin`) so pre-commit's isolated
  // node_modules can resolve it (config `plugins: [...]` resolves from repo root).
  printWidth: 180,
  singleAttributePerLine: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
