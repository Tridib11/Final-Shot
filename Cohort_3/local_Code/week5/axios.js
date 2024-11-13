const axios = require('axios');

const func = async () => {
  const ans = await axios.get("https://jsonplaceholder.typicode.com/posts/");
  console.log(ans.data); // To log the response data
};

func();
