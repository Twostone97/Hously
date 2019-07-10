import React from "react";

const DashboardCommonHNews = ({ apidata, isLoading }) => {
    let notices = !isLoading ? (
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
        <div className="page__main__dash__item i__mid">
            <h3>House news</h3>
            {notices}
        </div>
    );
};

export default DashboardCommonHNews;
