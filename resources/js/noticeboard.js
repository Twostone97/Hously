import React from "react";
import ReactDOM from "react-dom";
import NoticeboardContainer from "./noticeboardComponents/NoticeboardContainer";
import DashboardState from "./context/dashboard/DashboardState";

const Noticeboard = () => {
    return (
        <DashboardState>
            <section className="dashboard__sections">
                <NoticeboardContainer />
            </section>
        </DashboardState>
    );
};

ReactDOM.render(<Noticeboard />, document.querySelector("#reactApp"));
