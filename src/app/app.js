// require our index.html file.
// when Webpack bundles our source, the index.html file will be copied
// into the /www directory.
// require('file?name=[name].[ext]!../index.html');

// import the Ionic framework bundled with Angular
import 'ionic-sdk/release/js/ionic.bundle'

// import ngCordova
import 'ng-cordova';

// import our application SCSS, this includes the Ionic CSS.
// this gets around having to run an SCSS build step.
import '../scss/app.scss'

import appRun from './app.run';
import appConfig from './app.config';

// basically, import aboutModule.name
import { name as aboutModule } from './components/about/about.module';

const appModule = angular
  .module('ionicSeed', [
      // include ionic, and angular
      'ionic',
      'ngCordova',

      // all other application modules will be imported here
      aboutModule

  ])
  .run(appRun)
  .config(appConfig)

export default appModule;
