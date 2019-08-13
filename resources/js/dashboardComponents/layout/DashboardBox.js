import React, { useContext } from "react";
import DashboardContext from "../../context/dashboard/DashboardContext";

const DashboardBox = ({ style, headline, content, linkTo }) => {
    const dashboardContext = useContext(DashboardContext);

    if (dashboardContext.loading || dashboardContext.errorFetch) {
        return (
            <div className="dashboard__sections__box" style={style}>
                <div className="dashboard__sections__box__body">
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
            <div className="dashboard__sections__box" style={style}>
                <a href={linkTo}>
                    <div className="dashboard__sections__box__head">
                        <h1>{headline}</h1>
                    </div>
                </a>
                {content}
            </div>
        );
    }
};

export default DashboardBox;
