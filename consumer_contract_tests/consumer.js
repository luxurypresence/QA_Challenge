const axios = require('axios');
const getTodos = async (url) => {
  const response = await axios
    .get(`${url}/todos/1`)
    .then((res) => res.data)
    .catch((err) => err.response);
  return response;
};

module.exports = {
  getTodos
};