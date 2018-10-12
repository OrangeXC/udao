'use strict'; // necessary for es6 output in node

import { browser, element, by } from 'protractor';

describe('cli-quickstart App', () => {
  beforeEach(() => {
    return browser.get('/');
  });

  it('should display message saying app works', () => {
    const pageTitle = element(by.css('app-root h1')).getText();
    expect(pageTitle).toEqual('Welcome to My First Angular App!!');
  });
});
