module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'site:www.amazon.com')
      .waitForElementVisible('input[name=btnK]',1000)
      .click('input[value="Recherche Google"]')
      .waitForElementVisible('body',10000)
      .execute(function(data) {
        var x = document.getElementsByClassName("g");
        return x.length;
      },['x'],function(res){
        browser.assert.equal(res.value,10)
        for(i = 1; i<= res.value; i++) {
          browser.assert.attributeContains("div.g:nth-child("+ i +") h3.r a",'href', "www.amazon.com")
        }
      }) 
  }
}
