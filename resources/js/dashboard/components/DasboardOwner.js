import React, { useState, useEffect } from "react";

import BuildingInfo from "./owner/buildingInfo.js";
import UserListOwner from "./owner/userListOwner.js";

const DashboardOwner = ({ apidata }) => {
    console.log("apidata", apidata);

    // const [isDetail, setIsdetail] = useState(false);
    // const [detail_id, setDetail_id] = useState(null);

    // const handleSetDetail = input => {
    //     setIsdetail(!isDetail);
    //     setDetail_id(input);
    // };

    return (
        <>
            <div>
                <div className="page__main__dash dash__owner">
                    <BuildingInfo
                        data={apidata.this_building}
                        owners={apidata.owners}
                        users={apidata.users}
                        flats={apidata.flats}
                        residents={apidata.residents}
                    />
                </div>
                <div className="page__main__dash dash__owner">
                    <UserListOwner
                        residents={apidata.residents}
                        users={apidata.users}
                        flats={apidata.flats}
                    />
                </div>

                <div className="page__main__dash dash__owner">
                    <div className="page__main__dash__item i__full">
                        <div className="page__main__dash__item__head">
                            <h4>Important files</h4>
                        </div>
                        <div className="page__main__dash__item__body">
                            <p>Here will be a list of files</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardOwner;
