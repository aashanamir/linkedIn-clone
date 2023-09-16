import React from 'react';
import "./style.scss";

const StickyBox = ({ text}) => {
  return (
    <div className='sticky-box'>
      <p><span className='hash'>#</span><span>{text}</span></p>
    </div>
  )
}

export default StickyBox
