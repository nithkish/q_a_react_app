module.exports = {
  testMatch: ["**/test/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/__mocks__/styleMock.js",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
