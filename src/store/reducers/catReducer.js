const initialState = {
    isLoading: true,
    cats: [],
    error: ''
};

export const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CATS':
            return {
                ...state,
                isLoading: true,
                error: ''
            };
            case 'FETCH_CATS_SUCCESS':
                return {
                    ...state,
                    cats: action.payload.isNewCategory ? action.payload.cats : [...state.cats, ...action.payload.cats],
                    isLoading: false,
                    error: ''
            };    
            case 'FETCH_CATS_FAILURE':
                return {
                    ...state,
                    cats: [],
                    isLoading: false,
                    error: action.payload
            };

        default:
            return state;
    }
};