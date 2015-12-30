import 'angular/angular';
import 'angular-animate/angular-animate';
import 'angular-sanitize/angular-sanitize';
import 'ionic-sdk/release/js/angular-ui/angular-ui-router';
import 'ionic-sdk/release/js/ionic';
import 'ionic-sdk/release/js/ionic-angular';
import 'angular-mocks';

const testsContext = require.context('../src', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
