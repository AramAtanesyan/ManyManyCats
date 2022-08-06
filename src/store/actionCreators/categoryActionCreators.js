import types from '../types/categoryTypes';
const {FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE} = types;

export const fetchCategories = () => ({ type: FETCH_CATEGORIES });

export const fetchCategoriesSuccess = payload => ({ type: FETCH_CATEGORIES_SUCCESS, payload: payload });

export const fechCategoriesFailure = payload => ({ type: FETCH_CATEGORIES_FAILURE, payload: payload });