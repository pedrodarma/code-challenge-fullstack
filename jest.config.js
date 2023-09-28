module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testEnvironment: "jest-environment-jsdom",
};
