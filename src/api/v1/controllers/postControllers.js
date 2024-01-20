import prepareHateoas from "../helpers/hateoas.js";
import {
  dbFilterData,
  dbGetData,

} from "../models/postModels.js";


// esto seria el sesion
export const getDB = async (req, res, next) => {
  try {
    const result = await dbGetData();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};


// requerimiento 1 a y b
export const getHATEOAS = async (req, res, next) => {
  try {
    const { limit, page, order_by } = req.query;
    const result = await dbGetData(limit, page, order_by);
    const formatHATEOAS = await prepareHateoas("joyas", result);

    //añadir paginado

    res.status(200).json(formatHATEOAS);
  } catch (error) {
    next(error);
  }
};


// requerimiento 2
export const getDBfilters = async (req, res, next) => {
  try {
    const { items, page, filters } = req.body

    const result = await dbFilterData(filters);

//añadir paginado
    res.status(200).json({ result: result });
  } catch (error) {
    next(error);
  }

};








// export const getDBlimited = async (req, res, next) => {
//   try {
//     console.log("query", req.query);
//     const { limit } = req.query;
//     const result = await dbDefaultLimit(limit);
//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// export const getFilteredDB = async (req, res, next) => {
//   try {
//     const { limit, order_by, page } = req.query;
//     const result = await dbFilterData(limit, order_by, page);
//     res.status(200).json({ result: result });
//   } catch (error) {
//     next(error);
//   }
// };



// export const getDB = async (req, res, next) => {
//   try {
//     const result = await dbGetData();
//     res.status(200).json(result);
//   } catch (error) {
//     next(error)
//   }
// };

