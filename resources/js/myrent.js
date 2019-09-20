import React from "react";
import ReactDOM from "react-dom";
import DashboardState from "./context/dashboard/DashboardState";
import Contract from "./myrentComponents/contract";
import Financial from "./myrentComponents/financial";
import Rent from "./myrentComponents/rent";

const Myrent = () => {
    return (
        <DashboardState>
            <div className="dashboard__sections__box subpage">
                <div className="dashboard__sections__box__head">
                    <h2>Můj aktuální pronájem</h2>
                    <a href="/app/dashboard">
                        <div className="close__icon">
                            <img
                                src="/img/icons/dashboard/boxes/close.svg"
                                alt=""
                            />
                        </div>
                    </a>
                </div>
                <div className="dashboard__sections__box__body subpage">
                    <div className="oneThird" style={{ height: "80vh" }}>
                        <Contract />
                        <Financial />
                        <Rent />
                    </div>
                </div>
            </div>
        </DashboardState>
    );
};

ReactDOM.render(<Myrent />, document.querySelector("#reactApp"));
