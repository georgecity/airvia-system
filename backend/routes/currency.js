const router = require('express').Router(); 
let Currency = require('../models/currency.model');

router.route('/').get((req, res) => {
    Currency.find()
    .then(currencies => res.json(currencies))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
    const creator = req.body.creator;
    const currency = Number(req.body.currency);
    const date = Date.parse(req.body.date);

    const newCurrency = new Currency({
        creator,
        currency,
        date
    });

    newCurrency.save()
    .then(() => res.json('Currency added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').delete((req, res) => {
    Currency.findByIdAndDelete(req.params.id)
    .then(() => res.json('Currency deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
// extra maybe
module.exports = router;
