import React from 'react';
import { Modal } from 'antd';

interface AppModalInterface {
  children: JSX.Element;
  isOpen: boolean;
  handleCancel: () => void;
  title: string;
}

export default function AppModal({
  children,
  isOpen,
  handleCancel,
  title,
}: AppModalInterface) {
  return (
    <Modal
      title={title}
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
      maskClosable={false}
      destroyOnClose={true}
    >
      <>{children}</>
    </Modal>
  );
}
