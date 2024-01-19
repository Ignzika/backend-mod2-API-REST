
import { Router } from "express";
import {
  getDB,
  getDBlimited,
  getFilteredDB
} from "../../src/api/v1/controllers/postControllers.js";


export const router = Router();

// estructura hateoas

router.get("/joyas", getDB);

// para filtros query
router.get("/joyas/filtros", getDBlimited)

router.get("/joyas/filtros/1", getFilteredDB)

// fusion ?


// si te da el tiempo


router.post("/joyas",)
router.put("/joyas/:id",)
router.patch("/joyas/:id",)
router.delete("/joyas7:id",)






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

