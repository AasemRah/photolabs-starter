import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  // Destructure the necessary props
  const { actions, favPhotoIds, openModal, toggleModal, choosePhotoSelected, setFav } = props;

  // Function to handle when a photo is clicked
  const clickPhoto = (id) => {
    // Call choosePhotoSelected function to set the selected photo
    choosePhotoSelected(id, props.photos);
    // If the modal is not open, toggle it to open
    if (!openModal) {
      toggleModal();
    }
  };

  // Map through the photos array and create PhotoListItem components
  const photoList = props.photos.map((photo) => (
    <PhotoListItem
      favPhotoIds={favPhotoIds}
      {...photo}
      key={photo.id}
      isFav={props.favPhotoIds.includes(photo.id)}
      setFav={() => { setFav(photo.id) }}
      clickPhoto={() => { clickPhoto(photo.id) }}
    />
  ));

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
}

export default PhotoList;
