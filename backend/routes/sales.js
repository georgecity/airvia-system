const router = require('express').Router(); 
let Sales = require('../models/sales.model');

router.route('/').get((req, res) => {
    Sales.find()
    .then(sales => res.json(sales))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
    const ticketAmount = Number(req.body.ticketAmount);
    const blankId = req.body.blankId;
    const blankType = Number(req.body.blankType);
    const saleType = req.body.saleType;
    const coupons = req.body.coupons;
    const date = Date.parse(req.body.date);
    const method = req.body.method;
    const currency = Number(req.body.currency);
    const comision = Number(req.body.comision);
    const discount = Number(req.body.discount);
    const customer = req.body.customer;
    const payment = req.body.payment;
    const advisor = req.body.advisor;
    const totalPrice = Number(req.body.totalPrice);

    //
    const newSales = new Sales({
        ticketAmount,
        blankId,
        blankType,
        saleType,
        coupons,
        date,
        method,
        currency,
        comision,
        discount,
        customer,
        payment,
        advisor,
        totalPrice
    });

    newSales.save()
    .then(() => res.json('Sales recorded!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

// extra maybe
router.route('/:id').get((req, res) => { 
    Sales.findById(req.params.id)
    .then(sale => res.json(sale))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => { ///domt know yet
    Sales.findByIdAndDelete(req.params.id)
    .then(() => res.json('Sales deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => { //maybe not neccesarry
    Sales.findById(req.params.id)
    .then(sale => {
        sale.ticketAmount = Number(req.body.ticketAmount);
        sale.date = Date.parse(req.body.date);
        sale.method = req.body.method;
        sale.currency = req.body.currency;
        sale.currency = req.body.currency;
        
        sale.save()
            .then(() => res.json('sales updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
    
});
module.exports = router;