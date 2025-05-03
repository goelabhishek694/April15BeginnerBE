import React from 'react'
import {Modal, message } from 'antd';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../../redux/loaderSlice';
import { DeleteMovie } from '../../calls/movies';
function DeleteMovieModal({ isDeleteModalOpen, setIsDeleteModalOpen, selectedMovie, setSelectedMovie, getData }) {
    const dispatch = useDispatch();
    const handleOk = async () => {
        try {
            dispatch(showLoading());
            let response = await DeleteMovie(selectedMovie._id);
            if (response.success) {
              getData();
              message.success(response.message);
              setIsDeleteModalOpen(false);
            } else {
              message.error(response.message);
            }
            setSelectedMovie(null);
            dispatch(hideLoading());
          } catch (err) {
            dispatch(hideLoading());
            message.error(err.message);
          }
      };
      const handleCancel = () => {
        setIsDeleteModalOpen(false);
        setSelectedMovie(null)
      };
    
  return (
    <Modal centered title="Delete Movie ?" open={isDeleteModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p className='pt-3 fs-18'>Are you sure you want to delete this movie ?</p>
        <p className='pt-3 fs-18'> This action can't be undone and you'll lose this movie data.</p>
      </Modal>

  )
}

export default DeleteMovieModal