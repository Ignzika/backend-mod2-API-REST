import prepareHateoas from "../helpers/hateoas.js";
import pagination from "../helpers/paginator.js";
import { dbFilterData, getDataFilter } from "../models/postModels.js";

// esto seria el sesioncontroller ?
// export const getDB = async (req, res, next) => {
//   try {
//     const result = await dbGetData();
//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// requerimiento 1 a y b
export const getHATEOAS = async (req, res, next) => {
  try {
    const { limit, page, order_by } = req.query;
    //validar n0 paginas
    const result = await getDataFilter(limit, page, order_by);
    const formatHATEOAS = await prepareHateoas("joyas", result);
    // console.log(formatHATEOAS)
    const paginatedFormatData = pagination(formatHATEOAS, limit, page);
    // console.log(paginatedFormatData)
    res.status(200).json(paginatedFormatData);
  } catch (error) {
    next(error);
  }
};

// requerimiento 2
export const getDBfilters = async (req, res, next) => {
  try {
    const filters = req.query;
    const result = await dbFilterData(filters);
    res.status(200).json({ result: result });
  } catch (error) {
    next(error);
  }
};
