module.exports = {
	env: {
		browser: true,
		node: true,
		amd: true,
		jest: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {},
	ignorePatterns: ['**/test.js'],
	settings: {
		react: {
			version: 'detect',
		},
	},
};
