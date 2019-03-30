//conf.js
exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub/',
	specs: ['spec.js'],
	//multiCapabilities:[{'browserName': 'chrome'},{'browserName': 'firefox'}]

 capabilities: {
    browserName: 'chrome',
    chromeOptions: {
     args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
   }
}