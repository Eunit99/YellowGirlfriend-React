import React from 'react';
import loadingImg from './assets/img/typing-indicator.svg'
import './assets/css/ChatsLoader.css'

function ChatsLoader(props) {
  return (
    <div className="chat-loader">
     <img
        src={loadingImg}
        alt="loading"
        className="loading-img"
      />
    </div>
  );
}

export default ChatsLoader;