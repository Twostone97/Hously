import React, { useState, useEffect } from "react";
import DashboardCommonHouseNewsDeleteElement from "./DashboardCommonHouseNewsDeleteElement.js";
import DashboardCommonHouseNewsAddElement from "./DashboardCommonHouseNewsAddElement.js";

const DashboardCommonHouseNews = ({ notices, noticeboard }) => {
    /*zdravime Inventi HOOOOOKS (už zase? :D) */
    const [listOfNotices, setlistOfNotices] = useState(notices);
    const handleAddedOrRemovedNotice = () => {
        fetch("/api")
            .then(resp => resp.json())
            .then(data => setlistOfNotices(data.notices));
    };

    return (
        <div className="page__main__dash__item i__mid">
            <div className="page__main__dash__item__head">
                <h3>House news</h3>
            </div>
            <div className="page__main__dash__item__body">
                <div className="notices__list scrollable">
                    {listOfNotices.map(notice => (
                        <>
                            <h4> {notice.text}</h4>
                            <p>Updated: {notice.updated_at}</p>
                            <DashboardCommonHouseNewsDeleteElement
                                notice_id={notice.id}
                                delete_handler={handleAddedOrRemovedNotice}
                            />
                        </>
                    ))}
                </div>
                <DashboardCommonHouseNewsAddElement
                    noticeboard={noticeboard}
                    add_handler={handleAddedOrRemovedNotice}
                />
            </div>
        </div>
    );
};

export default DashboardCommonHouseNews;
