import React from 'react'

export const LandingContent = ({postDescription, UserName, view, Date, imageUrl}) => {
  return (
    <div className='LandingContent'>
<div>
    <img style={{width: '100%'}} src={imageUrl} alt="page content" />
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
