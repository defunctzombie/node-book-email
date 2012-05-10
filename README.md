book-email is an email transport for the [book](https://github.com/shtylman/node-book) logging framework. It will send the log message via email.

## installation ##

```
npm install book-email
```

## use ##

book-email is used like all other book middleware. Just add it to your logger object. I recommend you create a file ```log.js``` for your project where you setup the logger however you desire across your entire project.

```javascript
// some logger you have created
var log = require('book').default();

// adds the email logging middleware to the logger
log.use(require('book-email')({
    from: 'noreply@example.com',
    to: 'problems@example.com',
    host: 'smtp.example.com',
    port: 587,

    // optional
    tls: true,
    user: 'foo',
    password: 'bar'
});

// log stuffs, it will be emailed out
log.info('hello world!');
```

An email will be dispatched to the specified smtp server with the json log entry

