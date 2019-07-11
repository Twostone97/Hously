import React from "react";

const DashboardCommonHouseNews = ({ notices }) => {
    return (
        <div className="page__main__dash__item i__mid">
            <div className="page__main__dash__item__head">
                <h3>House news</h3>
            </div>
            <div className="page__main__dash__item__body">
                {notices.map(notice => (
                    <>
                        <h4>{notice.text}</h4>
                        <h4>Updated: {notice.updated_at}</h4>
                    </>
                ))}
            </div>
        </div>
    );
};

export default DashboardCommonHouseNews;
