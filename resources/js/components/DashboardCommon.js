import React, { useState, useEffect } from "react";

const DashboardCommon = ({ apidata }) => {
    console.log("Dashboard COmmon notices:", apidata.notices);
    /*zdravime Inventi HOOOOOKS */
    const [commun_id, setcommun_id] = useState(1);
    const handleCommunityIDChange = e => {
        setcommun_id(Number(e.target.value));
    };
    console.log(apidata.chats);
    const getCommunityChat = apidata.chats ? (
        apidata.chats.map(chat => {
            return chat.community_id === commun_id ? (
                <>
                    <div>{chat.text} </div>
                </>
            ) : (
                ""
            );
        })
    ) : (
        <h4> Loading ... </h4>
    );

    let notices = apidata.notices ? (
        apidata.notices.map(notice => (
            <>
                <h4>{notice.text}</h4>
                <h4>Updated: {notice.updated_at}</h4>
            </>
        ))
    ) : (
        <h4>"Loading news..."</h4>
    );

    let communities = apidata.communities ? (
        apidata.communities.map(community => (
            <>
                <option value={community.id}>{community.community_name}</option>
            </>
        ))
    ) : (
        <option value="" disabled selected hidden>
            Loading communities
        </option>
    );
    console.log("communities:", communities);

    return (
        <>
            <div className="page__main__dash dash__common">
                <div className="page__main__dash__item i__mid">
                    <h3>House news</h3>
                    {notices}
                </div>
                <div className="page__main__dash__item i__mid">
                    <h4>Chat section</h4>

                    <label htmlFor="chats">
                        Select your chat
                        <select
                            onChange={handleCommunityIDChange}
                            name="chats"
                            id="chats"
                        >
                            {communities}
                        </select>
                    </label>
                    {getCommunityChat}
                </div>
            </div>
        </>
    );
};

export default DashboardCommon;
