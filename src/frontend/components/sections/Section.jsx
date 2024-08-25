import React from 'react'
import "./section.css"
import { Content } from '../content/Content'

export const Section = () => {
  return (
    <div className='section'>
        <div className="subSection">
            <Content />
        </div>
        <div className="subSection">
        <Content />
        </div>
        <div className="subSection">
        <Content />
        </div>
    </div>
  )
}