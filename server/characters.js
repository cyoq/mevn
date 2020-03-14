
const express = require('express');
const Character = require('./character');

const router = express.Router();

router.get('/', async (_req, res) => {
    
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch(err) {
        res.status(500).json({
            message: err.message,
        });
    }

});

router.post('/', async (req, res) => {

    const character = new Character({
        name: req.body.name,
        profession: req.body.profession
    });

    try {
        const newCharacter = await character.save();
        res.status(201).json(newCharacter);
    } catch(err) {
        res.status(400).json({
            message: err.message
        });
    }
});

router.delete('/:id', async (req, res) => {


    try {
        await Character.remove({_id: req.params.id});
        res.status(200).json({
            message: "Deleted succesfully!"
        });
    } catch(err) {
        res.status(400).json({
            message: err.message
        });
    }

    
});

router.put('/:id', async (req, res) => {
    
    try {

        const character = new Character({
            name: req.body.name,
            profession: req.body.profession
        });

        const insertData = character.toObject();
        delete insertData._id;

        await Character.update({_id: req.params.id}, insertData);

        res.status(200).json({
            message: "Updated!",
            character: character
        });
    } catch(err) {
        res.status(400).json({
            message: err.message
        });
    }


});


module.exports = router;