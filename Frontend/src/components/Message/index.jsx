const Message = () => {
    return (
<div className="message-box">
    <div className="message-content">
        <div className="message-header">
            <div className="name">Aybüke C.</div>
            <div className="star-checkbox">
                <input type="checkbox" id="star-1" />
                <label htmlFor="star-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                        <polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8 12 2" />
                    </svg>
                </label>
            </div>
        </div>
        <p className="message-line">Hey Alex! We need the final design for our client meeting.</p>
        <p className="message-line time">Dec, 12</p>
    </div>
</div>
    )
}

export default Message;