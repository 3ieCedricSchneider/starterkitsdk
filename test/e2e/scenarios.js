'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /module1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/module1");
  });


  describe('module1', function() {

    beforeEach(function() {
      browser.get('index.html#/module1');
    });


    it('should render module1 when user navigates to /module1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
