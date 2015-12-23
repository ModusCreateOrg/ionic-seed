import { assign } from 'lodash';

export default class AppController {
    /*@ngInject*/
    constructor($state, $cordovaStatusbar) {
        assign(this, { $state });
        this.text = 'Welcome to the Ionic Seed'

        // will execute when device is ready, or immediately if the device is already ready.
        ionic.Platform.ready(() => {
            let isIOS = ionic.Platform.isIOS();
            if (window.StatusBar && isIOS) {
                $cordovaStatusbar.style(0)
            }
        });
    }

    onAboutTap() {
        this.$state.go('about');
    }
}
