import getRequestAPI from "@/plugins/request/getRequestAPI";

function getTopArticleList() {
    return getRequestAPI({
        url: '/article/top',
        method: 'get'
    })
}

interface pageMsg {
    pageNumber: number,
    pageSize: number
}

function getArticleList(param: pageMsg) {
    return getRequestAPI({
        url: '/article/articleList',
        method: 'get',
        params: param
    })
}

export {
    getTopArticleList,
    getArticleList
}