export default ($translateProvider) => {
  $translateProvider.translations('en', require('./lang/en.json'));
  $translateProvider.translations('zh-tw', require('./lang/zh-tw.json'));
}
