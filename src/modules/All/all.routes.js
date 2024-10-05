import { Router } from "express";
import { All } from "./all.controllers.js";
export const allRoutes=Router();
allRoutes.get('/',All)