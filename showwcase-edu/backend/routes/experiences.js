const express = require('express');
const Experience = require('../models/Experience');
const authenticate = require('../middleware/authenticate');

const router = express.Router();


router.get('/', authenticate, async (req, res) => {
    try {
        const experiences = await Experience.find({ userId: req.user.id });
        res.json(experiences);
    } catch (err) {
        res.status(500).json({ error: 'Server error.' });
    }
});


router.post('/', authenticate, async (req, res) => {
    try {
        const experience = new Experience({ ...req.body, userId: req.user.id });
        await experience.save();
        res.status(201).json(experience);
    } catch (err) {
        res.status(500).json({ error: 'Server error.' });
    }
});


router.put('/:id', authenticate, async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            req.body,
            { new: true }
        );

        if (!experience) {
            return res.status(404).json({ error: 'Experience not found.' });
        }

        res.json(experience);
    } catch (err) {
        res.status(500).json({ error: 'Server error.' });
    }
});


router.delete('/:id', authenticate, async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id,
        });

        if (!experience) {
            return res.status(404).json({ error: 'Experience not found.' });
        }

        res.json({ message: 'Experience deleted successfully.' });
    } catch (err) {
        res.status(500).json({ error: 'Server error.' });
    }
});

module.exports = router;
