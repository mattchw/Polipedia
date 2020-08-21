import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  UPDATE_PAGE,
  UPDATE_KEYWORD_AND_FILTERS,
  CLEAR_KEYWORD_AND_FILTERS,
} from '../actions/dataAction';

const initialState = {
  content: [],
  totalElements: 0,
  totalPages: 0,
  currentPage: 1,
  keyword: "",
  filters: {
    stances: [],
    options: [],
  },
  isFetching: false,
  error: null
};

export function dataReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        content: action.payload.data.content,
        totalElements: action.payload.data.totalElements,
        totalPages: action.payload.data.totalPages,
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    
    case UPDATE_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };

    case UPDATE_KEYWORD_AND_FILTERS:
      return {
        ...state,
        keyword: action.keyword,
        filters: action.filters,
      };

    case CLEAR_KEYWORD_AND_FILTERS:
      return {
        ...state,
        currentPage: 1,
        keyword: "",
        filters: {
          stances: [],
          options: [],
        }
      };
  
    default:
      return state;
  }
}

export const getData = state => state.dataReducer;
export const getFetchingStatus = state => state.dataReducer.isFetching;
export const getCurrentPage = state => state.dataReducer.currentPage;
export const getKeyword = state => state.dataReducer.keyword;
export const getFilters = state => state.dataReducer.filters;