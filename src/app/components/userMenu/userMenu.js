const popoverTemplate = `
    <ion-popover-view>
        <ion-content class="padding">
            <strong>Hello!</strong> I am an example of a reusable directive.
            Find my code in app/directives!
        </ion-content>
    </ion-popover-view>
`;


const userMenu = {
    /*@ngInject*/
    controller: function($ionicPopover) {
        // load our popover
        this.popover = $ionicPopover.fromTemplate(popoverTemplate);
        this.openMenu = (ev) => {
            this.popover.show(ev);
        }
    },
    bindings: {
        user: '='
    },
    template: `
        <button ng-click="userMenu.openMenu($event)" class="button button-block">
            Logged in as: <strong>{{ userMenu.user.name }}</strong>
        </button>
    `
}

export default userMenu;
