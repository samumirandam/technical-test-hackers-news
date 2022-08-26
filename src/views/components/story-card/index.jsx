import React from "react";

import FavoriteIcon from "../../../assets/images/iconmonstr-favorite-2.svg";
import TimeIcon from "../../../assets/images/iconmonstr-time-2.svg";

import "./story-card.scss";

const StoryCard = () => {
  return (
    <div className="StoryCard">
      <div className="StoryCard__content">
        <div className="StoryCard__data">
          <figure className="StoryCard__time-image">
            <TimeIcon />
          </figure>
          <p>2 hours ago by author</p>
        </div>
        <p className="StoryCard__title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="StoryCard__favorite">
        <figure>
          <FavoriteIcon />
        </figure>
      </div>
    </div>
  );
};

export default StoryCard;
