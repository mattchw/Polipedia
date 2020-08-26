import {
  CHANGE_LANGUAGE,
} from '../actions/generalAction';

const initialState = {
  lang: "en"
};

export function generalReducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        lang: action.lang,
      };
  
    default:
      return state;
  }
}
export const getLang = state => state.generalReducer.lang;