import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getStoryListAction } from "@actions";

import StoryList from "@containers/story-list";

import StoryCard from "@components/story-card";
import { useNavigate, useParams } from "react-router-dom";

import Button from "@ui/button";
import Select from "@ui/select";

import "./home.scss";

const OPTIONS = [
  { value: "angular", label: "Angular" },
  { value: "reactjs", label: "Reactjs" },
  { value: "vuejs", label: "Vuejs" },
];

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { query } = useParams();

  const storyList = useSelector((state) => state.storyList?.data?.hits);

  const handleChange = (value) => {
    navigate(`/query/${value}`);
  };

  useEffect(() => {
    dispatch(getStoryListAction({ query: query ? query : OPTIONS[0].value }));
  }, [query]);

  return (
    <section className="Home" data-testid="Home">
      <div className="Home__tab-container">
        <Button className="Home__tab">All</Button>
        <Button className="Home__tab">My faves</Button>
      </div>
      <Select
        className="Home__filter"
        options={OPTIONS}
        handleChange={handleChange}
      />
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
