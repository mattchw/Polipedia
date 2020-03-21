import {fetchDataBegin, fetchDataSuccess, fetchDataFailure} from './dataAction';
import axios from 'axios';

const fetchData = async (dispatch) => {
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

export default fetchData;