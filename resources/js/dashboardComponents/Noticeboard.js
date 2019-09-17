import React, { useContext, useEffect } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";

const Noticeboard = () => {
    const dashboardContext = useContext(DashboardContext);

    const { notices, profile } = dashboardContext.data;

    useEffect(() => {
        // align properly the height of text areas
        document
            .querySelectorAll(".notices__list__item__txt")
            .forEach(txtarea => {
                txtarea.style.height = 45 + "px";
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
                                    defaultValue={notice.text}
                                ></textarea>

                                <div className="notices__list__item__footer">
                                    <div>
                                        <span>Přílohy:</span>
                                    </div>
                                    <div>
                                        <span className="item__featured__tag">
                                            Vytvořeno: {notice.created_at}
                                        </span>
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
                                            Vytvořeno: {notice.created_at}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default Noticeboard;
