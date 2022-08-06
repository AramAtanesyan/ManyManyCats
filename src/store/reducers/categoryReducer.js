import types from '../types/categoryTypes';
const {FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE} = types;

const initialState = {
    isLoading: true,
    categories: [],
    error: ''
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                categories: [],
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
            
        default:
            return state;
    }
};