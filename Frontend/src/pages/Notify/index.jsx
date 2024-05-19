import React, { useEffect } from 'react';
import Message from '../../components/Message';

const Notify = () => {
  useEffect(() => {
    const showMessages = () => {
      document.querySelector('.messages-section').classList.add('show');
    };

    const hideMessages = () => {
      document.querySelector('.messages-section').classList.remove('show');
    };

    const messagesBtn = document.querySelector('.messages-btn');
    const messagesClose = document.querySelector('.messages-close');

    if (messagesBtn && messagesClose) {
      messagesBtn.addEventListener('click', showMessages);
      messagesClose.addEventListener('click', hideMessages);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (messagesBtn && messagesClose) {
        messagesBtn.removeEventListener('click', showMessages);
        messagesClose.removeEventListener('click', hideMessages);
      }
    };
  }, []);

  return (
    <div className="messages-section">
    <button className="messages-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
    </button>
    <div className="projects-section-header">
        <p> Alertas</p>
    </div>
    <div className="messages">
      <Message/>
    </div>
</div>
  );
};

export default Notify;
