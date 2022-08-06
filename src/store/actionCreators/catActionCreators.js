import types from '../types/catTypes';
const {FETCH_CATS, FETCH_CATS_SUCCESS, FETCH_CATS_FAILURE} = types;

export const fetchCats = () => ({ type: FETCH_CATS });

export const fetchCatsSuccess = (cats, isNewCategory) => ({ type: FETCH_CATS_SUCCESS, payload: {cats, isNewCategory} });

export const fechCatsFailure = payload => ({ type: FETCH_CATS_FAILURE, payload });
