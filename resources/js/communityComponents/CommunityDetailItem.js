import React, { useContext } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";

const CommunityDetailItem = ({ match }) => {
    const dashboardContext = useContext(DashboardContext);
    const { users } = dashboardContext.data;
    const { userid } = match.params;

    const currentUser = users.filter(usr => {
        return usr.id == userid;
    });

    return (
        <div className="community__subpage__detail">
            <div className="detail__item">
                <div className="detail__item__img">
                    <img
                        src={
                            currentUser[0].profile_image
                                ? require(`../../../storage/app/public/${userid}.png`)
                                : require(`../../../storage/app/public/unknown.png`)
                        }
                        alt=""
                    />
                </div>
                <div className="detail__item__txt">
                    <h3>
                        {currentUser[0].first_name} {currentUser[0].last_name}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default CommunityDetailItem;
