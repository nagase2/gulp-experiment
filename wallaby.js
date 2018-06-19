module.exports = function() {
	return {
		files: [
      'lib/**/*.js',
      'readme.txt',
      '**/*.json',
      'spec/*.json',
      'src/**/*.ts'
    ],

		tests: [
      'spec/**/*.spec.js'
    ],

		env: {
			type: 'node'
		},

		testFramework: 'jasmine'
	};
};
