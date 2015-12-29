import 'ionic-sdk/release/js/ionic.bundle';
import 'angular-mocks';

const testsContext = require.context('../src', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
