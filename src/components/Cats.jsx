import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCategoriesAsync } from '../store/asyncActions/categoryActions';
import { changeSelectedCategory } from '../store/actionCreators/categoryActionCreators';
import { fetchCatsAsync } from '../store/asyncActions/catActions';

import { Error, Loader, Container, Image } from './Elements';

const renderCats = cats => {
  return (
    <div className="cat-images">
      {cats.map(cat => (
        <Image className="cat-image" url={cat.url} key={cat.id} />
      ))}
    </div>
  );
};


const Cats = props => {
  const { isLoading, cats, error } = useSelector(state => state.cat);
  const { selectedCategory } = useSelector(state => state.category);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCategory) {
        loadCats(selectedCategory, 1, true)
    }
    setCurrentPage(1)
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory && currentPage > 1) {
        loadCats(selectedCategory, currentPage)
      }
  }, [currentPage])

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const loadCats = (categoryId, page, isNewCategory=false) => {
    if(page, categoryId) {
        dispatch(fetchCatsAsync({ page, categoryId, isNewCategory }));
    }
  }


  if (!selectedCategory) {
    return <Container className="cats-container" />;
  } else if (selectedCategory && isLoading) {
    return (
      <Container className="cats-container" title="Cats">
        <Loader />
      </Container>
    );
  } else if (error) {
    return (
      <Container className="cats-container" title="Cats">
        <Error error={error} />
      </Container>
    );
  } else if (cats) {
    return (
      <Container className="cats-container" title="Cats">
        {renderCats(cats)}
        <button onClick={loadMore}>Load more</button>
      </Container>
    );
  }
};

export { Cats };
