import React, { useState, useEffect } from "react";
import UserReg from "./admin/userReg.js";
import BuildingReg from "./admin/buildingReg.js";
import BuildingInfo from "./admin/buildingInfo.js";
import UserList from "./admin/UserList.js";

const DashboardAdmin = ({ apidata }) => {
    console.log("hello kitty");
    console.log("apidata", apidata);
    console.log("residenlist", apidata.users);

    return (
        <>
            <div>
                <div className=" page__main__dash__item i__big">
                    <UserReg apidata={apidata} />
                </div>
                <div className=" page__main__dash__item i__big">
                    <BuildingReg />
                </div>
                <div className=" page__main__dash__item i__big">
                    <BuildingInfo
                        data={apidata.this_building}
                        owners={apidata.owners}
                        users={apidata.users}
                        flats={apidata.flats}
                        residents={apidata.residents}
                    />
                </div>
                <div className=" page__main__dash__item i__big">
                    <UserList
                        residents={apidata.residents}
                        users={apidata.users}
                        flats={apidata.flats}
                    />
                </div>

                <div className="page__main__dash__item i__small">
                    <h4>Important files</h4>
                    <p>Here will be a list of files</p>
                </div>
            </div>
        </>
    );
};

export default DashboardAdmin;
