import React, { useState, useEffect } from "react";
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
import MainEcoDis from "./dashboardComponents/MainEconDisplay";

const Dashboard = () => {
    const [api, setapi] = useState({});
    const [loaded, setloaded] = useState(false);

    if (!loaded) {
        fetch("/selectprofile1")
            .then(resp => resp.json())
            .then(data => {
                setapi(data);
            })
            .finally(() => {
                setloaded(true);
            });
        console.log(api);
    }

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
                    linkTo="./foo"
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
                    linkTo="./community"
                />
                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline="Service Manager"
                    content={<Foo />}
                    linkTo="./foo"
                />

                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline="Hlavní ekonomické ukazatele"
                    content={<MainEcoDis />}
                    linkTo="./foo"
                />

                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline="Obsazenost jednotek"
                    content={<Foo />}
                    linkTo="./foo"
                />

                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline="Revize"
                    content={<Foo />}
                    linkTo="./foo"
                />
                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline="Já správce"
                    content={<Foo />}
                    linkTo="./foo"
                />
                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline="Výkaz práce"
                    content={<Foo />}
                    linkTo="./foo"
                />
                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline="Opravy a investice"
                    content={<Foo />}
                    linkTo="./foo"
                />
                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline="Vlastník - Struktura"
                    content={<Foo />}
                    linkTo="./foo"
                />
                <DashboardBox
                    style={{ flexBasis: "32%" }}
                    headline='Ukolovník - "Kategorie aktuální" '
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
