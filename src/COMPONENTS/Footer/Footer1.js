import React from 'react'

import fruits1 from '../../Images/fruits1.png';
import './Footer1.css';

const Footer1 = () => {
  return (
    <div className='footer1'>
     <div className='left'>
        <img src={fruits1} alt='fruits'/>
     </div>
     <div className='right'>
        <h1>Fruits at your doorstep</h1>
        <p>We deliver fresh vegetables & fruits at your doorstep.
        We deliver fresh vegetables & fruits at your doorstep.
        </p>
     </div>
    </div>
  )
}

export default Footer1
