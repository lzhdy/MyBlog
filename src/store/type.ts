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