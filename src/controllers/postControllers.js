import {
  dbDefaultLimit,
  dbGetData,
  dbFilterData,
  gollumFilter,
} from "../models/postModels.js";

export const getDB = async (req, res, next) => {
  try {
    const result = await dbGetData();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getDBlimited = async (req, res, next) => {
  try {
    console.log("query", req.query);
    const { limit } = req.query;
    const result = await dbDefaultLimit(limit);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getFilteredDB = async (req, res, next) => {
  try {
    const { limit, order_by, page } = req.query;
    const response = await dbFilterData(limit, order_by, page);
    res.status(200).json({ response: response });
  } catch (error) {
    next(error);
  }
};



// export const getDB = async (req, res, next) => {
//   try {
//     const result = await dbGetData();
//     res.status(200).json(result);
//   } catch (error) {
//     next(error)
//   }
// };

// filtros dinamicos.. SIN HATEROAS pero con paginacion.... 
export const gollumController = async (req, res, next) => {
  try {
    const { items, page, filters } = req.body
    const response = await gollumFilter(filters);
    const gollumPagination = funcionopaginacionaca(response, items, page);
    res.status(200).json({ result: result });
  } catch (error) {
    next(error);
  }

};

