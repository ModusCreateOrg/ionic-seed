import aboutTemplate from './about.html';

/*@ngInject*/
const AboutConfig = ($stateProvider) => {
    $stateProvider.state('about', {
        url: '/about',
        template: aboutTemplate,
        controller: 'AboutController',
        controllerAs: 'about'
    })
};

export default AboutConfig;
