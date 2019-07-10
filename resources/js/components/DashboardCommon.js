import React from "react";
import DashboardCommonChats from "./common/DashboardCommonChats.js";
import DashboardCommonHouseNews from "./common/DashboardCommonHNews.js";

const DashboardCommon = ({ apidata }) => {
    return (
        <>
            <div className="page__main__dash dash__common">
                <DashboardCommonHouseNews apidata={apidata} />
                <DashboardCommonChats apidata={apidata} />
            </div>
        </>
    );
};

export default DashboardCommon;
