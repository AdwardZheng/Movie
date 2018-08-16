import axios from "axios";

const url = {
    top250: '/movie/top250',
    in_theater: '/movie/in_theaters',
    us_box: '/movie/us_box',
    search: '/movie/search',
    subject: '/movie/subject',
}

let server = {
    top250: ( params) => {
        return axios(url.top250,{
            params: params
        });
    },
    in_theater: (params) => {
        return axios(url.in_theater, {
            params: params
        });
    },
    us_box: ( params) => {
        return axios(url.us_box, {
            params: params
        });
    },
    search: (params) => {
        return axios(url.search, {
            params: params
        });
    },
    subject: (id) => {
        return axios({
            method: 'get',
            params: '',
            url: url.subject + `/${id}`
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