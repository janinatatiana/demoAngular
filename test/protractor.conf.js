exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/**/*.js'],
  baseUrl:'http://localhost:9000/',
  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: function() {
    var trackMouse = function() {
      angular.module('trackMouse', []).run(function($document) {
        function addDot(ev) {
          var color = 'black',
          size = 6;
          switch (ev.type) {
            case 'click':
            color = 'red';
            break;
            case 'dblclick':
            color = 'blue';
            break;
            case 'mousemove':
            color = 'green';
            break;
          }
          var dotEl = $('<div></div>')
          .css({
            position: 'fixed',
            height: size + 'px',
            width: size + 'px',
            'background-color': color,
            top: ev.clientY,
            left: ev.clientX,
            'z-index': 9999,
            'pointer-events': 'none'
          })
          .appendTo('body');
          setTimeout(function() {
            dotEl.remove();
          }, 1000)
        }
        $document.on({
          click: addDot,
          dblclick: addDot,
          mousemove: addDot
        });
      });
    };
    browser.addMockModule('trackMouse', trackMouse);
  },
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    defaultTimeoutInterval: 60000
  },
  getPageTimeout:60000,
  allScriptsTimeout: 60000
}
