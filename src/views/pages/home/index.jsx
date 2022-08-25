import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getStoryListAction } from "@actions";

import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();

  const storyList = useSelector((state) => state.storyList?.data?.hits);

  useEffect(() => {
    dispatch(getStoryListAction());
  }, []);

  return (
    <section className="Home" data-testid="Home">
      {storyList && storyList.map((story) => <p key={story.objectID}>story</p>)}
    </section>
  );
};

export default Home;
