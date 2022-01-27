module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  moduleNameMapper: {
    "/^@\/(.*)$/": "/Users/veli.akdeniz/Desktop/internship/basic-shopping-cart/$1",
     '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: [
    'js',
    'vue',
    'json'
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest'
  },
}
