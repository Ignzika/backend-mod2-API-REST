import { pool } from "../../../../config/DB/db.js";
import format from "pg-format";
import createSQLquery from "../helpers/filter.js";

// get all ... esto tendria que ser el session model?  (eso no capte bien en su momento)
// export const dbGetData = async () => {
//   try {
//     const SQLquery = {
//       text: "SELECT * FROM inventario;"
//     };
//     const response = await pool.query(SQLquery);
//     // console.table(response.rows)
//     return response.rows
//   } catch (error) {
//     console.log(error);
//     console.error("codigo error:", error.code, "->", error.message);
//     throw new Error("codigo: " + error.code + " :" + error.message);
//   }
// };

// requerimiento 1
export const getDataFilter = async (
  limit = 6,
  page = 1,
  order_by = "id_ASC"
  // este mismo orden debe ser usado en el cliente  ... POR QUE D: //
  // provar     const filters = req.query;
) => {
  try {
    const [queryParam, queryValue] = order_by.split("_");
    const offset = (page - 1) * limit; //ojo validar las paginas del offset
    let SQLqueryOnFormat = format(
      "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s;",
      queryParam,
      queryValue,
      limit,
      offset
    );
    const response = await pool.query(SQLqueryOnFormat);
    console.log(SQLqueryOnFormat);
    return response.rows;
  } catch (error) {
    // console.table(error)
    console.error("codigo error:", error.code, "->", error.message);
    throw new Error("codigo: " + error.code + " :" + error.message);
  }
};

// requerimiento 2
export const dbFilterData = async (filters) => {
  try {
    const { SQLquery, values } = createSQLquery("inventario", filters);
    const response = await pool.query(SQLquery, values);
    // console.log(response);
    return response.rows;
    console.table(response);
  } catch (error) {
    console.table(error);
    console.error("codigo error:", error.code, "->", error.message);
    throw new Error("codigo: " + error.code + ": " + error.message);
  }
};
