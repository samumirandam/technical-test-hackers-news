import React from "react";

import "./story-list.scss";

const StoryList = ({ children }) => {
  return <section className="StoryList">{children}</section>;
};

export default StoryList;
