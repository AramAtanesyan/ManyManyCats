import {axiosInstance} from '../../plugins/axios'; 
import {fetchCats, fetchCatsSuccess, fechCatsFailure} from '../actionCreators/catActionCreators';

export const fetchCatsAsync = (options) => {
    return dispatch => {
        
        dispatch(fetchCats());
        const {page, categoryId} = options;
           
            setTimeout(async () => {

                try {
                    const response = await axiosInstance.get(`/images/search?limit=10&page=${page}&category_ids=${categoryId}`);
                    const cats = response.data;
                    
                    dispatch(fetchCatsSuccess(cats));
                }catch(e){
                    dispatch(fechCatsFailure(e.message));    
                }

            }, 800);            
        }
    }


