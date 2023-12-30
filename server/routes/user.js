const express = require('express');
const router = express.Router();
const Create = require('../Models/User_Model.js');

// Handle POST request to add a new post
router.post('/Create_Card', async (req, res) => {
    const { imgurl, title, description, author, ClickedDate } = req.body;

    try {
        const newCard = new Create({
            imgurl,
            title,
            description,
            author,
            ClickedDate
        });

        const savedPost = await newCard.save();
        res.json(savedPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Handle GET request to retrieve all cards including only _id, title, author, and imgurl
router.get('/all_Images', async (req, res) => {
    try {
        const allCards = await Create.find().select('_id title author imgurl');
        res.json(allCards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Handle GET request to retrieve details of a specific card by _id
router.get('/:_id', async (req, res) => {
    const postId = req.params._id;

    try {
        const Card = await Create.findById(postId);

        if (!Card) {
            return res.status(404).json({ message: 'Card not found' });
        }

        res.json(Card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update the content of an existing card by _id
router.put('/updateCard/:_id', async (req, res) => {
    const cardId = req.params._id;
    const { title, description, author, imgurl, ClickedDate } = req.body;

    try {
        const updatedCard = await Create.findByIdAndUpdate(
            cardId,
            {
                title,
                description,
                author,
                imgurl,
                ClickedDate
            },
            { new: true } // Return the updated document
        );

        if (!updatedCard) {
            return res.status(404).json({ message: 'Card not found' });
        }

        res.json({ message: 'Card successfully updated', updatedCard });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Delete a card by _id
router.delete('/deleteCard/:_id', async (req, res) => {
    const cardId = req.params._id;

    try {
        const deletedCard = await Create.findByIdAndDelete(cardId);

        if (!deletedCard) {
            return res.status(404).json({ message: 'Card not found' });
        }

        res.json({ message: 'Card successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
