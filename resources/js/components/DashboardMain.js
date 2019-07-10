import React from "react";
import DashboardAdmin from "./DashboardAdmin.js";
import DashboardCommon from "./DashboardCommon.js";

const DashboardMain = ({ apidata, isLoading }) => {
    return (
        <>
            {/* <DashboardCommon apidata={apidata} isLoading={isLoading} /> */}
            {apidata.profile === "administrator" && (
                <DashboardAdmin apidata={apidata} isLoading={isLoading} />
            )}
        </>
    );
};

export default DashboardMain;
