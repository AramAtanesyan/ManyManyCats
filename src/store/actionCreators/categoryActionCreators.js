import types from '../types/categoryTypes';
const {FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE, CHANGE_SELECTED_CATEGORY} = types;

export const fetchCategories = () => ({ type: FETCH_CATEGORIES });

export const fetchCategoriesSuccess = payload => ({ type: FETCH_CATEGORIES_SUCCESS, payload });

export const fechCategoriesFailure = payload => ({ type: FETCH_CATEGORIES_FAILURE, payload });

export const changeSelectedCategory = payload => ({type: CHANGE_SELECTED_CATEGORY, payload });