import express, { Express } from "express";
import cors from 'cors';
// import {Chalk} from 'chalk';
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app: Express = express();

// Force sync all models
// It will drop the table first
// and re-create it afterwards
// sequelizeConn.sync({ force: false });

// sequelizeConn
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => console.error("Unable to connect to the database: ", err));

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

// app.use('/api');
app.use("/api", router);

app.listen(port, () => {
  console.log(`server is running on port ${port}\nhttp://localhost:${port}`);
});
