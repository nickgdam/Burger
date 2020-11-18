var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function (req, res) {
    res.redirect("/burgers");
});
// Shows all burgers
router.get("/burgers", function (req, res) {
    
    burger.all(function (burgerData) {
      
        res.render("index", {
            burger_data: burgerData
        });
    });
});

// lets user create a new burger
router.post("/burgers/create", function (req, res) {
    
    burger.create(req.body.burger_name, function (result) {
       
        console.log(result);
        res.redirect("/");
    });
});

// Lets user "Devour" current burger
router.put("/burgers/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
 
   
        console.log(result);
        
        res.sendStatus(200);
    });
});

module.exports = router;
