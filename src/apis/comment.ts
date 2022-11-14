import getRequestAPI from "@/plugins/request/getRequestAPI";

function getNewestComment() {
    return getRequestAPI({
        url: '/comment/newestComment',
        method: 'get'
    })
}

export {
    getNewestComment
}