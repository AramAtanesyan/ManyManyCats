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
      dispatch(fetchCatsAsync({ page: currentPage, categoryId: selectedCategory }));
    }
  }, [selectedCategory, currentPage]);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

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
