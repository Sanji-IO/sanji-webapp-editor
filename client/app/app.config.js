export default ($locationProvider, restProvider) => {
  $locationProvider.html5Mode(true);
  restProvider.configure({
    basePath: '/api/v1'
  });
}
