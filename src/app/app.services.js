import userService from './services/userService/userService';

export default angular
    .module('ionicSeed.services', [])
    .constant('apiUrl', 'http://demo8156226.mockable.io')
    .service('userService', userService)
