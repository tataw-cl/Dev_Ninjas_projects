import React from 'react'
import { Section2 } from '../sections/section2'

export const category = ({categoryName}) => {
  return (
    <div>
        <p>Browse an awesome array of creative pieces</p>
        <Section2 SectionName={categoryName} />
        <Section2 SectionName={categoryName} />
        <Section2 SectionName={categoryName} />
    </div>
  )
}
