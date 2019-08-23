import React from "react";
import ReactDOM from "react-dom";
import CommunityContainer from "./communityComponents/CommunityContainer";
import DashboardState from "./context/dashboard/DashboardState";

const Community = () => {
    return (
        <DashboardState>
            <section className="dashboard__sections">
                <CommunityContainer />
            </section>
        </DashboardState>
    );
};

ReactDOM.render(<Community />, document.querySelector("#reactApp"));
