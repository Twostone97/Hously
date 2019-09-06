import React, { useContext } from "react";
import CommunityItem from "./community_components/CommunityItem";
import DashboardContext from "../context/dashboard/DashboardContext";

const Community = () => {
    const dashboardContext = useContext(DashboardContext);

    const { users } = dashboardContext.data;

    //sort users descending (http://www.mattmorgante.com/technology/javascript-sort-compare)

    const usersSortDesc = [...users]; //using spread to prevent sorting in the Dashboard context provider
    usersSortDesc.sort((a, b) => {
        if (a.created_at > b.created_at) {
            return -1;
        } else if (a.created_at == b.created_at) {
            return 0;
        } else {
            return 1;
        }
    });

    return (
        <div className="dashboard__sections__box__body scrollable">
            <div className="community__container">
                {usersSortDesc.map(user => {
                    return (
                        <a href={`/app/community/${user.id}`}>
                            <CommunityItem
                                name={user.first_name}
                                surname={user.last_name}
                                email={user.email}
                                created={user.created_at}
                                avatar={
                                    user.profile_image == 1
                                        ? require(`../../../storage/app/public/${user.id}.png`)
                                        : require(`../../../storage/app/public/unknown.png`)
                                }
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Community;
