# Description

Allows to run and test google app scripts (gas) in local node.js environment.

# Usage

- download your gas library to your project folder via [gas tools](https://www.npmjs.com/package/node-google-apps-script). 
Your google scripts will appear in 'src' subfolder   

- load your library in code this way
```javascript
var gas = require('gas-local');
//load your google scripts from src subfolder as module   
var glib=gas.require('./src');
//use it as usual 
glib.somefunction();
```

Please read google's  [post](http://googleappsdeveloper.blogspot.ru/2015/12/advanced-development-process-with-apps.html) first
for more details

How to use
==
- install tool [gas tools](https://www.npmjs.com/package/node-google-apps-script)
- configure your gas-script to develop locally using instruction from page above