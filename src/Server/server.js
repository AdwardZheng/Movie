import axios from "axios";

const url = {
    top250: 'https://node-douban-api.herokuapp.com/movie/top250',
    in_theater: 'https://node-douban-api.herokuapp.com/movie/in_theaters',
    us_box: 'https://node-douban-api.herokuapp.com/movie/us_box',
    search: 'https://node-douban-api.herokuapp.com/movie/search',
    subject: 'https://node-douban-api.herokuapp.com/movie/subject',
    willComing: 'https://node-douban-api.herokuapp.com/movie/coming_soon',
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
    },
    willComing: (params) => {
        return axios(url.willComing,{
            params: params,
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