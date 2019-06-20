const StoryList = ({ stories }) => {
  return stories.map(story => {
    return <h3 key={story.id}>{story.title}</h3>;
  });
};
export default StoryList;
