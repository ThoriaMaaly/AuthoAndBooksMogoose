import express from "express"
import { dbConnection } from "./DB/db connection.js";
const port =8080;
const app= express();
dbConnection();

import { book } from "./DB/bookModel.js";
import { author } from "./DB/authorModel.js";
import { bookroutes } from "./src/modules/books/books.routes.js";
import { authorRoutes } from "./src/modules/authors/authors.routes.js";
import { allRoutes } from "./src/modules/All/all.routes.js";

app.use(express.json());
app.use("/books",bookroutes)
app.use("/authors",authorRoutes)
app.use("/all",allRoutes)
app.listen(port,()=>{
console.log("server is running..")
})