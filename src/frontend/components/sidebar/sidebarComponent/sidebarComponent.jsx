import React from 'react'
import { useState } from 'react'
import "./sidebarComponent.css"

export const SidebarComponent = ({img, TextData}) => {
    const [clicked, setClicked] = useState(false)
    const backgroundOnclick="backgroundOnclick";
  return (
    <button onClick={()=>{setClicked(true)}} 
    className={"background"} >
        <img src={img} alt={`${img} icon`}/>
        {TextData}
    </button>
  )
}
