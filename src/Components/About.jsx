import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.img} alt=''/>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About
