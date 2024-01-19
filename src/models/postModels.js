import { pool } from "../../DB/db.js";
import format from "pg-format";
import createSQLquery from "../helpers/filter.js";

// get all

export const dbGetData = async () => {
  try {
    const SQLquery = {
      text: "SELECT * FROM inventario;"
    };
    const response = await pool.query(SQLquery);
    console.table(response.rows)
    return response.rows
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};


export const dbDefaultLimit = async (limit = 3) => {
  try {
    const regexNumber = /^\d+$/;
    let test = regexNumber.test(limit);
    if (!test) {
      // return new Error(error.message);
      // return {
      //   code: 400,
      //   message: "only positive numbers.", // revisar esto 
      // };
      throw new Error(error.message, "only positive numbers") // revisar 
    };

    let SQLquery = {
      text: "SELECT * FROM inventario LIMIT $1;",
      values: [limit],
    };
    const response = await pool.query(SQLquery);

    console.table(response.rows);
    return response.rows

  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};



export const dbFilterData = async (
  limit = 3,
  order_by = "nombre_ASC",
  page = 0
) => { //los valores aca son para mantener un defalut.
  try {
  const [queryParam, queryValue] = order_by.split("_"); // queryParam = nombre -- queryValue = ASC
  let offset = page * limit; //page - 1 = inicia en pagina 1

  let SQLqueryOnFormat = format(                                 // package para armar consulta completa
    "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s;",
    queryParam,
    queryValue,
    limit,
    offset
  );
    const response = await pool.query(SQLqueryOnFormat);
    return response.rows
  } catch (error) {
    throw new Error(error.message);
  }
};



// the all filter

// export const getGollum = async ( limit = 3, page = 0, order_by = "id_ASC", ) => {
//   try {
//     const [queryParam, queryValue] = order_by.split("_"); // queryParam = nombre -- queryValue = ASC
//     let offset = page * limit; //page - 1 = inicia en pagina 1
  
//     let SQLqueryOnFormat = format(                                 // package para armar consulta completa
//       "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s;",
//       queryParam,
//       queryValue,
//       limit,
//       offset
//     );
//     const response = await pool.query(SQLqueryOnFormat);
//     return response.rows
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };


export const ganotherFilter = async (limit = 3, page = 0, order_by = id_ASC) => {
  try {
    const [column, columnValue] = order_by.split("_"); 
    
    let offset = (page - 1) * limit; //page - 1 = inicia en pagina 1
      
        let SQLqueryOnFormat = format(                                 // package para armar consulta completa
          "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s;",
          queryParam,
          queryValue,
          limit,
          offset
        );
        const response = await pool.query(SQLqueryOnFormat);
        return response.rows
      } catch (error) {
        throw new Error(error.message);
      }

};


export const gollumFilter = async (filters) => {
  try {
    const { query, values } = createSQLquery("inventario", filters);
    const response = await pool.query(query, values);
    return response.rows;
  console.table(response)
  } catch (error) {
  throw new Error(error.message);
  }
};