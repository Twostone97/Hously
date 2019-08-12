import React, { useContext, useEffect } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";
import NoticeboardDeleteElement from "./noticeboard_components/NoticeboardDeleteElement";
import NoticeboardAdminSection from "./noticeboard_components/NoticeboardAdminSection";

const Noticeboard = () => {
    const dashboardContext = useContext(DashboardContext);

    const { notices, profile } = dashboardContext.data;

    return (
        <div
            className="dashboard__sections__box__body scrollable"
            style={{ height: "40vh" }}
        >
            <div className="notices__list">
                {notices.map(notice => (
                    <div className="notices__list__item">
                        {notice.permanent == 1 && (
                            <>
                                <textarea className="item__featured" readOnly>
                                    {notice.text}
                                </textarea>

                                <p>
                                    <span className="item__featured__tag">
                                        Created: {notice.created_at}
                                    </span>

                                    {profile === "administrator" && (
                                        <NoticeboardDeleteElement
                                            notice_id={notice.id}
                                        />
                                    )}
                                </p>
                            </>
                        )}
                    </div>
                ))}
                {notices.map(notice => (
                    <div className="notices__list__item">
                        {notice.permanent == 0 && (
                            <>
                                <textarea readOnly className="item__normal">
                                    {notice.text}
                                </textarea>

                                <p>
                                    <span>Created: {notice.created_at}</span>

                                    {profile === "administrator" && (
                                        <NoticeboardDeleteElement
                                            notice_id={notice.id}
                                        />
                                    )}
                                </p>
                            </>
                        )}
                    </div>
                ))}

                {profile === "administrator" && <NoticeboardAdminSection />}
            </div>
        </div>
    );
};

export default Noticeboard;
