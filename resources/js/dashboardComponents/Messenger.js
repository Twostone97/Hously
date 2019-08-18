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
                    //selecting messages in the commmunity
                    const communityMessages = chats.filter(
                        chat => chat.community_id == community.id
                    );

                    //selecting user of the last message in the community
                    const lastMsgUserId =
                        communityMessages[communityMessages.length - 1].user_id;
                    const lastMsgUser = users.filter(
                        user => user.id == lastMsgUserId
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
                                avatar={
                                    lastMsgUser[0].profile_image == 1
                                        ? require(`../../../storage/app/public/${lastMsgUserId}.png`)
                                        : require(`../../../storage/app/public/unknown.png`)
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
                                avatar={
                                    lastMsgUser[0].profile_image == 1
                                        ? require(`../../../storage/app/public/${lastMsgUserId}.png`)
                                        : require(`../../../storage/app/public/unknown.png`)
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
