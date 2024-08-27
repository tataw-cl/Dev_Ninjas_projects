import React from 'react'
import './Post.css'
import Upload1 from './Upload1'
import User from '../users/User'
const Post = () => {
  return (
    <div id="post">
      <div id="topuser">
        <div> <User/> </div>

        <div> <button id="stub">Post</button> </div>
      </div>

    
      <div>
        <input type='text' placeholder='What is the name of your product'></input>
      </div>
      <div>
        <textarea placeholder='Product Describtion'/>

      </div>

      <Upload1/>

      <div>
        <input placeholder='Creation date' type='date'/>
      </div>

      <div>
        <p>What is the status of your work?</p>
        <input type="radio" id="option1" name="purchase" value="exhibition"/>
        <label for="option">Exhibition Only </label><br></br>
        <input type="radio" id="option2" name="purchase" value="forsale"/>
        <label for="option">Available for sale </label>
      </div>
  <div>
    <button id="btn"> Post </button>
 </div>
    </div>
  )
}

export default Post
