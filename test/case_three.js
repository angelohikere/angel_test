module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'youtube.com inurl:tekno')
      .waitForElementVisible('input[name=btnK]',1000)
      .click('input[value="Recherche Google"]')
      .waitForElementVisible('body',10000)
      .execute(function(data) {
        var x = document.getElementsByClassName("r");
        return x.length;
      },['x'],function(res){
        //browser.assert.equal(res.value,11)
        for(i = 1; i<= res.value; i++) {
          browser.assert.attributeContains("div.g:nth-child("+ i +") h3.r a",'href', "tekno")
        }
      }) 
  }
}
