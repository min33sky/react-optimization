import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from '../components/PhotoList';
import { fetchPhotos } from '../redux/photos';
import selectFilteredPhotos from '../redux/select/selectFilteredPhotos';

function PhotoListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const photos = useSelector(selectFilteredPhotos);
  const loading = useSelector(state => state.photos.loading);

  // const photos =
  //   category === 'all'
  //     ? allPhotos
  //     : allPhotos.filter(photo => photo.category === category);

  console.log('PostListContainer was rendered');

  if (loading === 'error') {
    return <span>Error!</span>;
  }

  if (loading !== 'done') {
    return <span>loading...</span>;
  }

  return <PhotoList photos={photos} />;
}

export default PhotoListContainer;
