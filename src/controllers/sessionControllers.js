import { dbGetData } from "../models/postModels.js";


export const getDB = async (req, res) => {
  try {
    const result = await dbGetData();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error at starting session" });
    console.error("Error on request:", error);
  }
};


