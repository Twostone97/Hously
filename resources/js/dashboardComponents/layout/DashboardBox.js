import React, { useContext } from "react";
import DashboardContext from "../../context/dashboard/DashboardContext";

const DashboardBox = ({ style, headline, content, linkTo }) => {
    const dashboardContext = useContext(DashboardContext);

    if (dashboardContext.loading || dashboardContext.errorFetch) {
        return (
            <div className="dashboard__sections__box" style={style}>
                <div className="dashboard__sections__box__head">
                    <h3>
                        {dashboardContext.errorFetch
                            ? "Fetch failed..."
                            : "Loading..."}
                    </h3>
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
                    {content}
                </a>
            </div>
        );
    }
};

export default DashboardBox;
