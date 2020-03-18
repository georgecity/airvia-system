const router = require('express').Router(); 
let Blank = require('../models/blank.model');

router.route('/').get((req, res) => {
    Blank.find()
    .then(blanks => res.json(blanks))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
    const owner = req.body.owner;
    const blankType = Number(req.body.blankType);
    const blankID = Number(req.body.blankID);
    const status = req.body.status;

    const newBlank = new Blank({
        owner,
        blankType,
        blankID,
        status
    });

    newBlank.save()
    .then(() => res.json('Blank Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// extra maybe
router.route('/:id').get((req, res) => { 
    Blank.findById(req.params.id)
    .then(blank => res.json(blank))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Blank.findByIdAndDelete(req.params.id)
    .then(() => res.json('Blank deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Blank.findById(req.params.id)
    .then(blank => {
        blank.owner = req.body.owner;
        blank.status = req.body.status;

        blank.save()
            .then(() => res.json('blank updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
    
});

module.exports = router;