module.exports = {
  'Perform Google search and check the number of result returned' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'friends')
      .waitForElementVisible('input[name=btnK]',1000)
      .click('input[value="Recherche Google"]')
      .execute(function(data) {
        // get all the results returned
        var x = document.getElementsByClassName("g");
        return x.length;
      },['x'],function(res){
        // check that the number of result returned is equal to 10
        browser.assert.equal(res.value,10)
      })
      .end() 
  }
}


