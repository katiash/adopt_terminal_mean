// Require controller.js file and set it to a variable:
var pets = require('../controllers/pets.js'); //<--- CHANGE "controller" var name (1), CHANGE FILENAME !!

// Export these routes to Angular/Client:
module.exports = function(app) {
    // NOTE: "app" was passed to *this* file (routes.js) from our server.js file 
    // when node server was started.
    
    // List all restaurants
     app.get('/pets', function(req, res) { 
        pets.getAllPets(req,res)      
    })

    // Get one restaurant by ID
    app.get('/pet/:id', function(req, res) { 
        console.log("Hit the /restaurant/:id route on server.");
        pets.getOnePetById(req,res)      
    })

    // Edit a restaurant
    app.patch('/edit-pet/:id',function(req, res){
        console.log("I am in routes file. Calling controller editRest method!")
        pets.editPet(req,res)
    })

    // Delete a restaurant
    app.delete('/delete-pet/:id',function(req, res){
        pets.deletePet(req,res)
    })
 
    //Register a new restaurant
    app.post('/new-pet', function(req, res) {
        pets.addPet(req, res)
    })

}
