import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const NotFoundPage = () => {
  const navigate = useNavigate()
  const style: React.CSSProperties = { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }

  return (
    <div style={style}>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button type='primary' onClick={() => navigate('/')}>
            Back Home
          </Button>
        }
      />
    </div>
  )
}
export default NotFoundPage
