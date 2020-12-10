const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
var items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.listen(port, function(){
    console.log("Server started on port: "+ port);
});

app.get("/", function(req, res){
    var today = new Date();
    var options = {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    }
    
    var day = today.toLocaleDateString('en-us', options);

    res.render("list", {kindOfDay: day, collection: items});

});

app.post("/", function(req, res){
    var item = req.body.newItem;
    var choice = "";

    if (choice === req.body.addButton) {
        items.push(item);
    }

    if (choice === req.body.deleteButton) {
        items.pop();
    }

    res.redirect("/");
    
});