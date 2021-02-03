var mongoose = require('mongoose');
// var mongoosePaginate = require('mongoose-paginate');

var schema = mongoose.Schema({
    name: { 
        type: String, 
        required: true
    }, 
    model: {
        required: true,
        type: String,
    }, 
    color: {
        required: true,
        type: String        
    }
});

// schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Car', schema);