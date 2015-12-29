import userMenu from './components/directives/userMenu/userMenu';

export default angular
    .module('ionicSeed.directives', [
        'ionic'
    ])
    .directive('userMenu', userMenu)
