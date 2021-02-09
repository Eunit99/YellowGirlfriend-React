import React from 'react'

export default function ChatInput() {
  return (
    <div className="message-input-container">
      <textarea
        name="" id="messageBox"
        placeholder="Type your response ..."
        className="">
      </textarea>
      <div className="send-button-container">
        <button className="send-btn-round soundBtn activeSend" id="sendBtnRound">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
