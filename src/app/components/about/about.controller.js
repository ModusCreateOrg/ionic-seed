import { assign } from 'lodash';

export default class AboutController {
    /*@ngInject*/
    constructor() {
        this.technologies = [
            'Webpack',
            'Babel',
            'ES6',
            'SCSS',
            'Karma'
        ];
    }

    removeTechnology(technology) {
        this.technologies.splice(this.technologies.indexOf(technology), 1);
    }
}
