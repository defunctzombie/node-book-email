
// 3rd party
var emailjs = require('emailjs');

module.exports = function(opt) {

    var from = opt.from;
    var to = opt.to;
    var subj = opt.subject || 'application log message';

    if (!from) {
        throw new Error('from field must be specified for book-email');
    }

    if (!to) {
        throw new Error('to field must be specified for book-email');
    }

    var server = emailjs.server.connect({
        host: opt.host,
        port: opt.port,
        domain: opt.domain,
        user: opt.user,
        password: opt.password,
        tls: opt.tls
    });

    /// actual logging work
    return function() {
        var body = JSON.stringify(this);

        server.send({
            from: from,
            to: to,
            subject: subj,
            text: body
        }, function(err) {
            if (err) {
                console.error(err.stack);
            }
        });
    }

};
