module.exports = {
    testEnvironment: 'node', // or 'jsdom' depending on your needs
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
