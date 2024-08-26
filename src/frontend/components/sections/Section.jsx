import React from 'react'
import "./section.css"
import {LandingContent} from '../LandingContent/LandingContent.jsx'

export const Section = ({SectionName, className}) => {
  return (
    <>
    {/* <div class="section">
    <div class="scroll-section left-to-right">
        <p>First section content scrolling from left to right.</p>
    </div>
    <div class="scroll-section right-to-left">
        <p>Second section content scrolling from right to left.</p>
    </div>
</div> */}
    <div className='scroll-container'>
    <div className={'section'}>
        <h2>{SectionName}</h2>
        <div className={className + "subsection scroll-section left-to-right"}>
        <LandingContent  />
        <LandingContent  />
        <LandingContent />
        </div>
    </div>
    </div>
    </>
  )
}