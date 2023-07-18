import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  // Destructure the necessary props
  const { clickPhoto, setFav, isFav } = props;

  return (
    <li className="photo-list__item">
      {/* Render the PhotoFavButton component */}
      <PhotoFavButton setFav={setFav} isFav={isFav} />
      {/* Render the image */}
      <img className="photo-list__image" src={props.urls.regular} alt="Photograph" onClick={clickPhoto} />
      <section className='photo-list__user-details'>
        {/* Render the user profile image */}
        <img className='photo-list__user-profile' src={props.user.profile} alt="User Profile" />
        <div className='photo-list__user-info'>
          {/* Render the username */}
          <span>{props.user.username}</span>
          {/* Render the user location */}
          <span className='photo-list__user-location'>{props.location.city}, {props.location.country}</span>
        </div>
      </section>
    </li>
  );
}

export default PhotoListItem;
