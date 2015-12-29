import appTemplate from './app.html';

/*@ngInject*/
const AppConfig = ($stateProvider, $urlRouterProvider) => {
  $stateProvider.state('home', {
      url: '/',
      template: appTemplate,
      controller: 'AppController',
      controllerAs: 'app'
  });

  $urlRouterProvider.otherwise('/');
};

export default AppConfig;
