const router = require('express').Router(); 
let Customer = require('../models/customer.model');

router.route('/').get((req, res) => {
    Customer.find()
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/register').post((req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const contactNumber = Number(req.body.contactNumber);
    const discounts = Number(req.body.discounts);
    const payments = Number(req.body.payment);
    const customerStatus = req.body.customerStatus;

    const newCustomer = new Customer({
        name,
        address,
        email,
        contactNumber,
        discounts,
        payments,
        customerStatus
       
    });

    newCustomer.save()
    .then(() => res.json('Customer registered successfully!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => { 
    Customer.findById(req.params.id)
    .then(customer => res.json(customer))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Customer.findByIdAndDelete(req.params.id)
    .then(() => res.json('Customer deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Customer.findById(req.params.id)
    .then(customer => {
        customer.name = req.body.name;
        customer.address = req.body.address;
        customer.email = req.body.email;
        customer.contactNumber = Number(req.body.contactNumber);
        
        customer.save()
            .then(() => res.json('customer updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
    
});

/// extra complete required

module.exports = router;
