const mongoose = require('mongoose');
//get scheme property using destructuring
//same as "const Schema = mongoose.Schema;"
const {
    Schema
} = mongoose;

//An schema describes all the properies that a record will have.
//mongoose wants to know all the different properties that our record will have
//inside of our database. With Mongo, record properties can be sporadic.
const userSchema =
    new Schema({
        googleID: String
    });

//To Create a Model class (javascript) and tell Mongo DB to be aware of a possible collectiuon
mongoose.model('userModel', userSchema);