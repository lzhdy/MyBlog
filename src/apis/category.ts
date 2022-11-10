import getRequestAPI from "@/plugins/request/getRequestAPI";

function getHomeCategory() {
    return getRequestAPI({
        url: '/category/getHomeCategory',
        method: 'get'
    })
}

export {
    getHomeCategory
}