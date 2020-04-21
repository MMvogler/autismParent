var path = require('path');

module.exports = function (app) {

    app.use( function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

    app.get('/about', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/about.html'));
    });

    app.get('/sites', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/sites.html'));
    });

    app.get('/events', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/events.html'));
    });

    app.get('/resources', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/resources.html'));
    });

}