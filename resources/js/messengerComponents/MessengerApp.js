import React, { useEffect } from "react";
import { isNull, isUndefined } from "util";

const MessengerApp = ({
    chats,
    users,
    current_user,
    current_community,
    reload,
    messages
}) => {
    // const scrollToBottom = element => {
    //     const el = document.querySelector(element);
    //     el.scrollTop = el.scrollHeight;
    // };

    // scrollToBottom(".messangerscroll");

    let interval = null;

    if (isNull(interval)) {
        interval = setInterval(() => {
            reload();
        }, 1000);
    }

    useEffect(() => {
        return () => {
            clearInterval(interval);
        };
    });

    current_community = current_community.split(";");

    //returns current date and time YY-mm-dd hh-mm-ss
    const getDate = () => {
        var today = new Date();
        var date =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();
        var time =
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();
        var dateTime = date + " " + time;
        return dateTime;
    };

    useEffect(() => {
        messages.forEach(message => {
            if (message.message_room == current_community[0]) {
                message.updated_at = `${getDate()}`;
                console.log(message);
                let formData = new FormData();
                formData.append("id", message.id);
                formData.append("updated_at", message.updated_at);
                formData.append(
                    "_token",
                    document.querySelector('meta[name="csrf-token"]').content
                );
                let data = formData;
                fetch("/messageread", {
                    method: "post",
                    body: data
                });
            }
        });
    }, []);

    if (current_community.length > 1) {
        return (
            <>
                <div
                    className="dashboard__sections__box__body scrollable messangerscroll"
                    style={{ height: "100%", width: "100%" }}
                >
                    {messages.map(message => {
                        if (message.message_room == current_community[0]) {
                            if (message.user_id == current_user.id) {
                                return (
                                    <div className="chat__bubble b__right">
                                        Já
                                        <br />
                                        {message.message}
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="chat__bubble b__left">
                                        {users.map(user => {
                                            if (message.user_id == user.id) {
                                                return `${user.first_name} ${user.last_name}`;
                                            }
                                        })}
                                        <br />
                                        {message.message}
                                    </div>
                                );
                            }
                        }
                    })}
                </div>
                <div
                    className="notices__add"
                    style={{ width: "100%", marginTop: "20px" }}
                >
                    <form
                        encType="multipart/form-data"
                        onSubmit={e => {
                            e.preventDefault();
                            const data = new FormData(e.target);
                            e.target[0].value = "";
                            fetch("/message", {
                                method: "post",
                                body: data
                            }).then(() => {
                                reload();
                            });
                        }}
                        style={{ width: "100%" }}
                    >
                        <input
                            type="hidden"
                            name="message_room"
                            value={parseInt(current_community[0])}
                        />
                        <label htmlFor="message" style={{ width: "100%" }}>
                            <textarea
                                id="message"
                                name="message"
                                style={{ width: "100%" }}
                            />
                        </label>
                        <input
                            type="hidden"
                            name="_token"
                            value={
                                document.querySelector(
                                    'meta[name="csrf-token"]'
                                ).content
                            }
                        />
                        <button type="submit">Odeslat</button>
                    </form>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div
                    className="dashboard__sections__box__body scrollable messangerscroll"
                    style={{ height: "100%", width: "100%" }}
                >
                    {chats.map(message => {
                        if (message.community_id == current_community[0]) {
                            if (message.user_id == current_user.id) {
                                return (
                                    <div className="chat__bubble b__right">
                                        Já
                                        <br />
                                        {message.text}
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="chat__bubble b__left">
                                        {users.map(user => {
                                            if (message.user_id == user.id) {
                                                return `${user.first_name} ${user.last_name}`;
                                            }
                                        })}
                                        <br />
                                        {message.text}
                                    </div>
                                );
                            }
                        }
                    })}
                </div>
                <div
                    className="notices__add"
                    style={{ width: "100%", marginTop: "20px" }}
                >
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
                                reload();
                            });
                        }}
                        style={{ width: "100%" }}
                    >
                        <input
                            type="hidden"
                            name="community_id"
                            value={parseInt(current_community[0])}
                        />
                        <label htmlFor="text" style={{ width: "100%" }}>
                            <textarea
                                id="text"
                                name="text"
                                style={{ width: "100%" }}
                            />
                        </label>
                        <input
                            type="hidden"
                            name="_token"
                            value={
                                document.querySelector(
                                    'meta[name="csrf-token"]'
                                ).content
                            }
                        />
                        <button type="submit">Odeslat</button>
                    </form>
                </div>
            </>
        );
    }
};

export default MessengerApp;
