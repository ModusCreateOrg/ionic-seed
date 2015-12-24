// import the Ionic framework bundled with Angular
import 'ionic-sdk/release/js/ionic.bundle'

// import ngCordova
import 'ng-cordova';

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
