import React from 'react'
import {Modal, message } from 'antd';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../../redux/loaderSlice';
import { DeleteTheatre } from '../../calls/theatres';
function DeleteTheatreModal({ isDeleteModalOpen, setIsDeleteModalOpen, selectedTheatre, setSelectedTheatre, getData }) {
    const dispatch = useDispatch();
    const handleOk = async () => {
        try {
            dispatch(showLoading());
            let response = await DeleteTheatre(selectedTheatre._id);
            if (response.success) {
              getData();
              message.success(response.message);
              setIsDeleteModalOpen(false);
            } else {
              message.error(response.message);
            }
            setSelectedTheatre(null);
            dispatch(hideLoading());
          } catch (err) {
            dispatch(hideLoading());
            message.error(err.message);
          }
      };
      const handleCancel = () => {
        setIsDeleteModalOpen(false);
        setSelectedTheatre(null)
      };
    
  return (
    <Modal centered title="Delete Movie ?" open={isDeleteModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p className='pt-3 fs-18'>Are you sure you want to delete this theatre ?</p>
        <p className='pt-3 fs-18'> This action can't be undone and you'll lose this theatre data.</p>
      </Modal>

  )
}

export default DeleteTheatreModal