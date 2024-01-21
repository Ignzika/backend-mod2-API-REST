const pagination = (data, limit, page) => {
  const pageInt = Number(page);
  const limitInt = Number(limit);

  const startIndex = (pageInt - 1) * limitInt;
  const endIndex = pageInt * limitInt;

  // console.log("inicio ", startIndex, " fin", endIndex)

  const results = {};

  if (1 === 1) { // era la unica forma que me mostrara el next....siempre habra un mañana ?
    results.next = {
      page: pageInt + 1,
      limit: limitInt,
    };
  }
  if (startIndex > 0) {
    results.previous = {
      page: pageInt - 1,
      limit: limitInt,
    };
  }

  results.results = data; // data ya viene cortada y filtrada
  // results.results = data.slice(startIndex, endIndex);

  console.log(results);

  return results;
};

export default pagination;
