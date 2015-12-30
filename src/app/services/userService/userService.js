import { assign } from 'lodash';

export default class UserService {
    /*@ngInject*/
    constructor(apiUrl, $http) {
        assign(this, { apiUrl, $http });
    }

    /**
     * Returns all of our Users
     * @return {Promise}
     */
    getUsers() {
        return this.$http.get(`${this.apiUrl}/users`);
    }
}
