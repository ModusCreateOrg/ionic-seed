import aboutRun from './about.run';
import aboutConfig from './about.config';
import './about.scss';

const aboutModule = angular
  .module('modusIonicSeed.about', [])
  .run(aboutRun)
  .config(aboutConfig)

export default aboutModule;
