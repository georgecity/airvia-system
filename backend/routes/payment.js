const router = require('express').Router(); 
let Payment = require('../models/payment.model');

router.route('/').get((req, res) => {
    Discount.find()
    .then(discounts => res.json(discounts))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => { //id add
    const customer = req.body.customer;
    const cardNumber = Number(req.body.cardNumber);
    const cvv = Number(req.body.cvv);
    const expiryDate = Date.parse(req.body.expiryDate);
    const billingAddress = req.body.billingAddress;
    const nameOnCard = req.body.nameOnCard;

    //
    const newPayment = new Payment({
        customer,
        cardNumber,
        cvv,
        expiryDate,
        billingAddress,
        nameOnCard
    });

    newPayment.save()
    .then(() => res.json('Payment Details recorded!'))
    .catch(err => res.status(400).json('Error: '+ err));
});
// extra maybe
router.route('/:id').get((req, res) => { 
    Payment.findById(req.params.id)
    .then(payment => res.json(payment))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Payment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Payment deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;