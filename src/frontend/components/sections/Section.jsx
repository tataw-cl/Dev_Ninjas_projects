import React from 'react'
import "./section.css"
import {LandingContent} from '../LandingContent/LandingContent.jsx'

export const Section = ({SectionName, className}) => {
  return (
    <>
    <div className={'section'}>
        <h2>{SectionName}</h2>
        <div className={"subsection"}>
        <LandingContent  />
        <LandingContent  />
        <LandingContent />
        </div>
    </div>
    </>
  )
}