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

const getWithOptions = (filters) => async (dispatch) => {
    try {
        console.log("filters");
        console.log(filters);
        let query = '?';
        // stances
        if (filters.stances) {
            for(let i = 0; i<filters.stances.length; i++){
                query += ('stance='+filters.stances[i].value);
                if (i+1!==filters.stances.length)
                    query += '&';
            }
        }
        // options
        if (filters.options) {
            query += '&';
            for(let j = 0; j<filters.options.length; j++){
                query += ('occupation='+filters.options[j].value);
                if (j+1!==filters.options.length)
                    query += '&';
            }
        }
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