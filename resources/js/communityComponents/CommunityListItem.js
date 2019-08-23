import React from "react";
import { Link } from "react-router-dom";

const CommunityListItem = ({
    user_id,
    name,
    surname,
    profile_img,
    setUserDetail
}) => {
    return (
        <Link to={`/app/community/${user_id}`}>
            <div className="list__item">
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
        </Link>
    );
};

export default CommunityListItem;
