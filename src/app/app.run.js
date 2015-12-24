/*@ngInject*/
const AppRun = ($ionicPlatform, $cordovaStatusbar, $cordovaKeyboard) => {
    $ionicPlatform.ready(() => {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          $cordovaKeyboard.hideAccessoryBar(true)
          $cordovaKeyboard.disableScroll(true)
        }
        if (window.StatusBar) {
            $cordovaStatusbar.style(1);
        }
    })
};

export default AppRun;
