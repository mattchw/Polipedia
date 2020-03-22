import {fetchDataBegin, fetchDataSuccess, fetchDataFailure} from './dataAction';
import axios from 'axios';

const getAll = () => async (dispatch) => {
    try {
        dispatch(fetchDataBegin());
        const result = await axios(
            '/api/v1/persons',
        );
        // console.log(result);
        dispatch(fetchDataSuccess(result.data));
    } catch (error) {
        console.log(error);
        dispatch(fetchDataFailure(error));
    }
};

const getWithOptions = (keyword, filters) => async (dispatch) => {
    try {
        let query = '?';
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

export const dataActions = {
    getAll,
    getWithOptions,
};