require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./src/helpers/dbConfig');
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.connect().then(() => console.log('connet'));

app.listen(PORT, () => console.log(`server running at port ${PORT}`));
