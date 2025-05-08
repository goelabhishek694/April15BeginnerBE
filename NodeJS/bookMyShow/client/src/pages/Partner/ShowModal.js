import React from 'react'
import {Modal, message } from 'antd';
function ShowModal({isShowModalOpen, setIsShowModalOpen, selectedTheatre, setSelectedTheatre, getData}) {
    const handleOk = () => {
        
    }

    const handleCancel = () => {
        setIsShowModalOpen(false);
        setSelectedTheatre(null)
    }
  return (
    <Modal centered title="Delete Movie ?" open={isShowModalOpen} onOk={handleOk} onCancel={handleCancel}>
        
  </Modal>
  )
}

export default ShowModal