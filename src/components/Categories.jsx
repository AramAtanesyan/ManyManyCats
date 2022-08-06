import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import { fetchCategoriesAsync } from "../store/actions/categoryActions";

import "./styles.css";


const Categories = (props) => {
    const {isLoading, categories, error} = useSelector(state => state.category);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchCategoriesAsync());
        }, 1000);
        
    }, [])

    const handleCategoryClick = categoryId => {
        
    }


    return (
        <div className="categories">
            <h1>Categories</h1>
            
            {isLoading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}

            {!isLoading && !error &&
                <ul>
                    {categories.map(category => <li onClick={() => handleCategoryClick(category.id)} key={category.id}>{category.name}</li>)}
                </ul>}
        </div>
    )
}


export {Categories}