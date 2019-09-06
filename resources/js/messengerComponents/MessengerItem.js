import React from "react";

const MessengerItem = ({ headline, lastmsgtxt, lastmsgtime, avatar }) => {
    return (
        <div className="messenger__item">
            <div className="messenger__item__img">
                <div>
                    <img src={avatar} alt="" />
                </div>
            </div>
            <div className="messenger__item__body">
                <h4>{headline}</h4>
                <div className="messenger__item__body__lastmsg">
                    <div className="lastmsg__txt">{lastmsgtxt}</div>
                    <div className="lastmsg__time">{lastmsgtime}</div>
                </div>
            </div>
        </div>
    );
};

export default MessengerItem;
