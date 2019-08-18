import React, { useContext, useEffect } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";
import NoticeboardDeleteElement from "./noticeboard_components/NoticeboardDeleteElement";
import NoticeboardAdminSection from "./noticeboard_components/NoticeboardAdminSection";

const Noticeboard = () => {
    const dashboardContext = useContext(DashboardContext);

    const { notices, profile } = dashboardContext.data;

    useEffect(() => {
        // align properly the height of text areas
        document
            .querySelectorAll(".notices__list__item__txt")
            .forEach(txtarea => {
                txtarea.style.height = txtarea.scrollHeight + 10 + "px";
            });
    }, []);

    return (
        <div className="dashboard__sections__box__body scrollable">
            <div className="notices__list">
                {notices.map(
                    notice =>
                        notice.permanent == 1 && (
                            <div className="notices__list__item item__featured">
                                <textarea
                                    className="notices__list__item__txt"
                                    readOnly
                                >
                                    {notice.text}
                                </textarea>

                                <div className="notices__list__item__footer">
                                    <div>
                                        <span>Přílohy:</span>
                                    </div>
                                    <div>
                                        <span className="item__featured__tag">
                                            Vytvořeno: {notice.created_at}
                                        </span>

                                        {profile === "administrator" && (
                                            <NoticeboardDeleteElement
                                                notice_id={notice.id}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                )}
                {notices.map(
                    notice =>
                        notice.permanent == 0 && (
                            <div className="notices__list__item">
                                <textarea
                                    className="notices__list__item__txt"
                                    readOnly
                                >
                                    {notice.text}
                                </textarea>

                                <div className="notices__list__item__footer">
                                    <div>
                                        <span>Přílohy:</span>
                                    </div>
                                    <div>
                                        <span>
                                            Vytvořeno: {notice.created_at}
                                        </span>

                                        {profile === "administrator" && (
                                            <NoticeboardDeleteElement
                                                notice_id={notice.id}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                )}

                {profile === "administrator" && <NoticeboardAdminSection />}
            </div>
        </div>
    );
};

export default Noticeboard;
