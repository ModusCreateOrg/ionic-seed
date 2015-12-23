import AboutController from './about.controller';

describe('About Component', () => {

    let controller;

    beforeEach(function() {
        controller = new AboutController();
    });


    it('should define an array of technologies', () => {
        expect(controller.technologies).toBeDefined();
        expect(controller.technologies.length).toBe(4);
    })
})
