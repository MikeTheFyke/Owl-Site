const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET Posts
router.get('/', async (req, res) => {
    const items = await loadItemsCollection();
    res.send(await items.find({}).toArray());
})

// Connection to MongoDB
async function loadItemsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://mike_123:mike_123@cluster0.yp0q2.mongodb.net/owl_site?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return client.db('owl_site').collection('items');
}

module.exports = router;