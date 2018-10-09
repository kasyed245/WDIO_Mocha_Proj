class CommonPage{
  get BASEURL(){return 'http://www.kevinlamping.com/webdriverio-course-content/';}
  isVisible(selector){
    return browser.isVisible(selector);
  }

  isExisting(selector){
    return browser.isExisting(selector);
  }

  waitForExist(selector,waitTime=2000,flag=false){
    return browser.waitForExist(selector,waitTime,flag);
  }

  waitForVisible(selector,waitTime=2000,flag=false){
    return browser.waitForVisible(selector,waitTime,flag);
  }

  waitUntillText(selector,expectedText,waitTime=2000){
     return browser.waitUntil(function(){
        return $(selector).getText()==expectedText;
     },waitTime,"Error..!! "+expectedText+" not found..!!");
  }
}
module.exports=new CommonPage();
