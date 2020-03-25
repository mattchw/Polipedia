import {fetchDataBegin, fetchDataSuccess, fetchDataFailure, UpdatePage, UpdateKeywordAndFilters} from './dataAction';
import axios from 'axios';

const getAll = () => async (dispatch) => {
    try {
        dispatch(fetchDataBegin());
        const result = await axios(
            '/api/v1/persons?sort=name',
        );
        // console.log(result);
        dispatch(fetchDataSuccess(result.data));
    } catch (error) {
        console.log(error);
        dispatch(fetchDataFailure(error));
    }
};

const getWithOptions = (keyword, filters, page) => async (dispatch) => {
    try {
        let query = '?';
        console.log("page: "+page);
        if (keyword) {
            
            query += ('keyword='+keyword);
            if ((filters.stances && filters.stances.length!==0) || (filters.options && filters.options.length!==0))
                query += '&';
        }
        // stances
        if (filters.stances && filters.stances.length!==0) {
            for(let i = 0; i<filters.stances.length; i++){
                query += ('stance='+filters.stances[i].value);
                if (i+1!==filters.stances.length)
                    query += '&';
            }
            if (filters.options && filters.options.length!==0)
                query += '&';
        }
        // options
        if (filters.options && filters.options.length!==0) {
            for(let j = 0; j<filters.options.length; j++){
                query += ('occupation='+filters.options[j].value);
                if (j+1!==filters.options.length)
                    query += '&';
            }
        }
        if (page !=1){
            if (query.length>1){
                query += '&';
            }
            query += 'page='+(page-1);        
        }
        if (query.length>1){
            query += '&';
        }
        query += 'sort=name';
        console.log(query);
        dispatch(fetchDataBegin());
        const result = await axios(
            '/api/v1/persons'+query,
        );
        dispatch(fetchDataSuccess(result.data));
    } catch (error) {
        console.log(error);
        dispatch(fetchDataFailure(error));
    }
};

const updatePage = (page) => (dispatch) => {
    console.log("the page is "+page);
    dispatch(UpdatePage(page));
};

const updateKeywordAndFilters = (keyword, filters) => (dispatch) => {
    console.log("keyword: "+keyword);
    console.log("filters: ");
    console.log(filters);
    dispatch(UpdateKeywordAndFilters(keyword, filters));
};

export const dataActions = {
    getAll,
    getWithOptions,
    updatePage,
    updateKeywordAndFilters,
};