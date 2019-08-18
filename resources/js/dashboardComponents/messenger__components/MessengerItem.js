import React from "react";

const MessengerItem = ({ headline, lastmsgtxt, lastmsgtime }) => {
    return (
        <div>
            <div className="messenger__item">
                <div className="messenger__item__img">
                    <img
                        src="/img/icons/dashboard/avatars/avatar01.jpg "
                        alt=""
                    />
                </div>
                <div className="messenger__item__body">
                    <h4>{headline}</h4>
                    <div className="messenger__item__body__lastmsg">
                        <div className="lastmsg__txt">{lastmsgtxt}</div>
                        <div className="lastmsg__time">{lastmsgtime}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessengerItem;
