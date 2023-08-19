const getAll = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
};

const getByName = async (name) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data = await res.json();
  return data;
};

const getByRegion = async (region) => {
  const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  const data = await res.json();
  return data;
};

module.exports = { getAll, getByName, getByRegion };
