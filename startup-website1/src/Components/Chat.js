import React from 'react';
import './Chat.css'; 
import chatIcon from '../Collections/chat.svg';
const Chat = () => {
  return ( 
    <div className="chat-container">
      <img src={chatIcon} alt="Chat Icon" className="chat-icon" />
      
        <h2>Lorem ipsum dolor sit amet consectetur </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
        <button>Learn More</button>
       </div> 
   );
}
 
export default Chat;