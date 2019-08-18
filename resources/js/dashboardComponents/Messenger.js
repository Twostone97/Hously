import React, { useContext } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";
import MessengerItem from "./messenger__components/MessengerItem";

const Messenger = () => {
    const dashboardContext = useContext(DashboardContext);
    const { communities, chats, users } = dashboardContext.data;

    return (
        <div className="dashboard__sections__box__body scrollable">
            <div className="messenger__container">
                {communities.map(community => {
                    const communityMessages = chats.filter(
                        chat => chat.community_id == community.id
                    );
                    return (
                        <>
                            <MessengerItem
                                headline={community.community_name}
                                lastmsgtxt={
                                    communityMessages[
                                        communityMessages.length - 1
                                    ].text
                                }
                                lastmsgtime={
                                    communityMessages[
                                        communityMessages.length - 1
                                    ].created_at
                                }
                            />
                            <MessengerItem
                                headline={community.community_name}
                                lastmsgtxt={
                                    communityMessages[
                                        communityMessages.length - 1
                                    ].text
                                }
                                lastmsgtime={
                                    communityMessages[
                                        communityMessages.length - 1
                                    ].created_at
                                }
                            />
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Messenger;
