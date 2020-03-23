import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions/dataAction';

const initialState = {
  content: [],
  total: 0,
  isFetching: false,
  stance: [],
  options: [],
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
        total: action.payload.data.totalElements,
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
  
    default:
      return state;
  }
}

export const getData = state => state.dataReducer;
export const getFetchingStatus = state => state.dataReducer.isFetching;