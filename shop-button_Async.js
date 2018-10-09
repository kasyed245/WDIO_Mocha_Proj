describe('SHOP-BUTTON TESTS',function(){
  it('',function(){
    return browser
         .url('./')
         .getTitle().then(function(title){
           console.log('Hope Page Title :'+title);
         })
         .click('.shop-callout a')
         .getTitle().then((title)=>{
           console.log('Shop Page Title :'+title);
         })
         .getUrl().then((url)=>{
            console.log('URL :'+url)
         })
  });
});



// var webdriverio = require('webdriverio');
// var options = { desiredCapabilities: { browserName: 'chrome' } };
// var client = webdriverio.remote(options);
//
// client
//     .init()
//     .url('https://duckduckgo.com/')
//     .setValue('#search_form_input_homepage', 'WebdriverIO')
//     .click('#search_button_homepage')
//     .getTitle().then(function(title) {
//         console.log('Title is: ' + title);
//
//         // outputs:
//         // "Title is: WebdriverIO (Software) at DuckDuckGo"
//     })
//     .end();
