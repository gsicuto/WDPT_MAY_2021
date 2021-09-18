require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db.config');
const jokeRoutes = require('./routes/jokes.routes');
const userRoutes = require('./routes/users.routes');
const authRoutes = require('./routes/auth.routes');
const authMiddleware = require('./middlewares/auth.middleware');

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

// Rotas Publicas não precisam de token
app.use('/', authRoutes);

// Middleware de autenticação
app.use(authMiddleware); // <----- sempre passa aqui antes das rotas Privadas

// Rotas Privadas Precisam de autenticação
app.use('/', userRoutes);
app.use('/jokes', jokeRoutes);


app.listen(process.env.PORT, () => console.log(`Server listen on Port ${process.env.PORT}`));
