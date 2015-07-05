/**
 * Sample model exported as a mongoose schema.
 * @type {*|exports}
 */
var mongoose = require('mongoose');

var SomeModelSchema = new mongoose.Schema({
    username:{type: String}
});

module.exports = mongoose.model('SomeModel',SomeModelSchema);