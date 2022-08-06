import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux"

import { fetchCategoriesAsync } from "../store/asyncActions/categoryActions";
import {changeSelectedCategory } from "../store/actionCreators/categoryActionCreators"

import "./styles.css";


const Categories = (props) => {
    const {isLoading, categories, error, selectedCategory} = useSelector(state => state.category);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchCategoriesAsync());
        }, 1000);
        
    }, [])

    

    const handleCategoryClick = categoryId => {
        dispatch(changeSelectedCategory(categoryId))
    }   


    return (
        <div className="categories">
            <h1>Categories</h1>
            
            {isLoading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}

            {!isLoading && !error &&
                <ul>
                    {categories.map(category => <li className="categoryItem" onClick={() => handleCategoryClick(category.id)} key={category.id}>{category.id} === {category.name}</li>)}
                </ul>}
        </div>
    )
}


export {Categories}