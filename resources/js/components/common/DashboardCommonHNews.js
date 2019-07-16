import React, { useState, useEffect } from "react";
import DashboardCommonHouseNewsDeleteElement from "./DashboardCommonHouseNewsDeleteElement.js";
import DashboardCommonHouseNewsAdminSection from "./DashboardCommonHouseNewsAdminSection.js";

const DashboardCommonHouseNews = ({ notices, noticeboard, profile }) => {
    /*zdravime Inventi HOOOOOKS (už zase? :D) */
    const [listOfNotices, setlistOfNotices] = useState(notices);
    const handleAddedOrRemovedNotice = () => {
        fetch("/api")
            .then(resp => resp.json())
            .then(data => setlistOfNotices(data.notices));
    };

    useEffect(() => {
        // align properly the height of text areas
        document.querySelectorAll("textarea").forEach(txtarea => {
            txtarea.style.height = txtarea.scrollHeight + 10 + "px";
        });
    });

    return (
        <div className="page__main__dash__item i__mid">
            <div className="page__main__dash__item__head">
                <h3>House news</h3>
            </div>
            <div className="page__main__dash__item__body">
                <div className="fixedHeight__flexContainer">
                    <div className="notices__list scrollable">
                        {listOfNotices.map(notice => (
                            <div className="notices__list__item">
                                {notice.permanent == 1 && (
                                    <>
                                        <textarea
                                            className="item__featured"
                                            readOnly
                                        >
                                            {notice.text}
                                        </textarea>

                                        <p>
                                            <span className="item__featured__tag">
                                                Created: {notice.created_at}
                                            </span>

                                            {profile === "administrator" && (
                                                <DashboardCommonHouseNewsDeleteElement
                                                    notice_id={notice.id}
                                                    delete_handler={
                                                        handleAddedOrRemovedNotice
                                                    }
                                                />
                                            )}
                                        </p>
                                    </>
                                )}
                            </div>
                        ))}
                        {listOfNotices.map(notice => (
                            <div className="notices__list__item">
                                {notice.permanent == 0 && (
                                    <>
                                        <textarea
                                            readOnly
                                            className="item__normal"
                                        >
                                            {notice.text}
                                        </textarea>

                                        <p>
                                            <span>
                                                Created: {notice.created_at}
                                            </span>

                                            {profile === "administrator" && (
                                                <DashboardCommonHouseNewsDeleteElement
                                                    notice_id={notice.id}
                                                    delete_handler={
                                                        handleAddedOrRemovedNotice
                                                    }
                                                />
                                            )}
                                        </p>
                                    </>
                                )}
                            </div>
                        ))}

                        {profile === "administrator" && (
                            <DashboardCommonHouseNewsAdminSection
                                noticeboard={noticeboard}
                                add_handler={handleAddedOrRemovedNotice}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCommonHouseNews;
