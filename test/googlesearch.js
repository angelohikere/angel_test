module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'friends')
      .waitForElementVisible('input[name=btnK]',1000)
      .click('input[value="Recherche Google"]')
      .execute(function(data) {
        var x = document.getElementsByClassName("g");
        return x.length;
      },['x'],function(res){
        browser.assert.equal(res.value,10)
      }) 
  }
}


