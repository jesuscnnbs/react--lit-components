import dotenv from 'dotenv';
import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
dotenv.config()

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

const ads = [
    {title: 'Hello, world (again)!'}
  ];

app.get('/', (req, res) => {
    res.send(ads);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server started on port:", port);
});
