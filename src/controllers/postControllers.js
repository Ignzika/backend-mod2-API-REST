import { dbGetData } from "../models/postModels.js";

export const getDB = async (req, res, next) => {
  try {
    const result = await dbGetData();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getFilteredDB = async (req, res, next) => {
  try {
    const { limit, order_by, page } = req.query;

    const result = await dbFilterData(limit, order_by, page);

    res.status(200).json(result);
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
