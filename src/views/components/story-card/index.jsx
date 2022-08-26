import React from "react";
import { formatDistanceToNow } from "date-fns";

import Button from "@ui/button";

import FavoriteIcon from "@images/iconmonstr-favorite-2.svg";
import TimeIcon from "@images/iconmonstr-time-2.svg";

import "./story-card.scss";

const StoryCard = ({
  author,
  story_title,
  story_url,
  created_at,
  handleFavorite,
}) => {
  const handleOpenUrl = () => {
    window.open(story_url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="StoryCard">
      <Button className="StoryCard__content" onClick={handleOpenUrl}>
        <div className="StoryCard__data">
          <figure className="StoryCard__time-image">
            <TimeIcon />
          </figure>
          <p>{`${formatDistanceToNow(new Date(created_at))} by ${author}`}</p>
        </div>
        <p className="StoryCard__title">{story_title}</p>
      </Button>
      <Button noStyles className="StoryCard__favorite" onClick={handleFavorite}>
        <figure data-testid="favorite-button">
          <FavoriteIcon />
        </figure>
      </Button>
    </div>
  );
};

export default StoryCard;
