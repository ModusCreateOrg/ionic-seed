// this is our single entry point for Karma to execute our tests.
// load all *.spec.js files in the `/src` directory
var context = require.context('../src', true, /\.spec\.js$/);
context.keys().forEach(context);
