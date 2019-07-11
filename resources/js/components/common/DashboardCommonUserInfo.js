import React from "react";

const DashboardCommonUserInfo = ({ user, contract }) => {
    if (!user || !contract) {
        return (
            <div className="page__main__dash__item i__big">
                <h3>My info</h3>
                <p>Error: no user or contract data...</p>
            </div>
        );
    } else {
        return (
            <div className="page__main__dash__item i__big">
                <h3>My info</h3>
                <p>
                    <strong>Name: </strong>
                    {user.first_name} {user.last_name}
                </p>
                <p>
                    <strong>Email: </strong>
                    {user.email}
                </p>
                <p>
                    <strong>Phone: </strong>
                    {user.phone_number}
                </p>
                <p>
                    <strong>Birth Date: </strong>
                    {user.birth_date}
                </p>
                <p>
                    <strong>Contract Type: </strong>
                    {contract.type}
                </p>
                <p>
                    <strong>Contract Scope: </strong>
                    {contract.name}
                </p>
            </div>
        );
    }
};

export default DashboardCommonUserInfo;
