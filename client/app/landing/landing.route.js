export default (routerHelper) => {
  let otherwise = '/'; //default route
  routerHelper.configureStates(getStates(), otherwise);

  function getStates() {
    return [{
      state: 'landing',
      config: {
        url: '/',
        templateUrl: 'landing.tpl.html',
        controller: 'LandingController',
        controllerAs: 'vm',
        title: 'Home'
      }
    }];
  }
}
