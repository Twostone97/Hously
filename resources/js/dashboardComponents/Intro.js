import React, { useContext } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";

const Intro = () => {
    const dashboardContext = useContext(DashboardContext);

    return (
        <section className="dashboard__intro bg__gradient-light">
            <h1>Hously Dashboard</h1>
            <h5>Dear User, welcome to your kingdom</h5>
            <p>this is context test: {dashboardContext.test}</p>
        </section>
    );
};

export default Intro;
