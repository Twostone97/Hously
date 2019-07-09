import React from "react";
import DashboardAdmin from "./DashboardAdmin.js";
import DashboardCommon from "./DashboardCommon.js";

const DashboardMain = ({ apidata }) => {
    return (
        <>
            <DashboardCommon apidata={apidata} />
            {apidata.profile === "administrator" && (
                <DashboardAdmin apidata={apidata} />
            )}
        </>
    );
};

export default DashboardMain;
