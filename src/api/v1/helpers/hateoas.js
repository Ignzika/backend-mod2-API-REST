const prepareHateoas = async (dbTable, data) => {
    const results = data
      .map((e) => {
        return {
          name: e.nombre,
          href: `/${dbTable}/${e.id}`,
        };
      })
      .slice(0, 4);
    const total = data.length;
    const HATEOAS = {
      total,
      results,
    };
    console.log(HATEOAS)
    return HATEOAS;
  };
  
  
  export default prepareHateoas;