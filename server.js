var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var PORT = 3000;

app.use(bodyParser.json()); //always copy and paste these four lines  | tells express to use bodyParser | allows you to get data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var roster = [{
    name: "one"
},
{
    name: "two"
}
];

app.get('/', function(req, res) {
    res.send('welcome to my site');
});

app.get('/students', function(req, res) {
    res.json(roster);
});

app.get('/students/:studentId', function(req, res) {
    res.json(roster[req.params.studendId]);
});

app.post('/add', function(req, res){
    console.log(req.body);
    if (req.body.name) {
        roster.push(req.body);
        res.send('student added new');
    } else {
        response.send('womp');
    }
})

app.listen(PORT, function () {
    console.log('Listening on PORT ${PORT}');
});