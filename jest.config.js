// // jest.config.js
// const nextJest = require("next/jest");

// const createJestConfig = nextJest({
// 	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
// 	dir: "./",
// });

// // Add any custom config to be passed to Jest
// const customJestConfig = {
// 	// Add more setup options before each test is run
// 	// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
// 	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
// 	moduleDirectories: ["node_modules", "<rootDir>/", "."],
// 	testEnvironment: "jest-environment-jsdom",
// };

// // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// module.exports = createJestConfig(customJestConfig);

module.exports = {
  // stop after first failing test
  // bail: true,

  // stop after 3 failed tests
  // bail: 3,

  preset: "ts-jest",
  // testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testEnvironment: "jest-environment-jsdom",
  // transformIgnorePatterns: ["<rootDir>/node_modules/"],
  // moduleDirectories: ["node_modules", "src/models", "src/states", "."],
  // forceCoverageMatch: ["**/*.helper.js"],
  // transform: {
  //   // '^.+\\.vue$': 'vue-jest',
  //   // '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
  //   //   'jest-transform-stub',
  //   "^.+\\.(js|jsx|ts|tsx)?$": "babel-jest",
  // },
  // moduleNameMapper: {
  //   "^@/(.*)$": "<rootDir>/src/$1",
  // },
};
