import React from "react";
import ReactDOM from "react-dom";
import DashboardState from "./context/dashboard/DashboardState";
import Intro from "./dashboardComponents/Intro";
import DashboardBox from "./dashboardComponents/layout/DashboardBox";
import Noticeboard from "./dashboardComponents/Noticeboard";
import Foo from "./dashboardComponents/Foo";
import Chats from "./dashboardComponents/Chats";

const Dashboard = () => {
    return (
        <DashboardState>
            <section className="dashboard__sections">
                <DashboardBox
                    style={{ flexBasis: "49%" }}
                    headline="Nástěnka"
                    content={<Noticeboard />}
                    linkTo="./noticeboard"
                />
                <DashboardBox
                    style={{ flexBasis: "49%" }}
                    headline="Chat"
                    content={<Chats />}
                    linkTo="./chats"
                />
                <DashboardBox
                    style={{ flexBasis: "100%" }}
                    headline="React made headline"
                    content={<Foo />}
                    linkTo="./foo"
                />
                <DashboardBox
                    style={{ flexBasis: "30%" }}
                    headline="React made headline"
                    content={<Foo />}
                    linkTo="./foo"
                />
                <DashboardBox
                    style={{ flexBasis: "30%" }}
                    headline="React made headline"
                    content={<Foo />}
                    linkTo="./foo"
                />
                <DashboardBox
                    style={{ flexBasis: "30%" }}
                    headline="React made headline"
                    content={<Foo />}
                    linkTo="./foo"
                />
            </section>
        </DashboardState>
    );
};

ReactDOM.render(<Dashboard />, document.querySelector("#reactApp"));
