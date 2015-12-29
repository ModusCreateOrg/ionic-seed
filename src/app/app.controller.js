import { assign } from 'lodash';

export default class AppController {
    /*@ngInject*/
    constructor($state, $cordovaStatusbar) {
        assign(this, { $state });
        this.text = 'Welcome to the Ionic Seed';

        this.user = {
            name: 'Dave Ackerman',
            email: 'dave@dude.com'
        };

    }

    onAboutTap() {
        this.$state.go('about');
    }
}
