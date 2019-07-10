import React from "react";

const DashboardAdmin = ({ apidata, isLoading }) => {
    return (
        <>
            <div className="page__main__dash dash__admin">
                <div className="page__main__dash__item i__big">
                    <h4>Information about house</h4>
                    <p>Some data about the house</p>
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
