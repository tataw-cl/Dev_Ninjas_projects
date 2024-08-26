import React from 'react'
import { Navbar } from '../Navbar/Navbar.jsx'
import { Searchbar } from '../searchbar/searchbar.jsx'
import { Section } from '../sections/Section.jsx'
import { Section1 } from '../section1/section1.jsx'
import { Footer } from '../footer/footer.jsx'

export const GeneralView = () => {
  return (
    <div>
        <Navbar />
        <Section1 />
      {/* <Searchbar /> */}
      <Section SectionName={"Cultural playlist"}/>
      <Section SectionName={"Camer vibez playlist"}/>
      <Section SectionName={"Camer vibez playlist"}/>
      <Footer />
    </div>
  )
}
