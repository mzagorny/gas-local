# Description

Allows to run and test google app scripts (gas) in local node.js environment.

# Usage

- Download your standalone apps script project via [gas tools](https://www.npmjs.com/package/node-google-apps-script). 
Content of your project will appear in 'src' subfolder   

- "Require" your library and use the same way as in google cloud
```javascript
var gas = require('gas-local');
//load your google scripts from src subfolder as module   
var glib=gas.require('./src');
//call some function from your module 
glib.somefunction();
```

read google's  [post](http://googleappsdeveloper.blogspot.ru/2015/12/advanced-development-process-with-apps.html) first
for more details

