import React, { useContext, useEffect } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";

const Houserules = () => {
    const dashboardContext = useContext(DashboardContext);
    const { rules } = dashboardContext.data;

    if (dashboardContext.loading || dashboardContext.errorFetch) {
        return (
            <>
                <div className="dashboard__sections__box subpage">
                    <div className="dashboard__sections__box__head">
                        <h2>Pravidla domu</h2>
                    </div>
                    <div
                        className="dashboard__sections__box__body subpage scrollable"
                        style={{ height: "80vh" }}
                    ></div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="dashboard__sections__box subpage">
                    <div className="dashboard__sections__box__head">
                        <h2>Pravidla domu</h2>
                    </div>
                    <div
                        className="dashboard__sections__box__body subpage scrollable"
                        style={{ height: "80vh" }}
                    >
                        <textarea className="house__rules" readOnly>
                            {rules}
                        </textarea>
                    </div>
                </div>
            </>
        );
    }
};

export default Houserules;
