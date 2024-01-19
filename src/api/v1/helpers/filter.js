const createSQLquery = (dbTable, filters) => {
  const table = dbTable.toLowerCase();

  let SQLquery = `SELECT * FROM ${table}  WHERE 1 = 1`;

  const filterEntries = Object.entries(filters);

  const values = [];

  for (const [key, value] of filterEntries) {
    SQLquery += ` AND ${key} = $${values.length + 1}`;
    values.push(value);
    };

  return { SQLquery, values };
};

export default createSQLquery;


//buscar como entenderlo desde otra forma de creacion 