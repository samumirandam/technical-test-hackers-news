/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import Button from '@ui/button';

import FavoriteIcon from '@images/iconmonstr-favorite-2.svg';
import FavoriteFillIcon from '@images/iconmonstr-favorite-3.svg';
import TimeIcon from '@images/iconmonstr-time-2.svg';

import './story-card.scss';

const StoryCard = ({
  author,
  storyTitle,
  storyUrl,
  createdAt,
  handleFavorite,
  isFavorite,
}) => {
  const handleOpenUrl = () => {
    window.open(storyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="StoryCard">
      <Button className="StoryCard__content" onClick={handleOpenUrl}>
        <div className="StoryCard__data">
          <figure className="StoryCard__time-image">
            <TimeIcon />
          </figure>
          <p>{`${formatDistanceToNow(new Date(createdAt))} by ${author}`}</p>
        </div>
        <p className="StoryCard__title">{storyTitle}</p>
      </Button>
      <Button noStyles className="StoryCard__favorite" onClick={handleFavorite}>
        <figure data-testid="favorite-button">
          {isFavorite ? <FavoriteFillIcon /> : <FavoriteIcon />}
        </figure>
      </Button>
    </div>
  );
};

StoryCard.propTypes = {
  author: PropTypes.string.isRequired,
  storyTitle: PropTypes.string.isRequired,
  storyUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool,
};

StoryCard.defaultProps = {
  isFavorite: false,
};

export default StoryCard;
