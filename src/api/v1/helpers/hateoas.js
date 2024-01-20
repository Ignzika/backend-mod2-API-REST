import {db, PORT } from "../../../../config/DB/config.js";

const prepareHateoas = async (
    dbTable,
    data,
) => {
    // se mapea la info que llega
    const results = data
      .map((e) => {
        return {
            name: e.nombre,
          href: `http://${db.host}:${PORT}/${dbTable}/${e.id}`,
        };
      })
        .slice(0, data.length );
    
    const total = data.length;


    // lo que se mostrara en cliente
    const HATEOAS = {
      total,
      results,
    };
    console.log(HATEOAS)
    return HATEOAS;
  };
  
  
  export default prepareHateoas;