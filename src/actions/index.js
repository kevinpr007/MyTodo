import { ADD_ARTICLE, DELETE_ARTICLE } from "../constant/actionTypes";

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const deleteArticle = articleID => ({ type: DELETE_ARTICLE, id: articleID });