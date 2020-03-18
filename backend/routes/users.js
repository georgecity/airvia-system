const router = require('express').Router();
let User = require("../models/user.model");

router.route('/').get((req, res) => { 
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const contactNumber = Number(req.body.contactNumber);
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    //
    const newUser = new User({
        name,
        address,
        contactNumber,
        email,
        password,
        role
    });

    newUser.save()
    .then(() => res.json('User registered successfully!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => { 
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
    .then(user => {
        user.name = req.body.name;
        user.address = req.body.address;
        user.contactNumber = req.body.contactNumber;
        user.email = req.body.email;
        user.password = req.body.password;
        user.role = req.body.role;
        
        user.save()
            .then(() => res.json('User updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
    
});

module.exports = router;