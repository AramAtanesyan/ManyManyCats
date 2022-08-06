import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoriesAsync } from '../store/asyncActions/categoryActions';
import { changeSelectedCategory } from '../store/actionCreators/categoryActionCreators';

import { Container, Error, Loader } from './Elements';


const Categories = props => {
  const { isLoading, categories, error, selectedCategory } = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchCategoriesAsync());
    }, 1000);
  }, []);

  const handleCategoryClick = categoryId => {
    dispatch(changeSelectedCategory(categoryId));
  };

  const renderCategories = categories => {
    return (
      <div>
        <ul>
          {categories.map(category => (
            <li className="categoryItem" onClick={() => handleCategoryClick(category.id)} key={category.id}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  if (isLoading) {
    return (
      <Container className="categories-container" title="Categories">
        <Loader />
      </Container>
    );
  } else if (error) {
    return (
      <Container className="categories-container" title="Categories">
        <Error error={error} />
      </Container>
    );
  } else if (!isLoading && !error) {
    return (
      <Container className="categories-container" title="Categories">
        {renderCategories(categories)}
      </Container>
    );
  }
};

export { Categories };
