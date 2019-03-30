// spec.js
describe('Protector Demo App',function(){
	

	it('should have a title', function(){
		browser.waitForAngularEnabled(false);
		browser.get('http://juliemr.github.io/protractor-demo');
		
		expect(browser.getTitle()).toEqual('Super Calculator');
	});
	
	//it('should have a title', function(){
	  //  browser.waitForAngularEnabled(false);
		//browser.get('http://juliemr.github.io/protractor-demo');
		
		//$('#first').sendKeys('1');
		//$('#second').sendKeys('2');
		//$('#gobuton').click();

		//expect($('.alert-danger > ol > li').getText()).toEqual('Authentication failed.');
	//});
});