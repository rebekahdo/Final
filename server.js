const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rgm:1eCs2Gzy6pE90ObT@cluster0.j66yeer.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('todos')
    const todosCollection = db.collection('todos')
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use("/styles",express.static(__dirname + "/styles"));

    app.listen(3000, function() {
        console.log('listening on 3000')
    })

    app.get('/', (req, res) => {
        db.collection('todos').find().toArray()
          .then(results => {
            console.log(results)
            res.render('index.ejs', { todos: results })
          })
          .catch(error => console.error(error))
      })

    app.post('/todos', (req, res) => {
        todosCollection.insertOne(req.body)
          .then(result => {
            res.redirect('/')
          })
          .catch(error => console.error(error))
      })
  })