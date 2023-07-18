import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      {/* Render the logo */}
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Render the TopicList component */}
      <TopicList topics={props.topics} photos={props.photos} setPhotos={props.setPhotos} />
      {/* Render the FavBadge component */}
      <FavBadge favPhotoIds={props.favPhotoIds} />
    </div>
  );
}

export default TopNavigation;
