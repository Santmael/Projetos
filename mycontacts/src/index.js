const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(3000, () => console.log('server rodando na porta http://localhost:3000'));
