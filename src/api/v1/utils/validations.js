// validadores

const validateTableHeadres = async () => {
  const tableQuery = {
    text: "SELECT column_name FROM information_schema.columns WHERE table_name =  'inventario';",
  };
  const tableHeaders = await pool.query(tableQuery);
  const nameHeaders = tableHeaders.rows; //.map( borrar de alguna forma column_name)
  console.log(nameHeaders);
};
