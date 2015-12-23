import appTemplate from './app.html';
import appController from './app.controller';

/*@ngInject*/
const AppConfig = ($stateProvider, $urlRouterProvider) => {
  $stateProvider.state('home', {
      url: '/',
      template: appTemplate,
      controller: appController,
      controllerAs: 'app'
  });

  $urlRouterProvider.otherwise('/');
};

export default AppConfig;
