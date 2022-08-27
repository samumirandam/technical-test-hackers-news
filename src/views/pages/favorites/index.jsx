/* eslint-disable import/no-unresolved */
import React from 'react';

import useLocalStorage from '@hooks/useLocalStorage';

import StoryList from '@containers/story-list';

import StoryCard from '@components/story-card';
import Loader from '@components/loader';
import Error from '@components/error';
import PageTabs from '@components/page-tabs';

import { changeList } from '@utils/change-list';

import './favorites.scss';

const Favorites = () => {
  const {
    item: favorites,
    saveItem: changeFavorites,
    isLoading,
    isError,
  } = useLocalStorage('FAVORITES', []);

  const handleFavorite = (story) => {
    changeFavorites(changeList(favorites, story));
  };

  return (
    <section className="Favorites" data-testid="Favorites">
      <PageTabs className="Favorites__tabs" />

      <StoryList>
        {favorites
          && favorites.map((favorite) => (
            <StoryCard
              key={favorite.objectID}
              author={favorite.author}
              createdAt={favorite.created_at}
              storyTitle={favorite.story_title}
              storyUrl={favorite.story_url}
              handleFavorite={() => handleFavorite(favorite)}
              isFavorite={favorites.some(
                (fav) => fav.objectID === favorite.objectID,
              )}
            />
          ))}
      </StoryList>
      {isLoading && <Loader />}
      {isError && <Error error={isError} />}
    </section>
  );
};

export default Favorites;
