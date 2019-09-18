import React from "react";
import DashboardState from "../context/dashboard/DashboardState";
import Pie from "./flatavailabilityComponents/chart.js";

const FlatAvailability = () => {
    return (
        <DashboardState>
            <Pie />
        </DashboardState>
    );
};

export default FlatAvailability;
