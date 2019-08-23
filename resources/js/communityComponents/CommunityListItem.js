import React from "react";

const CommunityListItem = ({
    user_id,
    name,
    surname,
    profile_img,
    setUserDetail
}) => {
    return (
        <div className="list__item" onClick={() => setUserDetail(user_id)}>
            <div className="list__item__img">
                <img
                    src={
                        profile_img
                            ? require(`../../../storage/app/public/${user_id}.png`)
                            : require(`../../../storage/app/public/unknown.png`)
                    }
                    alt=""
                />
            </div>
            <div className="list__item__txt">
                <h4>
                    {name} {surname}
                </h4>
            </div>
        </div>
    );
};

export default CommunityListItem;
