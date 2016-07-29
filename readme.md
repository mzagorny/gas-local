# Description

Simple library for execute and test your google app scripts projects locally in node.js 
Companion for [gas tools](https://www.npmjs.com/package/node-google-apps-script)

# How to use

1. Download your apps script project via [gas tools](https://www.npmjs.com/package/node-google-apps-script). 
Content of your project will appear in 'src' subfolder
1. "Require" your library as usual module in your tests
```javascript
var gas = require('gas-local');
//load your downloaded google script library from src subfolder as normal module   
var glib = gas.require('./src');
//call some function from your app script library 
glib.somefunction();
```
3. Develop and test your google app script project locally
1. Upload changes back to google drive via gas-tools. 

# How to mock google services
gas-local already mocks parts of Logger and Utilities by default (see globalmock-default.js).
But you also can provide mocks for other google services for your tests. 
Below is example how to mock MailApp.getRemainingDailyQuota function  

```javascript
var gas = require('gas-local');
//pick default mock object
var defMock = gas.globalMockDefault;
//Mock MailApp by extending default mock object
var customMock = { 
    MailApp: { getRemainingDailyQuota: function () { return 50; } },
     __proto__: defMock 
  };
//pass it to require
var glib = gas.require('./src', customMock);

//call some function from your app script library working with MailApp 
glib.sendMails();
```

# Explanation

Google app script project normally consist of several js files which run in one context in google cloud. All content of these files is public. This incompatible with node.js approach where module is strictly single file and content is private by default. You need to use module.exports construct to make something visible.

gas-local allows to use google app script project "as is" without any rewrite for node.js. All scripts from google app script project are loaded to separate single context and doesn't mix with global context.

# Installation
TODO
```
npm install gas-local
```


# Testing
```
npm test
```

Test files located in test folder. Tests build around [sample](https://script.google.com/d/1rbgTsrQ2tYUWtKsc6rwke2OMbs2ElmAhi86uf38YM_efLUIRU2MjWSFq/edit?usp=sharing) google app script module and ensure that this app script library is loaded correctly by gas-local.
Sample library downloaded by gas-tools, but default download path has changed from src to test/src (in gapps.config.json).






# Useful links

- More about how gas-tools works - [Advanced Development Process with Apps Script](http://googleappsdeveloper.blogspot.ru/2015/12/advanced-development-process-with-apps.html) 




