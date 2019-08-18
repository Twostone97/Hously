import React from "react";
import ReactDOM from "react-dom";
import DashboardState from "./context/dashboard/DashboardState";
import Intro from "./dashboardComponents/Intro";
import DashboardBox from "./dashboardComponents/layout/DashboardBox";
import Noticeboard from "./dashboardComponents/Noticeboard";
import Foo from "./dashboardComponents/Foo";
import Chats from "./dashboardComponents/Chats";
import Messenger from "./dashboardComponents/Messenger";
import Calendar from "./dashboardComponents/Calendar";
import SurroundingMap from "./dashboardComponents/SurroundingMap";
import OurHouse from "./dashboardComponents/OurHouse";
import MyRent from "./dashboardComponents/MyRent";
import Community from "./dashboardComponents/Community";

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
                    headline="Messenger"
                    content={<Messenger />}
                    linkTo="./messenger"
                />
                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline="Kalendář"
                    content={<Calendar />}
                    linkTo="./foo"
                />
                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline="Naše komunita"
                    content={<Community />}
                    linkTo="./foo"
                />
                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline="Service Manager"
                    content={<Foo />}
                    linkTo="./foo"
                />
                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline="Můj akutální pronájem"
                    content={<MyRent />}
                    linkTo="./foo"
                />
                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline="Náš dům"
                    content={<OurHouse />}
                    linkTo="./foo"
                />
                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline="Naše okolí"
                    content={<SurroundingMap />}
                    linkTo="./foo"
                />
            </section>
        </DashboardState>
    );
};

ReactDOM.render(<Dashboard />, document.querySelector("#reactApp"));
