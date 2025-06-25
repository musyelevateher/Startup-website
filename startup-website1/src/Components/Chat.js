import React from 'react';
import './Chat.css'; 
import chatIcon from '../Collections/chat.svg';
const Chat = () => {
  return ( 
    <div className="chat-container">
      <img src={chatIcon} alt="Chat Icon" className="chat-icon" />
      <div className="chat-content"> 
        <h1 className="sit">Lorem ipsum dolor sit amet<br /> consectetur </h1>
        <p className="dolor">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
        <button className="learn">Learn More</button>
      </div>
       </div> 
   );
}
 
export default Chat;