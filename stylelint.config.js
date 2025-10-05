export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  rules: {
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]*$',
      {
        message: (className) => `Expected class selector "${className}" to be camelCase`,
      },
    ],
  },
}
