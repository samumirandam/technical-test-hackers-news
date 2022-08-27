// eslint-disable-next-line import/prefer-default-export
export const parseData = (response) => {
  const data = response.data.hits
    .filter(
      (story) => story.author && story.story_title && story.story_url && story.created_at,
    )
    .map((story) => ({
      objectID: story.objectID,
      author: story.author,
      story_title: story.story_title,
      story_url: story.story_url,
      created_at: story.created_at,
    }));
  const meta = { ...response.data };
  delete meta.hits;
  return { data, meta };
};
