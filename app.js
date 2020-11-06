var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

// var Signs = require('./server/signs');

// async function loadSignsCollection() {
// const client = mongodb.MongoClient.connect
// ('mongodb+srv://mike_123:mike_123@cluster0.yp0q2.mongodb.net/owl_site?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// return client.db('owl_site').collection('signs');
// }
// (async function() {
//     try {
  
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.connect('mongodb+srv://mike_123:mike_123@cluster0.yp0q2.mongodb.net/owl_site?retryWrites=true&w=majority');
// client.close();
// } catch(e) {
//   console.error(e)
// }

// })()

// var db = mongoose.connection;

// app.get('/', function(req, res){
//     res.send('Hello World!');
// });

// app.get('/api/signs', function(req, res){
//     Signs.loadSignsCollection(function(err, signs){
//         if (err){
//             throw err;
//         }
//         res.json(signs);
//     });
// });

// app.listen(3000);
// console.log("Running on port 3000")
app.use(bodyParser.json());
app.use(cors());

const signs = require('./server/signs');
const items = require('./server/items');

app.use('/api/signs', signs)
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));