import React, { useState, useEffect, useContext } from "react";
import { isNull } from "util";
import DashboardContext from "../context/dashboard/DashboardContext";

const Chats = () => {
    const dashboardContext = useContext(DashboardContext);
    const { communities, chats, users } = dashboardContext.data;

    const [commun_id, setcommun_id] = useState(1);
    const [listOfChats, setlistOfChats] = useState(chats);
    const handleCommunityIDChange = e => {
        setcommun_id(Number(e.target.value));
        scrollToBottom(".chat__container");
    };
    let interval = null;

    if (isNull(interval)) {
        interval = setInterval(() => {
            dashboardContext.fetchChats();
        }, 2000);
    }

    const scrollToBottom = element => {
        const el = document.querySelector(element);
        el.scrollTop = el.scrollHeight;
    };

    useEffect(() => {
        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div className="dashboard__sections__box__body">
            <div className="chat__selector">
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
            </div>

            <div className="chat__container scrollable">
                {listOfChats
                    .filter(chat => chat.community_id === commun_id)
                    .map((chat, index) => {
                        const chatUser = users.filter(
                            user => user.id === chat.user_id
                        );
                        return (
                            <div
                                className={
                                    index % 2 == 0
                                        ? "chat__bubble b__left"
                                        : "chat__bubble b__right"
                                }
                            >
                                {chatUser[0].first_name} {chatUser[0].last_name}{" "}
                                <br />
                                <em>{chat.text}</em>
                            </div>
                        );
                    })}
            </div>
            <div className="chat__input">
                <form
                    encType="multipart/form-data"
                    onSubmit={e => {
                        e.preventDefault();
                        const data = new FormData(e.target);
                        e.target[0].value = "";
                        fetch("/chat", {
                            method: "post",
                            body: data
                        }).then(() => {
                            fetch("/api")
                                .then(resp => resp.json())
                                .then(data => setlistOfChats(data.chats))
                                .then(() => {
                                    setTimeout(
                                        () =>
                                            scrollToBottom(".chat__container"),
                                        3000
                                    );
                                });
                        });
                    }}
                >
                    <input type="text" name="text" />
                    <input
                        type="hidden"
                        name="community_id"
                        value={commun_id}
                    />
                    <input type="hidden" name="image" value="" />
                    <input
                        type="hidden"
                        name="_token"
                        value={
                            document.querySelector('meta[name="csrf-token"]')
                                .content
                        }
                    />
                    <button
                        type="submit"
                        onClick={() => scrollToBottom(".chat__container")}
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chats;
