import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import MessengerItem from "./messengerComponents/MessengerItem";
import MessengerApp from "./messengerComponents/MessengerApp";
import { isNull, isUndefined } from "util";

const Messenger = () => {
    const [loading, setloading] = useState(true);
    const [api, setapi] = useState();
    let urlId = "1";

    const fetchChat = () => {
        setloading(true);
        fetch("/chatapi")
            .then(resp => resp.json())
            .then(data => setapi(data))
            .then(setloading(false));
    };

    if (loading) {
        fetchChat();
    }

    let url = window.location.href;
    url = url.split("/");
    if (url.length > 5) {
        urlId = url[url.length - 1];
    }

    if (!loading) {
        if (isUndefined(api)) {
            return <div />;
        } else {
            api.communities.forEach(community => {
                if (community.id == urlId) {
                    name = community.community_name;
                }
            });
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
                                <div className="dashboard__sections__box__head">
                                    <h2>Komunity</h2>
                                </div>
                                <div className="dashboard__sections__box__body scrollable">
                                    <div className="messenger__container">
                                        {api.communities.map(community => {
                                            //selecting messages in the commmunity
                                            const communityMessages = api.chats.filter(
                                                chat =>
                                                    chat.community_id ==
                                                    community.id
                                            );

                                            if (communityMessages.length != 0) {
                                                //selecting user of the last message in the community

                                                const lastMsgUserId =
                                                    communityMessages[
                                                        communityMessages.length -
                                                            1
                                                    ].user_id;
                                                const lastMsgUser = api.users.filter(
                                                    user =>
                                                        user.id == lastMsgUserId
                                                );
                                                return (
                                                    <>
                                                        <a
                                                            href={`/app/messenger/${community.id}`}
                                                        >
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
                                                                        .profile_image ==
                                                                    1
                                                                        ? require(`../../storage/app/public/${lastMsgUserId}.png`)
                                                                        : require(`../../storage/app/public/unknown.png`)
                                                                }
                                                            />
                                                        </a>
                                                    </>
                                                );
                                            } else {
                                                return (
                                                    <>
                                                        <a
                                                            href={`/app/messenger/${community.id}`}
                                                        >
                                                            <MessengerItem
                                                                headline={
                                                                    community.community_name
                                                                }
                                                                lastmsgtxt="Žádné zprávy!"
                                                                lastmsgtime="-"
                                                                avatar="../../storage/app/public/unknown.png"
                                                            />
                                                        </a>
                                                    </>
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                                <div className="dashboard__sections__box__head">
                                    <h2>Zprávy</h2>
                                </div>
                                <div className="dashboard__sections__box__body scrollable">
                                    <div className="messenger__container">
                                        {api.message_rooms !== null ? (
                                            api.message_rooms.map(room => {
                                                let uid = room.with.split(";");
                                                let testid = "0";
                                                if (
                                                    uid[0] ==
                                                    api.current_user.id
                                                ) {
                                                    testid = uid[1];
                                                } else {
                                                    testid = uid[0];
                                                }
                                                let mruser = api.users.filter(
                                                    user => user.id == testid
                                                );

                                                let roommessages = api.messages.filter(
                                                    message =>
                                                        message.message_room ==
                                                        room.id
                                                );

                                                let newMessage = false;

                                                if (roommessages.length > 0) {
                                                    if (
                                                        roommessages[
                                                            roommessages.length -
                                                                1
                                                        ].created_at ==
                                                        roommessages[
                                                            roommessages.length -
                                                                1
                                                        ].updated_at
                                                    ) {
                                                        newMessage = true;
                                                    }
                                                }

                                                if (newMessage) {
                                                    return (
                                                        <>
                                                            <a
                                                                href={`/app/messenger/${room.id};m`}
                                                            >
                                                                <MessengerItem
                                                                    headline={`${mruser[0].first_name} ${mruser[0].last_name}`}
                                                                    lastmsgtxt="Máte nepřečtené zprávy."
                                                                    lastmsgtime="-"
                                                                    avatar="../../storage/app/public/unknown.png"
                                                                />
                                                            </a>
                                                        </>
                                                    );
                                                } else {
                                                    return (
                                                        <>
                                                            <a
                                                                href={`/app/messenger/${room.id};m`}
                                                            >
                                                                <MessengerItem
                                                                    headline={`${mruser[0].first_name} ${mruser[0].last_name}`}
                                                                    lastmsgtxt="Žádné nové zprávy!"
                                                                    lastmsgtime="-"
                                                                    avatar="../../storage/app/public/unknown.png"
                                                                />
                                                            </a>
                                                        </>
                                                    );
                                                }
                                            })
                                        ) : (
                                            <h3>Žádné zprávy</h3>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="community__subpage__detail">
                                <div className="dashboard__sections__box__head">
                                    <h2>{name}</h2>
                                </div>
                                <div
                                    className="dashboard__sections__box__body"
                                    style={{ height: "96%" }}
                                >
                                    <MessengerApp
                                        chats={api.chats}
                                        users={api.users}
                                        current_user={api.current_user}
                                        current_community={urlId}
                                        reload={fetchChat}
                                        messages={api.messages}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
};

ReactDOM.render(<Messenger />, document.querySelector("#reactApp"));
