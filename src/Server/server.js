import axios from "axios";

const url = {
    top250: '/movie/top250',
}

let server = {
    top250: (reqType, params) => {
        console.log(params)
        return axios(url.top250,{
            params: params
        });
    }
};

// Object.keys(url).forEach((type) => {
//     server[type] = (reqType, params, id) => {
//         return axios({
//             method: type,
//             data: params,
//             url: url[type]
//         });
//     }
// });

export default server;