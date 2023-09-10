import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const NotPermitted = () => {
  const navigate = useNavigate();
  const style: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  return (
    <Result
      style={style}
      status='403'
      title='403'
      subTitle='Sorry, you are not authorized to access this page.'
      extra={
        <Button type='primary' onClick={() => navigate('/')}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotPermitted;
