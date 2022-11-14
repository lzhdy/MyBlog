// 文章列表
export interface ArticlesList {
    code: number;
    data: Data;
    msg: string;
}

export interface Data {
    articleVoList: ArticleVoList[];
    total: number;
}

export interface ArticleVoList {
    categoryName: string[];
    createTime: string;
    id: number;
    summary: string;
    thumbnail: string;
    title: string;
    viewCount: number;
    wordage: number;
}

export interface Page {
    pageNumber: number,
    pageSize: number,
}


// 热门文章列表
export interface HotArticles {
    code: number;
    data: HotArticlesVo[];
    msg: string;
}

export interface HotArticlesVo {
    id: number,
    title: String,
    categoryName: []
}

// 最新评论列表
export interface NewestComment {
    code: number;
    data: newestCommentVo[];
    msg: string;
}

export interface newestCommentVo {
    id: number,
    articleId: number,
    userName: string,
    createTime: string,
    content: string
}