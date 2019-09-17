import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardContext from "../context/dashboard/DashboardContext";
import NoticeboardDeleteElement from "./NoticeboardDeleteElement";
import NoticeboardAdminSection from "./NoticeboardAdminSection";

const NoticeboardContainer = () => {
    const dashboardContext = useContext(DashboardContext);

    useEffect(() => {
        // align properly the height of text areas
        document
            .querySelectorAll(".notices__list__item__txt")
            .forEach(txtarea => {
                txtarea.style.height = txtarea.scrollHeight + 10 + "px";
            });
    }, [dashboardContext.loading]);

    const { notices, profile } = dashboardContext.data;

    if (dashboardContext.loading || dashboardContext.errorFetch) {
        return (
            <div className="dashboard__sections__box subpage">
                <div className="dashboard__sections__box__body content-loading">
                    {dashboardContext.errorFetch ? (
                        <h4>"Fetch failed..."</h4>
                    ) : (
                        <img src="/img/layout/spinner.gif" />
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <div className="dashboard__sections__box subpage">
                <div className="dashboard__sections__box__head">
                    <h2>Nástěnka</h2>
                    <a href="/app/dashboard">
                        <div className="close__icon">
                            <img
                                src="/img/icons/dashboard/boxes/close.svg"
                                alt=""
                            />
                        </div>
                    </a>
                </div>
                <div className="dashboard__sections__box__body subpage scrollable">
                    <div className="notices__list">
                        {notices.map(
                            notice =>
                                notice.permanent == 1 && (
                                    <div className="notices__list__item item__featured">
                                        <textarea
                                            className="notices__list__item__txt"
                                            readOnly
                                            defaultValue={notice.text}
                                        ></textarea>

                                        <div className="notices__list__item__footer">
                                            <div>
                                                <span>Přílohy:</span>
                                            </div>
                                            <div>
                                                <span className="item__featured__tag">
                                                    Vytvořeno:{" "}
                                                    {notice.created_at}
                                                </span>

                                                {profile ===
                                                    "administrator" && (
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
                                            defaultValue={notice.text}
                                        ></textarea>

                                        <div className="notices__list__item__footer">
                                            <div>
                                                <span>Přílohy:</span>
                                            </div>
                                            <div>
                                                <span>
                                                    Vytvořeno:{" "}
                                                    {notice.created_at}
                                                </span>

                                                {profile ===
                                                    "administrator" && (
                                                    <NoticeboardDeleteElement
                                                        notice_id={notice.id}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                </div>
                <div className="dashboard__sections__box__body subpage addnotice">
                    {profile === "administrator" && <NoticeboardAdminSection />}
                </div>
            </div>
        );
    }
};

export default NoticeboardContainer;
