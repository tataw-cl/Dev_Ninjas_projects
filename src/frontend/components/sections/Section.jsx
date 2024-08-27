import React from 'react'
import "./section.css"
import {LandingContent} from '../LandingContent/LandingContent.jsx'
// import { contentData } from '../ContentData.jsx'

export const Section = ({SectionName}) => {
  return (
    <>
    <div className={'section'}>
        <h2>{SectionName}</h2>
        <div className={"subsection"}>
        <LandingContent postDescription={"Fashion Outfit 1"} UserName={"Designer A"} imageUrl={"./images/Angu_Walters.jfif"} />
        <LandingContent postDescription={"Fashion Outfit 1"} UserName={"Designer B"} imageUrl={"./images/arts 1.jfif"} />
        <LandingContent postDescription={"Fashion Outfit 1"} UserName={"Designer C"} imageUrl={"./images/arts-2.jfif"}/>
        </div>
    </div>
    </>
  )
}