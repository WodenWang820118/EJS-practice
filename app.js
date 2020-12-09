const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    var today = new Date().getDate();
    var day ="";

    if (today === 6 || today === 0){
        day = today;
    } else {
        day = today;
    }

    res.render("list", {kindOfDay: day});

});

app.listen(port, function(){
    console.log("Server started on port: "+ port);
});