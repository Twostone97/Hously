import React from "react";
import ReactDOM from "react-dom";
import DashboardState from "./context/dashboard/DashboardState";
import Table from "./flatavailabilityComponents/table";

const FlatAvailability = () => {
    return (
        <DashboardState>
            <Table />
        </DashboardState>
    );
};

ReactDOM.render(<FlatAvailability />, document.querySelector("#reactApp"));
