/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getStoryListAction, restoreStoryListAction } from '@actions';

import useLocalStorage from '@hooks/useLocalStorage';
import useLastElement from '@hooks/useLastElement';

import StoryList from '@containers/story-list';

import StoryCard from '@components/story-card';
import Loader from '@components/loader';
import Error from '@components/error';
import PageTabs from '@components/page-tabs';

import Select from '@ui/select';

import { changeList } from '@utils/change-list';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { query } = useParams();

  const storyList = useSelector((state) => state.storyList?.data);
  const totalPages = useSelector((state) => state.storyList?.meta?.nbPages);
  const currentPage = useSelector((state) => state.storyList?.meta?.page);
  const isLoading = useSelector((state) => state.storyList?.isLoading);
  const isError = useSelector((state) => state.storyList?.isError);
  const errorDetail = useSelector((state) => state.storyList?.errorDetail);

  const [page, setPage] = useState(currentPage || 0);

  const {
    item: filter,
    saveItem: changeFilter,
    loading: filterLoading,
    error: filterError,
  } = useLocalStorage('FILTER', '');

  const { item: favorites, saveItem: changeFavorites } = useLocalStorage(
    'FAVORITES',
    [],
  );

  const options = [
    { value: '', label: 'Select your news', selected: filter === '' },
    { value: 'angular', label: 'Angular', selected: filter === 'angular' },
    { value: 'reactjs', label: 'Reactjs', selected: filter === 'reactjs' },
    { value: 'vuejs', label: 'Vuejs', selected: filter === 'vuejs' },
  ];

  const handleChange = (value) => {
    dispatch(restoreStoryListAction());
    if (value) {
      navigate(`/query/${value}`);
      changeFilter(value);
    } else {
      navigate('/');
      changeFilter('');
    }
  };

  const handleFavorite = (story) => {
    changeFavorites(changeList(favorites, story));
  };

  const handleGetMore = () => {
    setPage(currentPage + 1);
  };

  const { lastElementRef } = useLastElement(
    isLoading,
    page < totalPages,
    handleGetMore,
  );

  useEffect(() => {
    if (currentPage !== page && !isLoading && !filterLoading) {
      dispatch(
        getStoryListAction({
          query: query || filter || options[0].value,
          page,
        }),
      );
    }
  }, [query, page, filter, currentPage, isLoading, filterLoading]);

  return (
    <section className="Home" data-testid="Home">
      <PageTabs className="Home__tabs" />
      <Select
        className="Home__filter"
        options={options}
        handleChange={handleChange}
      />
      <StoryList>
        {storyList
          && storyList.map((story) => (
            <StoryCard
              key={story.objectID}
              author={story.author}
              createdAt={story.created_at}
              storyTitle={story.story_title}
              storyUrl={story.story_url}
              handleFavorite={() => handleFavorite(story)}
              isFavorite={favorites.some(
                (favorite) => favorite.objectID === story.objectID,
              )}
            />
          ))}
      </StoryList>
      {(isLoading || filterLoading) && <Loader />}
      {(isError || filterError) && <Error error={errorDetail || filterError} />}
      <div ref={lastElementRef} />
    </section>
  );
};

export default Home;
