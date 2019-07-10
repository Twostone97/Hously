import React from "react";
import DashboardAdmin from "./DashboardAdmin.js";
import DashboardCommon from "./DashboardCommon.js";

const DashboardMain = ({ apidata, isLoading }) => {
    if (isLoading) {
        return (
            <div>
                <h3>Please wait...</h3>
            </div>
        );
    } else {
        console.log(
            "*****************API LOADING DONE, rendering dashboard ******************"
        );
        return (
            <>
                <DashboardCommon apidata={apidata} isLoading={isLoading} />
                {apidata.profile === "administrator" && (
                    <DashboardAdmin apidata={apidata} />
                )}
            </>
        );
    }
};

export default DashboardMain;
