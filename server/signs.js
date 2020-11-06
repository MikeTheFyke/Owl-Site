const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET Posts
router.get('/', async (req, res) => {
    const signs = await loadSignsCollection();
    res.send(await signs.find({}).toArray());
})

// // ADD Posts
// router.post('/', async (req, res) => {
//     const posts = await loadPostsCollection();
//     await posts.insertOne({
//         name: req.body.name,
//         price: "$0.00",
//         quantity: req.body.quantity,
//         createdAt: new Date()
//     });
//     res.status(201).send();
// });

// // DELETE Post
// router.delete('/:id', async (req, res) => {
//     const posts = await loadPostsCollection();
//     await posts.deleteOne({_id: new mongodb.ObjectID (req.params.id)})
//     console.log("Deleting")
//     res.status(200).send({});
// })

// Connection to MongoDB
async function loadSignsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://mike_123:mike_123@cluster0.yp0q2.mongodb.net/owl_site?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return client.db('owl_site').collection('signs');
}

module.exports = router;