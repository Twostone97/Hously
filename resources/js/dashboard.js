import React from "react";
import ReactDOM from "react-dom";
import DashboardState from "./context/dashboard/DashboardState";
import Intro from "./dashboardComponents/Intro";
import DashboardBox from "./dashboardComponents/layout/DashboardBox";
import Noticeboard from "./dashboardComponents/Noticeboard";

const Dashboard = () => {
    return (
        <DashboardState>
            <Intro />
            <section className="dashboard__sections">
                <DashboardBox
                    style={{ flexBasis: "49%" }}
                    headline="React made headline"
                    content={<Noticeboard />}
                    linkTo="./noticeboard"
                />
                <DashboardBox
                    style={{ flexBasis: "49%" }}
                    headline="React made headline"
                    content={<Noticeboard />}
                    linkTo="./noticeboard"
                />
                <DashboardBox
                    style={{ flexBasis: "100%" }}
                    headline="React made headline"
                    content={<Noticeboard />}
                    linkTo="./noticeboard"
                />
                <DashboardBox
                    style={{ flexBasis: "30%" }}
                    headline="React made headline"
                    content={<Noticeboard />}
                    linkTo="./noticeboard"
                />
                <DashboardBox
                    style={{ flexBasis: "30%" }}
                    headline="React made headline"
                    content={<Noticeboard />}
                    linkTo="./noticeboard"
                />
                <DashboardBox
                    style={{ flexBasis: "30%" }}
                    headline="React made headline"
                    content={<Noticeboard />}
                    linkTo="./noticeboard"
                />
            </section>
        </DashboardState>
    );
};

ReactDOM.render(<Dashboard />, document.querySelector("#reactApp"));
