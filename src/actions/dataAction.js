export const FETCH_DATA_BEGIN   = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_KEYWORD_AND_FILTERS = 'UPDATE_KEYWORD_AND_FILTERS';

export const CLEAR_KEYWORD_AND_FILTERS = 'CLEAR_KEYWORD_AND_FILTERS';

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data }
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: { error }
});

export const UpdatePage = page => ({
  type: UPDATE_PAGE,
  page: page
});

export const UpdateKeywordAndFilters = (keyword, filters) => ({
  type: UPDATE_KEYWORD_AND_FILTERS,
  keyword: keyword,
  filters: filters,
});

export const ClearKeywordAndFilters = () => ({
  type: CLEAR_KEYWORD_AND_FILTERS
});