import React, { useState, useEffect } from "react";
import UserReg from "./admin/userReg.js";
import BuildingReg from "./admin/buildingReg.js";
import BuildingInfo from "./admin/buildingInfo.js";
import UserList from "./admin/UserList.js";
import UserDetail from "./admin/userDetail.js";

const DashboardAdmin = ({ apidata, refetchApp }) => {
    console.log("apidata", apidata);

    const [isDetail, setIsdetail] = useState(false);
    const [detail_id, setDetail_id] = useState(null);

    const handleSetDetail = input => {
        setIsdetail(!isDetail);
        setDetail_id(input);
    };

    return (
        <>
            <div className="page__main__dash dash__admin" id="admin">
                <BuildingInfo
                    data={apidata.this_building}
                    owners={apidata.owners}
                    users={apidata.users}
                    flats={apidata.flats}
                    residents={apidata.residents}
                />
            </div>
            <div className="page__main__dash dash__admin">
                <UserReg apidata={apidata} refetchApp={refetchApp} />
                <BuildingReg
                    data={apidata.this_building}
                    owners={apidata.owners}
                    users={apidata.users}
                    flats={apidata.flats}
                    residents={apidata.residents}
                    refetchApp={refetchApp}
                />
            </div>
            <div className=" page__main__dash dash__admin">
                {!isDetail ? (
                    <UserList
                        residents={apidata.residents}
                        users={apidata.users}
                        flats={apidata.flats}
                        handleSetDetail={handleSetDetail}
                        refetchApp={refetchApp}
                    />
                ) : (
                    <UserDetail
                        handleSetDetail={handleSetDetail}
                        user={apidata.users[detail_id - 1]}
                        resident={apidata.residents.filter(
                            resident => resident.user_id == detail_id
                        )}
                        rentcontracts={apidata.rentcontracts}
                        flats={apidata.flats}
                        refetchApp={refetchApp}
                    />
                )}
            </div>

            <div className=" page__main__dash dash__admin">
                <div className="page__main__dash__item i__full">
                    <div className="page__main__dash__item__head">
                        <h4>Important files</h4>
                    </div>
                    <div className="page__main__dash__item__body">
                        <p>Here will be a list of files</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardAdmin;
