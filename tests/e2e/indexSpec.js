describe('dollar word homepage', function() {
  it('poston should have value of $.99', function() {
    browser.get('app/index.html');

    element(by.model('word')).sendKeys('poston');
    expect(element(by.binding('wordValue')).getText()).toEqual('$.99');

    expect(true).toEqual(true);
  });

  it('buzzy should get added to list of dollar words', function() {
    browser.get('app/index.html');

    element(by.model('word')).sendKeys('buzzy');

    expect(element(by.repeater('word in dollarWords').row(0).column('{{ word }}')).getText()).toBe('buzzy');
    expect(element.all(by.repeater('word in dollarWords')).count()).toEqual(1);
  });

  it('when word is a dollar word value is green', function() {
    browser.get('app/index.html');
  
    element(by.model('word')).sendKeys('nonhuman');
    expect(element(by.binding('wordValue')).getCssValue('color')).toEqual('rgba(138, 181, 13, 1)');
  });
  
});