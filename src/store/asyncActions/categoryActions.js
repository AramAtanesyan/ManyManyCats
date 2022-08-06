import {axiosInstance} from '../../plugins/axios'; 
import {fetchCategories, fetchCategoriesSuccess, fechCategoriesFailure} from '../actionCreators/categoryActionCreators';

export const fetchCategoriesAsync = () => {
    return dispatch => {
        
        dispatch(fetchCategories());
            setTimeout(async () => {

                try {   
                    const response = await axiosInstance.get('/categories');
                    const categories = response.data;
        
                    dispatch(fetchCategoriesSuccess(categories));
                }catch(e){
                    dispatch(fechCategoriesFailure(e.message));    
                }

            }, 500)
    }
}

