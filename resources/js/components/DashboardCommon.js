import React from "react";
import DashboardCommonChats from "./common/DashboardCommonChats.js";
import DashboardCommonHouseNews from "./common/DashboardCommonHNews.js";
import DashboardCommonUserInfo from "./common/DashboardCommonUserInfo.js";
import DashboardCommonUserDocuments from "./common/DashboardCommonUserDocuments.js";

const DashboardCommon = ({
    apidata,
    apidata: {
        chats,
        current_user,
        communities,
        contract,
        contract_id,
        contract_url,
        notices,
        users
    }
}) => {
    return (
        <>
            <div className="page__main__dash dash__common">
                <DashboardCommonHouseNews notices={notices} />
                <DashboardCommonChats
                    chats={chats}
                    communities={communities}
                    users={users}
                />
            </div>
            <div className="page__main__dash dash__common">
                <DashboardCommonUserInfo
                    user={current_user}
                    contract={contract}
                />
                <DashboardCommonUserDocuments
                    contract_id={contract_id}
                    contract_url={contract_url}
                />
            </div>
        </>
    );
};

export default DashboardCommon;
