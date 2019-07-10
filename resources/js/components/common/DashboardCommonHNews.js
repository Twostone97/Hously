import React from "react";

const DashboardCommonHouseNews = ({ apidata: { notices = [] } }) => {
    return (
        <div className="page__main__dash__item i__mid">
            <h3>House news</h3>
            {notices.map(notice => (
                <>
                    <h4>{notice.text}</h4>
                    <h4>Updated: {notice.updated_at}</h4>
                </>
            ))}
        </div>
    );
};

export default DashboardCommonHouseNews;
