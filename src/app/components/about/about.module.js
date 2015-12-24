import aboutRun from './about.run';
import aboutConfig from './about.config';

const aboutModule = angular
  .module('ionicSeed.about', [])
  .run(aboutRun)
  .config(aboutConfig)

export default aboutModule;
