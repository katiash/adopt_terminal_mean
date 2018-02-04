// Require mongoose:
var mongoose = require('mongoose');

// Name & Describe Schema:

var notMore = function(skills){
    if(skills.length > 3){return false}
    else {return true};
}


var PetSchema = new mongoose.Schema({  //<--- NAME & DESCRIBE SCHEMA STRUCTURE as APPROPRIATE TO YOUR PROJECT !!!
    name: {
        type:String,
        minlength: 3,
        required:[true],
        unique: [true, "Pet name already exists. Choose a unique name."],
        message: "Pet name has to be at least 3 characaters long",
    },  
    type: {
        type: String, 
        minlength: 3,
        required:[true],
        message: "Pet type must contain at least 3 characters",
    },

    description: {
        type: String, 
        minlength: 3,
        required:[true],
        message: "Pet description must contain at least 3 characters",
    },

    skills: { 
        type: Array,
        maxlength: 3,
        validate: [notMore, 'Please choose at maximum 3 skills per Pet.'],
        message: "Pet skills validations ran.."
    }
}, {timestamps: true })

// Set this Schema in our Models as 'Schema_Instance' (creates our Model):
mongoose.model('Pet', PetSchema);    //<-- CHANGE MODEL/Schema Instance NAME, CHANGE SCHEMA NAME !!!
