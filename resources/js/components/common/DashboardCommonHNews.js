import React from "react";

const DashboardCommonHouseNews = ({ notices }) => {
    return (
        <div className="page__main__dash__item i__mid">
            <div className="page__main__dash__item__head">
                <h3>House news</h3>
            </div>
            <div className="page__main__dash__item__body scrollable">
                {notices.map(notice => (
                    <>
                        <h4> {notice.text}</h4>
                        <p>Updated: {notice.updated_at}</p>
                    </>
                ))}
            </div>
        </div>
    );
};

export default DashboardCommonHouseNews;
