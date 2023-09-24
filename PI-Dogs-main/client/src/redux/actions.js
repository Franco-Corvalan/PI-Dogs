import {
    GET_DOGS,
    GET_NAME,
    GET_ID,
    GET_TEMPERAMENTS,
    CREATE_DOG,
    FILTER_ORIGIN,
    FILTER_TEMP,
    ORDER_NAME,
    ORDER_WEIGHT,
    NEXT,
    PREV,
    RESET
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

export const getDogName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/dog?name=${name.trim()}`)
            return dispatch({
                type: GET_NAME,
                payload: data
            })
        } catch (error) {
            alert('ningun perro con ese nombre')
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
            const { data } = await axios.get(`http://localhost:3001/temperament`)
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: data
            })
        } catch (error) {
            alert('error temp')
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

export const filterOrigin = (source) => {
    return {
        type: FILTER_ORIGIN,
        payload: source
    }
}

export const filterTemp = (temp) => {
    return {
        type: FILTER_TEMP,
        payload : temp
    }
}

export const orderName = (order) => {
    return{
        type: ORDER_NAME,
        payload: order
    }
}

export const orderWeight = (order) => {
    return{
        type: ORDER_WEIGHT,
        payload: order
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const next = () => {
    return {
        type: NEXT
    }
}

export const prev = () => {
    return {
        type: PREV
    }
}