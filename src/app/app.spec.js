// all of our Jasmine and Sinon utilities (describe, it, sinon) are globally
// injected by Karma. no need to import them manually for each test.

import 'ionic-sdk/release/js/ionic.bundle';

import AppController from './app.controller';
import AppConfig from './app.config';

describe('Application Tests', () => {

    let controller;

    beforeEach(function() {

        // instantiate a new instance of our controller before each test
        controller = new AppController();

        // mock the $state service, and setup a Sinon spy on the `go` method
        controller.$state = {
            go: sinon.spy()
        };

    });

    describe('App Controller', () => {

        it('should be defined', () => {
            expect(controller).toBeDefined();
        });

        it('should should define a text value', () => {
            expect(controller.text).toBe('Welcome to the Ionic Seed');
        });

        it('should define an onAboutTap method', () => {
            expect(controller.onAboutTap).toBeDefined();
        });

        it(`should transition to the 'about' component`, () => {

            // execute the function on our controller class
            controller.onAboutTap();

            // and expect `this.$state.go' to have been called properly
            expect(controller.$state.go.calledWith('about')).toBe(true);
        })
    });

})
