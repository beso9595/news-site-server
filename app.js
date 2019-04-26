const express = require('express');
const app = express();

require('dotenv').config();
require('./util/mongo');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/menu', require('./routes/menu'));
app.use('/category/', require('./routes/category'));
app.use('/article', require('./routes/article'));
app.use('/tag', require('./routes/tag'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
