import 'expose?jQuery!jquery';
import 'expose?_!lodash';
import 'expose?!moment';
import 'expose?!angular';
import 'expose?!restangular';
import 'expose?!materialize-css/dist/js/materialize';
import 'expose?!angular-simple-logger';
import 'expose?!angular-google-maps/';

// Our modules
import modRestService from './config/rest.config';
import modConfigRouter from './config/router.config';
import modRun from './run';
import modLanguage from './language/language.module';
import modHome from './home/home.module';
import modMenu from './menu/menu.module';


// Style entry point
import './scss/bootstrap';

// Create our prototype module
let mod = angular.module('comercialprado', [
    require('angular-animate'),
    require('angular-aria'),
    require('angular-messages'),
    require('angular-sanitize'),
    require('angular-storage'),
    require('angular-ui-router'),
    'uiGmapgoogle-maps',
    'restangular',
    modLanguage,
    modHome,
    modMenu
]);
mod.config(modRestService);
// ROUTER CONFIG
mod.config(modConfigRouter);
// Run
mod.run(modRun);

export default mod = mod.name;
