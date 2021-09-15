const express = require('express');
const connectDb = require('./config/db.config');
const cors = require('cors');
const jokeRoutes = require('./routes/jokes.routes');
const userRoutes = require('./routes/users.routes');

const PORT = 5000;
// Connect to DataBase
connectDb();

const app = express();
// Cors Middleware
// const cors = (req, res, next) => {
//   res.setHeader('access-control-allow-origin', '*');
//   next();
// };
// app.use(cors);

// Utilizar o json no body das requisições
app.use(express.json());

app.use(cors());

// Rotas

app.use('/', userRoutes);
app.use('/jokes', jokeRoutes);


app.listen(PORT, () => console.log(`Server listen on Port ${PORT}`));
