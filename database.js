// you need to execute mongod on a terminal

const mongoose = require('mongoose');

const uri = "mongodb+srv://Estancia2:DPtBA7FFvWpBX70E@estanciaii.b7w1p.mongodb.net/EstanciaDB?retryWrites=true&w=majority";
// User: Estancia2
// Password: DPtBA7FFvWpBX70E
// mongoose connects to our db
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
});

mongoose.set('useFindAndModify', false);

// store the connection
const connection = mongoose.connection;

// once open, arrow function is excecuted
connection.once('open', () => {
    console.log('DB is connected');
})