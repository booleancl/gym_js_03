const axios = require('axios')

module.exports = (userName) => {
  let user = null
  let list = null
  axios.get(`/users?UserName=${userName}`)
    .then( response => {
      user = response.data;
      axios.get(`/orders?UserID=${user.id}`)
      .then( response => {
        list = response.data
      })
    }) 
  .catch(error => {
    console.log(error);
  })
  return list
}
