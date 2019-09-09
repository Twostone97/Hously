import React from "react";

const MessengerApp = ({
    chats,
    users,
    current_user,
    current_community,
    reload
}) => {
    return (
        <>
            <div
                className="dashboard__sections__box__body scrollable"
                style={{ height: "100%", width: "100%" }}
            >
                {chats.map(message => {
                    if (message.community_id == current_community) {
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
                        value={parseInt(current_community)}
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
                            document.querySelector('meta[name="csrf-token"]')
                                .content
                        }
                    />
                    <button type="submit">Odeslat</button>
                </form>
            </div>
        </>
    );
};

export default MessengerApp;
