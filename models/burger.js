// import ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burgers = {
    
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
   
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    deleteOne: function(objColVals, condition, cb) {
        orm.deleteOne("burgers", objColVals, condition, function(res) {
            cb(res);
        
    });
}
};


module.exports = burgers;
