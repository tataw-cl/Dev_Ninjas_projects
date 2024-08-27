import React from 'react'
import "./section1.css"

export const Section1 = () => {
  return (
    <div className='section1'>
        <div className="section1Text">
            <h1>
             Breaking Down Barriers,
               Enhancing Collaboration,
               Preserving Cultural Heritage
            </h1>
            <div class="buttonStyle"> 
            <button className='button1'>Get started</button>
            </div>
            
        </div>
        <div className="section1Image">
    <img src="images/Hero2.jpg" alt="Africa" />
        </div>
    </div>
  )
}
