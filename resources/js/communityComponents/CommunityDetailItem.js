import React, { useContext } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";

const CommunityDetailItem = ({ user_id }) => {
    const dashboardContext = useContext(DashboardContext);
    const { users } = dashboardContext.data;

    return (
        <div className="community__subpage__detail">
            <div className="detail__item">
                <div className="detail__item__img">
                    <img
                        src={
                            users[user_id - 1].profile_image
                                ? require(`../../../storage/app/public/${user_id}.png`)
                                : require(`../../../storage/app/public/unknown.png`)
                        }
                        alt=""
                    />
                </div>
                <div className="detail__item__txt">
                    <h3>
                        {users[user_id - 1].first_name}{" "}
                        {users[user_id - 1].last_name}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default CommunityDetailItem;
