import { assign } from 'lodash';

export default class AppController {
    /*@ngInject*/
    constructor($state, userService) {
        assign(this, { $state, userService });
        this.text = 'Welcome to the Ionic Seed';

        this.user = {
            name: 'Dave Ackerman',
            email: 'dave@dude.com'
        };

        // make an API call to get our mock users
        this.userService.getUsers().then(response => {
            this.users = response.data.users;
        },
        (error) => {
            this.error = 'something went wrong';
        });

    }

    onAboutTap() {
        this.$state.go('about');
    }
}
