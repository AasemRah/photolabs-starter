import React from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { setFav, isFav } = props;

  return (
    <div className="photo-list__fav-icon" onClick={setFav}>
      {/* Container for the FavIcon */}
      <div className="photo-list__fav-icon-svg">
        {/* Render the FavIcon component */}
        <FavIcon fill={isFav ? '#C80000' : '#EEEEEE'} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
