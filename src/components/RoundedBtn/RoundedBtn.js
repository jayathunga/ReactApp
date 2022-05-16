import React from 'react';
import './roundBtn.css';

export default function RoundedBtn(props) {
  return (
    <div>
        {/* <button className='round' style={{color:'red'}}>Click me!</button> */}
        <button type="button" className="round">{props.name}</button>
        <p>{props.message}</p>
    </div>
  )
}
