module.exports = {
  'Perform a Google search with the site parameter' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'site:www.amazon.com')
      .waitForElementVisible('input[name=btnK]',1000)
      .click('input[value="Recherche Google"]')
      .waitForElementVisible('body',10000)
      .execute(function(data) {
        // gets all the classes that contains the title of the results returned
        var x = document.getElementsByClassName("r");
        return x.length;
      },['x'],function(res){
        for(i = 1; i<= res.value; i++) {
          // loop through al the results returned to check if they contain the domain provided
          browser.assert.attributeContains("div.g:nth-child("+ i +") h3.r a",'href', "www.amazon.com")
        }
      }) 
      .end()
  }
}
