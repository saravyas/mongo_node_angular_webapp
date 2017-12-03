var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    name: String,
    sku: String,
    price: Number
});

// var saraSchema = new mongoose.Schema({
// 	name: String
// });

// Return model
module.exports = restful.model('Products', productSchema);

// module.exports = restful.model('saravyas', saraSchema);


