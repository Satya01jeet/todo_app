import express from 'express';
import connection from './database/db.js';
const app = express();
const port = 8000;
connection();

app.listen(port,() => console.log(`server successfully running on port ${port}`));