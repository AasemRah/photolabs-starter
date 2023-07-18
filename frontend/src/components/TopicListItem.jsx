import React from 'react';
import axios from 'axios';
import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  // Destructure the necessary props
  const { title, id, setPhotos } = props;

  // Function to handle when a topic is clicked
  const handleClick = () => {
    axios.get(`/api/topics/photos/${id}`)
      .then(res => setPhotos(res.data));
  }

  return (
    <div className="topic-list__item">
      {/* Render the topic title as a clickable span */}
      <span onClick={handleClick}>{title}</span>
    </div>
  );
}

export default TopicListItem;
