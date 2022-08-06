import {axiosInstance} from '../../plugins/axios'; 
import {fetchCategories, fetchCategoriesSuccess, fechCategoriesFailure} from '../actionCreators/categoryActionCreators';

export const fetchCategoriesAsync = () => {
    return async dispatch => {
        
        dispatch(fetchCategories());

        try {   
            const response = await axiosInstance.get('/categories');
            const categories = response.data;

            dispatch(fetchCategoriesSuccess(categories));
        }catch(e){
            dispatch(fechCategoriesFailure(e.message));    
        }
    }
}