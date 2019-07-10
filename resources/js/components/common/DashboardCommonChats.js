import React, { useState, useEffect } from "react";

const DashboardCommonChats = ({ apidata: { communities, chats, users } }) => {
    /*zdravime Inventi HOOOOOKS */
    const [commun_id, setcommun_id] = useState(1);
    const handleCommunityIDChange = e => {
        setcommun_id(Number(e.target.value));
    };

    return (
        <div className="page__main__dash__item i__mid">
            <h4>Chat section</h4>

            <label htmlFor="chats">
                Select your chat
                <select
                    onChange={handleCommunityIDChange}
                    name="chats"
                    id="chats"
                >
                    {communities.map(community => (
                        <>
                            <option value={community.id}>
                                {community.community_name}
                            </option>
                        </>
                    ))}
                </select>
            </label>

            {chats
                .filter(chat => chat.community_id === commun_id)
                .map(chat => {
                    const chatUser = users.filter(
                        user => user.id === chat.user_id
                    );
                    return (
                        <div>
                            {chatUser[0].first_name} {chatUser[0].last_name}{" "}
                            <br />
                            <em>{chat.text}</em>
                        </div>
                    );
                })}
        </div>
    );
};

export default DashboardCommonChats;
