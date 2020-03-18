const router = require('express').Router(); 
let Comission = require('../models/comission.model');

router.route('/').get((req, res) => {
    Comission.find()
    .then(comissions => res.json(comissions))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
    const creator = req.body.creator;
    const comission = Number(req.body.comission);
    
    const newComission = new Comission({
        creator,
        comission
    });

    newComission.save()
    .then(() => res.json('Comission added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').delete((req, res) => {
    Comission.findByIdAndDelete(req.params.id)
    .then(() => res.json('Comission deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
// extra maybe
module.exports = router;
