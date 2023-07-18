import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

export const FavBadge = (props) => {
  // Destructure the favPhotoIds prop from the provided props
  const { favPhotoIds } = props;

  // Check if there are any favorite photos
  const isFavPhotoExist = favPhotoIds.length > 0;

  return (
    <div className='fav-badge'>
      {/* Render the FavIcon component */}
      <FavIcon width={20} height={17} fill="#C80000" displayAlert={!!isFavPhotoExist}/>
    </div>
  );
};

export default FavBadge;
