import React from "react";
import DashboardCommonChats from "./common/DashboardCommonChats.js";
import DashboardCommonHouseNews from "./common/DashboardCommonHNews.js";
import DashboardCommonUserInfo from "./common/DashboardCommonUserInfo.js";
import DashboardCommonUserDocuments from "./common/DashboardCommonUserDocuments.js";
import DashboardCommonHouseRules from "./common/DashboardCommonHouseRules.js";
const DashboardCommon = ({
    apidata: {
        chats,
        current_user,
        communities,
        contract,
        contract_id,
        notices,
        noticeboard,
        profile,
        rules,
        users,
        residents,
        flats,

        this_building
    },
    refetchApp
}) => {
    return (
        <>
            {console.log("cresident", residents)}
            {console.log("flats", flats)}
            {console.log("user", current_user)}

            <div className="page__main__dash dash__common">
                <DashboardCommonHouseNews
                    notices={notices}
                    noticeboard={noticeboard}
                    profile={profile}
                />
                <DashboardCommonChats
                    chats={chats}
                    communities={communities}
                    users={users}
                />
            </div>
            <div className="page__main__dash dash__common">
                <DashboardCommonUserInfo
                    user={current_user}
                    profile={profile}
                />
                {profile !== "administrator" && (
                    <DashboardCommonUserDocuments
                        contract={contract}
                        contract_id={contract_id}
                        residents={residents}
                        current_user={current_user}
                    />
                )}
            </div>
            <div className="page__main__dash dash__common">
                <DashboardCommonHouseRules
                    rules={rules}
                    profile={profile}
                    building={this_building}
                    refetchApp={refetchApp}
                />
            </div>
        </>
    );
};

export default DashboardCommon;
