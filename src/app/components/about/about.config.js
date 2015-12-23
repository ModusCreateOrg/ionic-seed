import aboutTemplate from './about.html';
import aboutController from './about.controller';

/*@ngInject*/
const AboutConfig = ($stateProvider) => {
    $stateProvider.state('about', {
        url: '/about',
        template: aboutTemplate,
        controller: aboutController,
        controllerAs: 'about'
    })
};

export default AboutConfig;
