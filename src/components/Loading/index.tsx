import { ScaleLoader } from 'react-spinners'
import React from 'react'

const Loading = () => {
  const style: React.CSSProperties = { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }

  return (
    <div style={style}>
      <ScaleLoader color='#bd5d5d' />
      <div style={{ opacity: '0.7', marginTop: '10px' }}>Loading ...</div>
    </div>
  )
}
export default Loading
