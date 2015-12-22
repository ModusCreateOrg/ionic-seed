import aboutTemplate from './about.html';
import aboutController from './about.controller';

/*@ngInject*/
export default function AboutConfig($stateProvider) {
    $stateProvider.state('about', {
        url: '/about',
        template: aboutTemplate,
        controller: aboutController,
        controllerAs: 'about'
    })
}
