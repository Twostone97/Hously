import React from "react";

const CommunityItem = ({ avatar, name, surname, email, created }) => {
    const date = new Date(created);
    return (
        <div className="community__item">
            <div className="community__item__img">
                <div>
                    <img src={avatar} alt="" />
                </div>
            </div>
            <div className="community__item__body">
                <h4>
                    {name} {surname}
                </h4>
                <p>{email}</p>
                <p className="txt-small">
                    aktivní od: {date.getDate()}.{date.getMonth()}.
                    {date.getFullYear()}
                </p>
            </div>
        </div>
    );
};

export default CommunityItem;
