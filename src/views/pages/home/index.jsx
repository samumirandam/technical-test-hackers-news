import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getStoryListAction } from "@actions";

import StoryList from "@containers/story-list";

import StoryCard from "@components/story-card";

import Button from "@ui/button";

import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();

  const storyList = useSelector((state) => state.storyList?.data?.hits);

  useEffect(() => {
    dispatch(getStoryListAction({ query: "reactjs" }));
  }, []);

  return (
    <section className="Home" data-testid="Home">
      <div className="Home__tab-container">
        <Button className="Home__tab">All</Button>
        <Button className="Home__tab">My faves</Button>
      </div>
      <p className="Home__filter">DropDown</p>
      <StoryList>
        {storyList &&
          storyList.map((story) => (
            <StoryCard
              key={story.objectID}
              author={story.author}
              created_at={story.created_at}
              story_title={story.story_title}
              story_url={story.story_url}
              handleFavorite={() => {
                console.log(story);
              }}
            />
          ))}
      </StoryList>
    </section>
  );
};

export default Home;
