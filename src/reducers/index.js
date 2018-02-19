import { ADD_ARTICLE, DELETE_ARTICLE } from "../constant/actionTypes";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload]
      };

    case DELETE_ARTICLE:
      const articles = state.articles.filter(article => article.id !== action.id);
      return { ...state, articles: articles }

    default:
      return state;
  }
};

export default rootReducer;