//const apiAxios = require("./api");
import apiAxios from "./api";

// Make a request for a user with a given ID
apiAxios.get('/')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

export default apiAxios;