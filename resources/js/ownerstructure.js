import React from "react";
import ReactDOM from "react-dom";
import DashboardState from "./context/dashboard/DashboardState";
import Structure from "./ownerstructureComponents/structure";
import Owner from "./ownerstructureComponents/owner";

const Ownerstructure = () => {
    return (
        <DashboardState>
            <div className="dashboard__sections__box subpage">
                <div className="dashboard__sections__box__head">
                    <h2>Struktura Vlastníka</h2>
                    <a href="/app/dashboard">
                        <div className="close__icon">
                            <img
                                src="/img/icons/dashboard/boxes/close.svg"
                                alt=""
                            />
                        </div>
                    </a>
                </div>
                <div className="dashboard__sections__box__body subpage scrollable">
                    <div className="half">
                        <Owner />
                        <Structure />
                    </div>
                </div>
            </div>
        </DashboardState>
    );
};

ReactDOM.render(<Ownerstructure />, document.querySelector("#reactApp"));
