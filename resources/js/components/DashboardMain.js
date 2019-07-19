import React from "react";
import DashboardAdmin from "./DashboardAdmin.js";
import DashboardCommon from "./DashboardCommon.js";
import DashboardOwner from "./DasboardOwner.js";

const DashboardMain = ({ apidata, isLoading, refetchApp }) => {
    if (isLoading) {
        return (
            <div className="loading">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1280 720"
                    width="250"
                    height="auto"
                >
                    <path
                        id="_"
                        fill="#0000ff"
                        d="M313.39 725.41L313.39 610.21L996.09 610.21L996.09 725.41L313.39 725.41Z"
                    />
                    <path
                        id="Il"
                        fill="#0000ff"
                        d="M225.11 720L225.11 180.26L396.41 180.26L396.41 720L225.11 720Z"
                    />
                    <path
                        id="Ir"
                        fill="#0000ff"
                        d="M878.11 720L878.11 180.26L1055.39 180.26L1055.39 720L878.11 720Z"
                    />
                    <path
                        id="V"
                        fill="#0000ff"
                        d="M210.26 321L1.43 321Q77.7 270.02 147.96 226.46Q216.21 183.36 282.45 144.43Q348.69 105.51 414.93 69.82Q479.17 34.61 547.42 -0.15L730.15 -0.15Q798.44 34.61 864.73 69.82Q929 105.51 997.3 144.43Q1063.58 183.36 1133.88 226.46Q1204.19 270.02 1278.51 321L1063.66 321Q955.18 247.78 850.73 180.12Q746.28 112.46 635.8 53.14Q525.4 112 421.02 179.65Q316.64 247.78 210.26 321Z"
                    />
                </svg>
            </div>
        );
    } else {
        console.log(
            "*****************API LOADING DONE, rendering dashboard ******************"
        );
        return (
            <>
                <DashboardCommon apidata={apidata} refetchApp={refetchApp} />
                {apidata.profile === "administrator" && (
                    <DashboardAdmin apidata={apidata} refetchApp={refetchApp} />
                )}
                {apidata.profile === "owner" && (
                    <DashboardOwner apidata={apidata} />
                )}
            </>
        );
    }
};

export default DashboardMain;
