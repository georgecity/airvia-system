const router = require('express').Router(); 
let Discount = require('../models/discount.model');

router.route('/').get((req, res) => {
    Discount.find()
    .then(discounts => res.json(discounts))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
    const creator = req.body.creator;
    const discountName = req.body.discountName;
    const discount = Number(req.body.discount); //percentage
    const type = req.body.type;
    const condition = Number(req.body.condition); //condition

    const newDiscount = new Discount({
        creator,
        discountName,
        discount,
        type,
        condition,
    });

    newDiscount.save()
    .then(() => res.json('Discount added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

// extra maybe
router.route('/:id').get((req, res) => { 
    Discount.findById(req.params.id)
    .then(discount => res.json(discount))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Discount.findByIdAndDelete(req.params.id)
    .then(() => res.json('Discount deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Discount.findById(req.params.id)
    .then(discount => {
        discount.creator = req.body.creator;
        discount.discount = Number(req.body.discount);
        discount.type = req.body.type;
        discount.conditions = Number(req.body.conditions);
        
        discount.save()
            .then(() => res.json('Discount updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
    
});

module.exports = router;
