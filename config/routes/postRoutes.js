import { Router } from "express";
import {
  getDBfilters,
  getHATEOAS,
} from "../../src/api/v1/controllers/postControllers.js";

export const router = Router();

router.get("/joyas", getHATEOAS); // requerimiento 1 a y b

router.get("/joyas/:id"); //route for href

router.get("/joyas/filtros", getDBfilters); // filtros


// router.all("*", notFound); 