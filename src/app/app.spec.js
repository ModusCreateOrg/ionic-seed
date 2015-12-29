// all of our Jasmine and Sinon utilities (describe, it, sinon) are globally
// injected by Karma. no need to import them manually for each test.
import App from './app';

describe('Application Tests', () => {
    let sandbox, stubs, controller;

    before(() => {
        sandbox = sinon.sandbox.create();
        stubs = {
            $state: {
                go: sandbox.stub()
            }
        };
    })

    beforeEach(angular.mock.module(App.name, ($provide) => {
        // Since we don't want ui router changing the browser url on state transistions,
        // we'll mock the state server and test that it was called as expected.
        $provide.value('$state', stubs.$state);
    }));

    beforeEach(inject(($controller) => {
        controller = $controller('AppController', { });
    }));

    afterEach(() => {
        sandbox.reset();
    });

    describe('App Controller', () => {

        it('should be defined', () => {
            expect(controller).to.be.ok;
        });

        it('should define an onAboutTap method', () => {
            expect(controller.onAboutTap).to.be.ok;
        });

        it('should transition to the About component', () => {
          controller.onAboutTap();
          expect(stubs.$state.go).to.have.been.called.once;
          expect(stubs.$state.go).to.have.been.calledWith('about');
        });

    });

})
