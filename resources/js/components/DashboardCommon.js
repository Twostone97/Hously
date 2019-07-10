import React, { useState, useEffect } from "react";
import DashboardCommonChats from "./common/DashboardCommonChats.js";
import DashboardCommonHNews from "./common/DashboardCommonHNews.js";

const DashboardCommon = ({ apidata, isLoading }) => {
    /*zdravime Inventi HOOOOOKS */
    const [commun_id, setcommun_id] = useState(1);
    const handleCommunityIDChange = e => {
        setcommun_id(Number(e.target.value));
    };

    return (
        <>
            <div className="page__main__dash dash__common">
                <DashboardCommonHNews apidata={apidata} isLoading={isLoading} />
                <div className="page__main__dash__item i__mid">
                    <h4>Chat section</h4>

                    <label htmlFor="chats">
                        Select your chat
                        <select
                            onChange={handleCommunityIDChange}
                            name="chats"
                            id="chats"
                        >
                            {!isLoading ? (
                                apidata.communities.map(community => (
                                    <>
                                        <option value={community.id}>
                                            {community.community_name}
                                        </option>
                                    </>
                                ))
                            ) : (
                                <option value="" disabled selected hidden>
                                    Loading communities
                                </option>
                            )}
                        </select>
                    </label>

                    {!isLoading &&
                        apidata.chats
                            .filter(chat => chat.community_id === commun_id)
                            .map(chat => <div>{chat.text} </div>)}
                    {isLoading && <h4> Loading ... </h4>}
                </div>
            </div>
        </>
    );
};

export default DashboardCommon;
