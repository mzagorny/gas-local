# gas-local

[![NPM Version][npm-image]][npm-url]

Execute and test your [google apps script](https://developers.google.com/apps-script/) projects locally in node.js runtime.

Companion to [google clasp](https://developers.google.com/apps-script/guides/clasp)

# Workflow

- Download your google apps script project using clasp. 
//all .gs files of your project will appear as javascript files in your folder
- Adjust local subfolder folder in .clasp.json, e.g. "src"
- "Require" your library as usual module in your local tests via gas-local
```javascript
//require gas-local itself
var gas = require('gas-local');
//require your downloaded google apps script library from src subfolder as normal module   
var glib = gas.require('./src');
//call some function from your app script library 
glib.somefunction();
```
- Develop and test your google apps script project locally
- Upload changes back to google using gapps. 

# How to mock google services
gas-local already mocks parts of Logger and Utilities by default (see globalmock-default.js).
But you also can provide mocks for other google services for your tests. 
Below is example how to mock MailApp.getRemainingDailyQuota function.  

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

There is a difference what is module in google apps script and what is module in node. 
Google apps script module (or library) consist of several javascript files which shares common context in runtime.  
All content of these files (functions and variable) is public. This incompatible with node.js approach where module is strictly single file and content is private by default. You need to use module.exports construct to make something visible.

gas-local allows to use google apps script project "as is" without any rewriting to use in node. All scripts from google apps script project are loaded to separate single context and doesn't mix with global context.

# Installation
```
npm install gas-local --save
```

# Testing
```
npm test
```

Test files located in test folder. Tests build around [sample](https://script.google.com/d/1rbgTsrQ2tYUWtKsc6rwke2OMbs2ElmAhi86uf38YM_efLUIRU2MjWSFq/edit?usp=sharing) google app script module and ensure that this app script library is loaded correctly by gas-local.
Sample library downloaded by gapps, but default download path has changed from src to test/src (in gapps.config.json).

# Useful links

- [Advanced Development Process with Apps Script](http://googleappsdeveloper.blogspot.ru/2015/12/advanced-development-process-with-apps.html) - more about how to use gapps utility 
- [Executing JS Code in a Sandbox With Node's VM Module](https://60devs.com/executing-js-code-with-nodes-vm-module.html) - great reading about contexts and sandboxes
- [Scripting a Node.js App](http://www.hacksparrow.com/scripting-a-node-js-app.html) - node scripting in action and how to handle script errors 

[npm-image]: https://img.shields.io/npm/v/gas-local.svg
[npm-url]: https://npmjs.org/package/gas-local


