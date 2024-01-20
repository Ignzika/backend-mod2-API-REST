const createSQLquery = (dbTable, filters) => {
  const table = dbTable.toLowerCase();

  let SQLquery = `SELECT * FROM ${table} WHERE 1 = 1`;

  const filterEntries = Object.entries(filters);

  let values = [];

  for (const [key, value] of filterEntries) {
    if (key === "precio_min") {
      SQLquery += ` AND precio >= $${values.length + 1} `;
    } else if (key === "precio_max") {
      SQLquery += ` AND precio <= $${values.length + 1} `;
    } else {
      SQLquery += ` AND ${key} = $${values.length + 1} `;
    }

    values.push(value);
  }

  // console.log(filters);
  // console.log(filterEntries);
  // console.log(SQLquery);
  // console.log(values);

  return { SQLquery, values };
};

export default createSQLquery;
