import {
    GET_DOGS,
} from './type';

import axios from 'axios';

const URL = "http://localhost:3001";

export const getDogs = () => {
    return async (dispatch) => {
        try {

            const { data } = await axios.get(`${URL}/dogs`);
           
            return dispatch({
                type: GET_DOGS,
                payload: data,
            });
        } catch (error) {
            alert(error);
        }
    }
}