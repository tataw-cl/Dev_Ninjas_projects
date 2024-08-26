import React from 'react'
import { useState } from 'react'

export const SidebarComponent = ({img, TextData, classD}) => {
    const [clicked, setClicked] = useState(false)
    const backgroundOnclick="backgroundOnclick";
  return (
    <div onClick={()=>{setClicked(true)}} 
    className={clicked ? backgroundOnclick: classD} >
        <img src={img} alt={`${img} icon`}/>
        {TextData}
    </div>
  )
}
