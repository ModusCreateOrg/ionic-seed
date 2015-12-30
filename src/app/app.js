import 'angular/angular';
import 'angular-animate/angular-animate';
import 'angular-sanitize/angular-sanitize';
import 'ionic-sdk/release/js/angular-ui/angular-ui-router';
import 'ionic-sdk/release/js/ionic';
import 'ionic-sdk/release/js/ionic-angular';

// import ngCordova
import 'ng-cordova';

import appRun from './app.run';
import appConfig from './app.config';
import appController from './app.controller';
import appDirectives from './app.directives';
import appServices from './app.services';

// basically, import aboutModule.name
import aboutModule from './views/about/about.module';

const appModule = angular
    .module('ionicSeed', [

        // include ionic, and angular
        'ionic',
        'ngCordova',

        // high level app directives
        appDirectives.name,

        // high level app services
        appServices.name,

        // all other application modules will be imported here
        aboutModule.name

    ])
    .controller('AppController', appController)
    .run(appRun)
    .config(appConfig)

export default appModule;
