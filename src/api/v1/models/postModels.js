import { pool } from "../../../../config/DB/db.js";
import format from "pg-format";
import createSQLquery from "../helpers/filter.js";

// get all

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
//     throw new Error(error.message);
//   }
// };


export const dbGetData = async (
  limit = 3,
  page = 1,
  order_by = "id_ASC",
  // este mismo orden debe ser usado en el cliente  ... POR QUE D:
) => {
  try {
    const [queryParam, queryValue] = order_by.split("_"); 
    let offset = (page-1) * limit;
  
    let SQLqueryOnFormat = format(
      "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s;",
      queryParam,
      queryValue,
      limit,
      offset
    );
    const response = await pool.query(SQLqueryOnFormat);
    console.log(SQLqueryOnFormat)
    return response.rows
  } catch (error) {
    throw new Error(error.message);
  }
};


export const dbFilterData = async (filters) => {
  try {
    const { query, values } = createSQLquery("inventario", filters);
    const response = await pool.query(query, values);
    return response.rows;
  console.table(response)
  } catch (error) {
  throw new Error(error.message);
  }
};


// export const dbDefaultLimit = async (limit = 3) => {
//   try {
//     const regexNumber = /^\d+$/;
//     let test = regexNumber.test(limit);
//     if (!test ) {
//       new Error(error.message) 
//     };

//     let SQLquery = {
//       text: "SELECT * FROM inventario LIMIT $1;",
//       values: [limit],
//     };
//     const response = await pool.query(SQLquery);
//     console.table(response.rows);
//     return response.rows
//   } catch (error) {
//     console.log(error);
//     throw new Error(error.message);
//   }
// };



// export const dbFilterData = async (
//   limit = 3,
//   order_by= "id_ASC",
//   page = 0
// ) => { //los valores aca son para mantener un defalut y ojo con el ORDEN!!! deben ser puestos en el mismo orden que en los params
//   try {
//   const [queryParam, queryValue] = order_by.split("_"); // queryParam = nombre -- queryValue = ASC
//   let offset = page * limit; //page - 1 = inicia en pagina 1

//   let SQLqueryOnFormat = format(                                 // package para armar consulta completa
//     "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s;",
//     queryParam,
//     queryValue,
//     limit,
//     offset
//   );
//     const response = await pool.query(SQLqueryOnFormat);
//     console.log(SQLqueryOnFormat)
//     return response.rows
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };



// the all filter


// export const ganotherFilter = async (limit = 3, page = 0, order_by = id_ASC) => {
//   try {
//     const [column, columnValue] = order_by.split("_"); 
    
//     let offset = (page - 1) * limit; //page - 1 = inicia en pagina 1
      
//         let SQLqueryOnFormat = format(                                 // package para armar consulta completa
//           "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s;",
//           queryParam,
//           queryValue,
//           limit,
//           offset
//         );
//         const response = await pool.query(SQLqueryOnFormat);
//         return response.rows
//       } catch (error) {
//         throw new Error(error.message);
//       }

// };


