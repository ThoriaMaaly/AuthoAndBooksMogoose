import { Router } from "express";
import { addbook, allbooks, deletebook, getbook, updatebook } from "./books.controllers.js";
export const bookroutes= Router();
bookroutes.route("/").get(allbooks).post(addbook);
bookroutes.route("/:id").get(getbook).patch(updatebook).delete(deletebook);