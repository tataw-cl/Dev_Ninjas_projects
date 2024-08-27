import React, {useState} from 'react';
import './content.css'; // Make sure to create and import a CSS file
// import { ChatInterface } from '../chatInterface/chatInteface';
// import Popup from '../3popButton/3popButton';
import { useNavigate } from 'react-router-dom';

export const Content = () => {
  const navigate= useNavigate(); 
  const [downloadType, setDownloadType] = useState('default');
  const [likeType, setLikeType] = useState('default');
  const [shareType, setShareType] = useState('default');
  const [showChat, setShowChat] = useState(false);

  const toggleDownloadType = () => {
    setDownloadType(downloadType === 'default' ? 'black' : 'default');
  };

  const toggleLikeType = () => {
    setLikeType(likeType === 'default' ? 'black' : 'default');
  };

  const toggleShareType = () => {
    setShareType(shareType === 'default' ? 'black' : 'default');
  };

  // const handleConnectClick = () => {
  //   setShowChat(true);
  // };


  return (
      <div className='C_container'>
        <div className="leftContent">
          <div className="imageContainer">
            <img style={{height: '100%'}} src="/images/image2.png" alt="Content" />
            <div className="overlay">
                <button className="overlayButton" onClick={toggleDownloadType}>
                    <img className='icons' src={`images/debit-purchase-svgrepo-${downloadType}.svg`} alt="Purchase Button" />
                  </button>
                  <button className="overlayButton" onClick={toggleLikeType}>
                    <img className='icons' src={`images/like-svgrepo-${likeType}.svg`} alt="Like button" />
                  </button>
                  <button className="overlayButton" onClick={toggleShareType}>
                    <img className='icons' src={`images/share-svgrepo-${shareType}.svg`} alt="Share button" />
                  </button>
            </div>
          </div>
          <button className='button1'>Purchase this piece</button>
        </div>
        <div className="rightContent">
          <div>
          <h2>Name of product</h2>
          <h3>Name of person</h3>
          <p className='postDescription bodyText'>
          This painting is a vibrant reflection of the country's diverse cultures and ethnic groups. the physical and spiritual worlds. The use of natural pigments derived from plants, minerals, and clay gives the paintings a unique earthy tone. 
          </p>
          {/* <a href="https://TatawCalrkson.tech">Link to purchase piece here</a>
          <button className='button'>Get in touch</button> */}
          
          <div className="connectToAuthor">
            <div className="profilePhoto"><img style={{height: '80%', width: '80%'}} src="images/profile 1.png" alt="Profile of author" /></div>
            <div>
            <p className='bodyText'>Connect and chat with the author</p>
              <button onClick={()=>{navigate('/message')}} className='button1'>Connect</button>
              </div>
          </div>
          {/* {showChat && (
        <div className="chat-popup">
          <button onClick={()=>{setShowChat(false)}}>X close</button>
          {/* <ChatInterface /> *
          <Popup />
        </div> 
      )}*/}
          </div>

        </div>
      </div>
  );
}
