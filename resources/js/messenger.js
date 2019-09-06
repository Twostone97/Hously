import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import MessengerItem from "./messengerComponents/MessengerItem";
import { isNull, isUndefined } from "util";

const Messenger = () => {
    const [loading, setloading] = useState(true);
    const [api, setapi] = useState();

    if (loading) {
        //fetches chats only
        fetch("/chatapi")
            .then(resp => resp.json())
            .then(data => setapi(data))
            .then(setloading(false));
    }

    if (!loading) {
        console.log(api);

        if (isUndefined(api)) {
            return <div />;
        } else {
            return (
                <div className="dashboard__sections__box subpage">
                    <div className="dashboard__sections__box__head">
                        <h2>Messenger</h2>
                        <a href="/app/dashboard">
                            <div className="close__icon">
                                <img
                                    src="/img/icons/dashboard/boxes/close.svg"
                                    alt=""
                                />
                            </div>
                        </a>
                    </div>
                    <div className="dashboard__sections__box__body subpage">
                        <div className="community__subpage">
                            <div className="community__subpage__list">
                                <div className="messenger__container">
                                    {api.communities.map(community => {
                                        //selecting messages in the commmunity
                                        const communityMessages = api.chats.filter(
                                            chat =>
                                                chat.community_id ==
                                                community.id
                                        );

                                        //selecting user of the last message in the community
                                        const lastMsgUserId =
                                            communityMessages[
                                                communityMessages.length - 1
                                            ].user_id;
                                        const lastMsgUser = api.users.filter(
                                            user => user.id == lastMsgUserId
                                        );

                                        return (
                                            <>
                                                <MessengerItem
                                                    headline={
                                                        community.community_name
                                                    }
                                                    lastmsgtxt={
                                                        communityMessages[
                                                            communityMessages.length -
                                                                1
                                                        ].text
                                                    }
                                                    lastmsgtime={
                                                        communityMessages[
                                                            communityMessages.length -
                                                                1
                                                        ].created_at
                                                    }
                                                    avatar={
                                                        lastMsgUser[0]
                                                            .profile_image == 1
                                                            ? require(`../../storage/app/public/${lastMsgUserId}.png`)
                                                            : require(`../../storage/app/public/unknown.png`)
                                                    }
                                                />
                                            </>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="community__subpage__detail">
                                <div className="dashboard__sections__box__head">
                                    <h2>Název komunity</h2>
                                </div>
                                Messenger
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
};

ReactDOM.render(<Messenger />, document.querySelector("#reactApp"));
