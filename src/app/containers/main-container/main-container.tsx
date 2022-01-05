import React from 'react';
import MessagesContainer from '../messages-container/messages-container';
import Sidebar from '../sidebar/sidebar';
import './main-container.scss';

export default function MainContainer() {
  return (
    <div className="main-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="messages-container">
        <MessagesContainer />
      </div>
    </div>
  );
}
