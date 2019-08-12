import React from "react";
import ReactDOM from "react-dom";
import DashboardState from "./context/dashboard/DashboardState";

const Houses = () => {
    return (
        <DashboardState>
            <h1>This is list of houses</h1>
        </DashboardState>
    );
};

ReactDOM.render(<Houses />, document.querySelector("#reactApp"));
