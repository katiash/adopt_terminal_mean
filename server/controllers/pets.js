// require mongoose:
var mongoose = require('mongoose');

// Retrieve this Schema/Model from our Models, and set it to a variable.
// That varibale represents the Table that has the Schema structure we described. 
// We will run our CRUD methods on it:
var Pet = mongoose.model('Pet'); // <--- CHANGE THIS ACCORDING TO YOUR PROJECT (LOOK AT YOUR MODEL FILE)

module.exports = {
  
    getAllPets: function(req, res) {
        Pet.find({}, function(err, data) {
            if (err) {
                console.log("getAll Pets controller error:", err); 
                res.json({message: "Error!", err: err}); 
            } else {
                res.json({message: "Success", data: data}) 
            }
         
        }) 
    },

    getOnePetById: function(req, res) {
        Pet.findOne({_id: req.params.id}, function(err, data){
            console.log("Controller getOnePetById: ", req.params.id);
            if (err) {
                console.log("In controller, getOnePetByID with error:", err); 
                res.json({message: "Error!", err: err}); 
            } else {
                console.log("In controller, getOnePetById with success data:", data);
                res.json({message: "Success", data: data}) 
            }
        })    
    },

    deletePet: function(req, res) {
        Pet.deleteOne({_id: req.params.id}, function(err, data){
            if (err) {
                console.log("deletePet/adopt controller error:", err); 
                res.json({message: "Error!", err: err}); 
            } else {
                res.json({message: "Adopt(delete) success", data: data}) 
            }
        })    
    },

    editPet: function(req, res){
        Pet.update({_id:req.body._id}, req.body,{runValidators:true}, function(err, data) {
            console.log("I am in controller editPet method. My post body and _id is: ", req.body, req.body._id);
            if (err) {
                console.log("editPet error:", err); 
                res.json({message: "Error!", err: err}); 
            } else {
                res.json({message: "Success", data: data}) 
            }
        })
    },

    addPet: function(req, res) {
        console.log("New Pet controller:", req.body)
        Pet.create(req.body, function(err, data) {
            if (err) {
                console.log("addPet error:", err); 
                res.json({message: "Error", err: err}); 
            } else {
                console.log("Controller says: Successfully created a pet in DB!");
                res.json({message: "Success", data: data});
            } 
        })
    }

}