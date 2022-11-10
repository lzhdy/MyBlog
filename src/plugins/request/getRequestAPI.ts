import axios from "axios";

const getRequestAPI = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
})
// // 添加请求拦截器
// getRequestAPI.interceptors.request.use(
//     function (config) {
//         // 在发送请求之前做些什么
//         return config
//     },
//     function (error) {
//         // 对请求错误做些什么
//         console.log(error)
//         return Promise.reject(error)
//     }
// )
// // 添加响应拦截器
// getRequestAPI.interceptors.response.use(
//     function (response) {
//         console.log(response)
//         // 2xx 范围内的状态码都会触发该函数。
//         // 对响应数据做点什么
//         // dataAxios 是 axios 返回数据中的 data
//         const dataAxios = response.data
//         // 这个状态码是和后端约定的
//         const code = dataAxios.reset
//         return dataAxios
//     },
//     function (error) {
//         // 超出 2xx 范围的状态码都会触发该函数。
//         // 对响应错误做点什么
//         console.log(error)
//         return Promise.reject(error)
//     }
// )
export default getRequestAPI