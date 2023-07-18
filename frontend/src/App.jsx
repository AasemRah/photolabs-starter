import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  // State variables for photos and topics
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  // useEffect hook to fetch photos data when component mounts
  useEffect(() => {
    axios.get('/api/photos')
      .then(res => setPhotos(res.data))
  }, []);

  // useEffect hook to fetch topics data when component mounts
  useEffect(() => {
    axios.get('/api/topics')
      .then(res => setTopics(res.data))
  }, []);

  // Custom hook for application data and actions
  const {
    state,
    choosePhotoSelected,
    toggleFavPhotoIds,
    toggleModal
  } = useApplicationData();

  // Function to toggle favorite status of a photo
  const setFav = (id) => {
    toggleFavPhotoIds({ id: id });
  };

  return (
    <div className="App">
      {/* Render HomeRoute component */}
      <HomeRoute
        actions={state.ACTIONS}
        photos={photos}
        setPhotos={setPhotos}
        topics={topics}
        openModal={state.openModal}
        toggleModal={toggleModal}
        choosePhotoSelected={choosePhotoSelected}
        favPhotoIds={state.favPhotoIds}
        setFav={setFav}
      />
      {/* Render PhotoDetailsModal component if state.openModal is true */}
      {state.openModal &&
        <PhotoDetailsModal
          actions={state.ACTIONS}
          favPhotoIds={state.favPhotoIds}
          photo={state.photoSelected}
          choosePhotoSelected={choosePhotoSelected}
          openModal={state.openModal}
          toggleModal={toggleModal}
          setFav={setFav}
        />
      }
    </div>
  );
};

export default App;
