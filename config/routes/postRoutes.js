
import { Router } from "express";
import {
  // getDB,
  getDBfilters,
  getHATEOAS,

} from "../../src/api/v1/controllers/postControllers.js";

export const router = Router();

// estructura hateoas
// router.get("/joyas", getDB);

router.get("/joyas", getHATEOAS); // requerimiento 1 a y b 


router.get("/joyas/:id",) //route for href


router.get("/joyas/filtros", getDBfilters )// filtros



// export default router;

// router
//   .route("/joyas")
//   .get(getDB) // visualizar
  // .all(function (req, res, next) {
  //   res.status(405).json({ message: "not allowed" });
  // }); 
  
// router
//   .route("/joyas/filtros")
//   .get(getDBfilters) // visualizar
//   .all(function (req, res, next) {
//     res.status(405).json({ message: "not allowed" });
//   }); 

// router.use("*", notFound); 

