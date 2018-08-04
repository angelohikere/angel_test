module.exports = {
  "Performing math operations" : function (browser) {
    browser
      .mathOperations(1,"+",2, function(result){
        this.assert.equal(result, 3);
        browser.mathOperations(21,"-",2, function(result){
          this.assert.equal(result, 19);
          browser.mathOperations(31,"*",32, function(result){
            this.assert.equal(result, 992);
            browser.mathOperations(15,"/",3, function(result){
              this.assert.equal(result, 5);
              browser.mathOperations(15,"%",3, function(result){
                this.assert.equal(result, 0, "The modulo result is correct");
                browser.end()
              })
            })
          })
        })
      })
  }
};