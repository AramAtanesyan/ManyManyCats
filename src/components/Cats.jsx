import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux"

import { fetchCategoriesAsync } from "../store/asyncActions/categoryActions";
import {changeSelectedCategory } from "../store/actionCreators/categoryActionCreators"

import { fetchCatsAsync } from "../store/asyncActions/catActions";

import {Error, Loader, Container, Image} from "./Elements"


const renderCats = (cats) => {
    return (<div style={{'display': 'flex'}}>
                {cats.map(cat => <div className="cat-image" key={cat.id}><Image url={cat.url}/></div>)}
            </div>)
}


const Cats = (props) => {
    const {isLoading, cats, error} = useSelector(state => state.cat);
    const {selectedCategory} = useSelector(state => state.category);
    const dispatch = useDispatch();
    

    useEffect(() => {
        if(selectedCategory) {
            dispatch(fetchCatsAsync({page: 1, categoryId: 5}))
        }
        
    }, [selectedCategory])


    if(!selectedCategory) {
        return <Container className="cats-container"/>;

    } else if(selectedCategory && isLoading) {
        return <Container><Loader /></Container>

    } else if(error) {
        return <Container><Error error={error} /></Container>
        
    } else if(cats) {
        return <Container>{renderCats(cats)}</Container>
    }
}





export {Cats}