/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getStoryListAction } from '@actions';

import useLocalStorage from '@hooks/useLocalStorage';

import StoryList from '@containers/story-list';

import StoryCard from '@components/story-card';
import Loader from '@components/loader';
import Error from '@components/error';

import Button from '@ui/button';
import Select from '@ui/select';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { query } = useParams();

  const storyList = useSelector((state) => state.storyList?.data?.hits);
  const isLoading = useSelector((state) => state.storyList?.isLoading);
  const isError = useSelector((state) => state.storyList?.isError);
  const errorDetail = useSelector((state) => state.storyList?.errorDetail);

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
    if (value) {
      navigate(`/query/${value}`);
      changeFilter(value);
    } else {
      navigate('/');
      changeFilter('');
    }
  };

  const handleFavorite = (story) => {
    let favoritesList = [];
    if (
      favorites.includes((favorite) => favorite.objectID === story.objectID)
    ) {
      const favoriteIndex = favorites.findIndex(
        (favorite) => favorite.objectID === story.objectID,
      );
      favoritesList = [...favorites];
      favoritesList.splice(favoriteIndex, 1);
    } else {
      favoritesList = [...favorites, story];
    }
    changeFavorites(favoritesList);
  };

  useEffect(() => {
    dispatch(
      getStoryListAction({ query: query || filter || options[0].value }),
    );
  }, [query, filter]);

  return (
    <section className="Home" data-testid="Home">
      <div className="Home__tab-container">
        <Button className="Home__tab">All</Button>
        <Button className="Home__tab">My faves</Button>
      </div>
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
              isFavorite={favorites.includes(
                (favorite) => favorite.objectID === story.objectID,
              )}
            />
          ))}
      </StoryList>
      {(isLoading || filterLoading) && <Loader />}
      {(isError || filterError) && <Error error={errorDetail || filterError} />}
    </section>
  );
};

export default Home;
