import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

//conexion a base de datos
const mongoose = require('mongoose');

//conexion local
// const uri = 'mongodb://localhost:27017cricker';

//conexion en la nube
const uri = 'mongodb+srv://luisisturiz3:1HXwRtE13Gu5yBA8@tuiter-qfebd.mongodb.net/test?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
}
mongoose.connect(uri, options).then(
  () => { console.log("conectado a mongodb"); },
  err => { err }
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Rutas
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use('/api', require('./routes/tuit'))

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});