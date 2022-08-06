const initialState = {
    isLoading: false,
    cats: [],
    error: ''
};

export const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CATS':
            return {
                ...state,
                cats: [],
                isLoading: true,
                error: ''
            };
            case 'FETCH_CATS_SUCCESS':
                return {
                    ...state,
                    cats: action.payload,
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