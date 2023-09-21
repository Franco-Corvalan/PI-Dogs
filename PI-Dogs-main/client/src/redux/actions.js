import {
    GET_DOGS,
    GET_DOGS_DB,
    GET_DOGS_API,
    GET_NAME,
    GET_ID,
    GET_TEMPERAMENTS,
    CREATE_DOG
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

export const getDogsAPI = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/api`)
            return dispatch({
                type: GET_DOGS_API,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getDogsDB = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/db`)
            return dispatch({
                type: GET_DOGS_DB,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getDogName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/dog?name=${name.trim()}`)
            return dispatch({
                type: GET_NAME,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getDogId = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/dogs/${id}`)
            return dispatch({
                type: GET_ID,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getTemperaments = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL_BASE}/temperaments`)
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const createDog = (dog) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post();
            return dispatch({
                type: CREATE_DOG,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}