/** @type {import("prettier").Config} */
module.exports = {
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,
  importOrder: [
    '^@/(.*)$',
    '^react',
    '^react/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^[./]',
  ],
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('@trivago/prettier-plugin-sort-imports'),
  ],
};
