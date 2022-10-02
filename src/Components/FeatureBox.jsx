import React from 'react'

function FeatureBox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt=""/>
        </div>
        <div className='s-b-test'>
            <h2>{props.title}</h2>
            <p>Lorem is the tool for saviing a lot time while writing a single paragraph</p>

        </div>
  
    </div>
  )
}

export default FeatureBox