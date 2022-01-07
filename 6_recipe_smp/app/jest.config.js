module.exports= {
    preset: 'ts-jest',
    // testEnvironment: 'jsdom',
    roots: ['<rootDir>'],
    testPathIgnorePatterns: [
        '<rootDir>/.next/',
        '<rootDir>/node_modules/',
        '<rootDir>/__tests__/setup/'
      ],
    globals: {
        'ts-jest': {
            // isolatedModules: true,
            tsconfig: '<rootDir>/__tests__/setup/tsconfig.jest.json'
        }
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: [
        '<rootDir>/__tests__/*.test.ts',
    ]
}
