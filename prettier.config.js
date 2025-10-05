export default {
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,

  importOrder: ['^react(.*)$', '<THIRD_PARTY_MODULES>', '^@/', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}
