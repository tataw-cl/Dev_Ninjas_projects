import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const LandingContent = ({postDescription, UserName, view, Date, imageUrl}) => {
  const navigate = useNavigate();

  return (
    <div onClick={()=>{navigate('/dir')}} className='LandingContent'>

      
<div>
    <img style={{width: '100%'}} src={'images/Rectangle 41.png'} alt="page content" />
</div>
<div className={"textComp"}>
    <p className={"subHeading"}>{postDescription}</p>
    <div className={"text"}>
    <p>
   { UserName}
    </p>
    <p>{view}.{Date}</p>
    </div> 
</div>
    </div>
  )
}
