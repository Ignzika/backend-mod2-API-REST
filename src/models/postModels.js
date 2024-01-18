import { pool } from "../../DB/db.js";

// get all

export const dbGetData = async () => {
  try {
    const SQLquery = {
      text: "SELECT * FROM inventario;",

    };
    const response = await pool.query(SQLquery);
    // console.table(response.rows)
    return response.rows
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};


export const dbDefaultLimit = async ({limits = 10}) => {
  try {
    const regexNumber = /^\d+$/;
    if (limits != regexNumber) {
      throw new Error(error.message, "only numbers")
    };

    const SQLquery = {
      text: "SELECT * FROM inventario LIMIT $s;",
      value: [limits]

    };
    const response = await pool.query(SQLquery);
    console.table(response.rows)
    console.log(response.rows)
    return response.rows
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};



export const dbFilterData = async ({ limits = 10, order_by = "nombre_ASC", page = 0  }) => { //los valores aca son para mantener un defalut.
  
  const regexNumber = /^\d+$/;
  if (limits != regexNumber) {
    throw new Error(error.message, "only numbers")
  };

  const [campo, direccion] = order_by.split("_"); // campo = nombre -- direccion = ASC
  const offSet = (page - 1) * limits; //page - 1 = inicia en pagina 1

  const SQLquery = {
    text: "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s;",
    values: [campo, direccion, limits, offSet]
  };
  try {
    const response = await pool.query(SQLquery);
    return response.rows
  } catch (error) {
    throw new Error(error.message);
  }
};





// const dbFilterData = async ()