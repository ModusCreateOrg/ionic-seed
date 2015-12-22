import appTemplate from './app.html';
import appController from './app.controller';

/*@ngInject*/
export default function AppConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        template: appTemplate,
        controller: appController,
        controllerAs: 'app'
    })
    $urlRouterProvider.otherwise('/')
}
