"use strict";

/**
 * module declaration and imports;
 * global variables declaration
 */
var express = require("express");

var bodyParser = require("body-parser");

var date = require("./date");

var port = 3000;
var app = express();
var items = [];
var workItems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express["static"]('public'));
app.listen(port, function () {
  console.log("Server started on port: " + port);
});
app.get("/", function (req, res) {
  var day = date.getDate(); //the listTitle and the collection is the varaible defined in the list.ejs
  //use "list" to find the exact file to check the variable

  res.render("list", {
    listTitle: day,
    collection: items
  });
});
/**
 * 1. assign the listTitle to be "Work" -> to use the button value to redirect to the right place
 * 2. use the same CSS template as home route
 * 3. the variable listTitle and collection are in the {@link list.ejs"}
 */

app.get("/work", function (req, res) {
  res.render("list", {
    listTitle: "Work",
    collection: workItems
  });
});
app.get("/about", function (req, res) {
  res.render("about");
});
app.post("/", function (req, res) {
  var item = req.body.newItem;

  if (req.body.addButton === "Work") {
    workItems.push(item);
    res.redirect("/work");
  }

  if (req.body.deleteButton === "Work") {
    workItems.pop();
    res.redirect("/work");
  }

  if (req.body.addButton) {
    items.push(item);
    res.redirect("/");
  }

  if (req.body.deleteButton) {
    items.pop();
    res.redirect("/");
  }
});