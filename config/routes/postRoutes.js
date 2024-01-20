
import { Router } from "express";
import {
  getDB,
  getHATEOAS,

} from "../../src/api/v1/controllers/postControllers.js";


export const router = Router();

// estructura hateoas
// router.get("/joyas", getDB);

router.get("/joyas", getHATEOAS); // requerimiento 1 a y b 


router.get("/joyas/:id",) //route for href


router.get("/joyas/filtros", )// filtros


// router.get("/joyas/filtros/1", getFilteredDB)

// fusion ?

// export default router;

// router
//   .route("/joyas")
//   .get(getDB) // visualizar
  // .post(postPost) //titulo,img,descripcion
  // .all(function (req, res, next) {
  //   res.status(405).json({ message: "not allowed" });
  // }); // .all bloqueasr otras acciones con esta ruta
  
// router
//   .route("/joyas/filtros")

//   .put(putLikePost) //likes
//   .all(function (req, res, next) {
//     res.status(405).json({ message: "not allowed" });
//   }); // .all bloqueasr otras acciones con esta ruta



// router.use("*", notFound); // para routas que no existan

