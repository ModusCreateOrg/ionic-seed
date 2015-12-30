import appServices from '../../app.services';

describe('User Service', () => {
    let apiUrl, userService, $httpBackend;

    beforeEach(angular.mock.module(appServices.name));

    beforeEach(inject((_apiUrl_, _userService_, _$httpBackend_) => {
        apiUrl = _apiUrl_;
        userService = _userService_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('Get Users', () => {
        it('should fetch the users', () => {
            $httpBackend.expect('GET', `${apiUrl}/users`).respond(200);
            expect(userService.getUsers()).to.be.ok;
            $httpBackend.flush();
        });
    });
});
