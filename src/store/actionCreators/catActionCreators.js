import types from '../types/catTypes';
const {FETCH_CATS, FETCH_CATS_SUCCESS, FETCH_CATS_FAILURE} = types;

export const fetchCats = () => ({ type: FETCH_CATS });

export const fetchCatsSuccess = payload => ({ type: FETCH_CATS_SUCCESS, payload });

export const fechCatsFailure = payload => ({ type: FETCH_CATS_FAILURE, payload });
