import { assign } from 'lodash';

const API_URL = 'http://demo8156226.mockable.io';

export default class UserService {
    /*@ngInject*/
    constructor($http) {
        assign(this, { $http });
    }

    /**
     * Returns all of our Users
     * @return {Promise}
     */
    getUsers() {
        return this.$http.get(`${API_URL}/users`);
    }
}
