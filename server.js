var express = require('express'),
    path = require('path'),
    connect = require('connect'),
    //piler = require('piler'),
    minify = require('express-minify');

var app = express();

var port = process.env.PORT || 8000;
var oneDay = 86400000;

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/ui');

//app.use(express.compress());
// app.use(minify(
// {
//     cache: __dirname + '/cache'
// }));


app.use(require('body-parser')());


app.use(connect.urlencoded())
app.use(connect.json())




// app.use('/assets', express.static(__dirname, '/app/assets',
// {
//     //maxAge: oneDay
// }));
app.use(express.static(__dirname + '/ui',
{
    //maxAge: oneDay
}));


app.get('/',
    function(req, res)
    {
        res.render('index.html');
    });


app.listen(port);
console.log('listening on localhost:' + port);
