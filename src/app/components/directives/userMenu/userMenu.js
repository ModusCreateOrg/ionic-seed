const popoverTemplate = `
    <ion-popover-view>
        <ion-content class="padding">
            <strong>Hello!</strong> I am an example of a reusable directive.
            Find my code in app/directives!
        </ion-content>
    </ion-popover-view>
`;

/*@ngInject*/
const userMenu = ($ionicPopover) => {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            user: '='
        },
        template: `
            <button ng-click="userCtrl.openMenu($event)" class="button button-block">
                Logged in as: <strong>{{ userCtrl.user.name }}</strong>
            </button>
        `,
        controllerAs: 'userCtrl',
        controller() {

            // load our popover
            this.popover = $ionicPopover.fromTemplate(popoverTemplate);

            this.openMenu = (ev) => {
                this.popover.show(ev);
            }
        }
    }
}

export default userMenu;
