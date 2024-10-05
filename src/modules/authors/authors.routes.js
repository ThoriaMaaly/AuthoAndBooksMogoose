import { Router } from "express";
import { addauthor, allauthors, deleteauthor, getauthor, updateauthor } from "./authors.controllers.js";

export const authorRoutes= Router();

authorRoutes.route("/").get(allauthors).post(addauthor);
authorRoutes.route("/:id").get(getauthor).patch(updateauthor).delete(deleteauthor);