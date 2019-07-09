import React from "react";

const DashboardCommon = ({ apidata }) => {
    console.log("Dashboard COmmon notices:", apidata.notices);

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
                        <select name="chats" id="chats">
                            <option value="1">Chat 1</option>
                            <option value="2">Chat 2</option>
                            <option value="3">Chat 3</option>
                        </select>
                    </label>
                </div>
            </div>
        </>
    );
};

export default DashboardCommon;
