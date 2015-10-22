exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/**/*.js'],
  baseUrl:'http://localhost:9000/',
  suites:{
    contacts : 'suits/*.spec.js',
  },
  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: function () {
      browser.driver.manage().timeouts().setScriptTimeout(30000);
  },
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    includesStackTrace: true,
    defaultTimeoutInterval: 150000
  },
  allScriptsTimeout: 30000
}
