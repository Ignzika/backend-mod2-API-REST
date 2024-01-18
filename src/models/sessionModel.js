import { pool } from "../../DB/db.js";

// get all

export const dbGetData = async () => {
  try {
    const SQLquery = {
      text: "SELECT * FROM inventario;",

    };
    const response = await pool.query(SQLquery);
    console.table(response)
    return response.rows
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
