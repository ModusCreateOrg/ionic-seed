import { assign } from 'lodash';

export default class AboutController {
    /*@ngInject*/
    constructor($timeout, $ionicLoading) {

        // example of injecting some services.
        assign(this, { $timeout, $ionicLoading });

        this.technologies = [
            'Webpack',
            'Babel',
            'ES6',
            'SCSS',
        ];

        this.$ionicLoading.show({
          template: 'Loading...'
        });

        this.$timeout(() => {
            this.$ionicLoading.hide();
        }, 1000);

    }
}
