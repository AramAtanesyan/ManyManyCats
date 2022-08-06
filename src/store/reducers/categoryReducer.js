import types from '../types/categoryTypes';
const {FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE, CHANGE_SELECTED_CATEGORY} = types;

const initialState = {
    isLoading: true,
    categories: [],
    error: '',
    selectedCategory: null
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                isLoading: false,
                error: ''
        };    
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                categories: [],
                isLoading: false,
                error: action.payload
        };
        case CHANGE_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
        };
            
        default:
            return state;
    }
};