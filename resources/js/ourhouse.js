import React from "react";
import ReactDOM from "react-dom";
import DashboardState from "./context/dashboard/DashboardState";
import Houserules from "./ourhouseComponents/houserules";
import Importantinfo from "./ourhouseComponents/importantcontacts";
import Technicalinfo from "./ourhouseComponents/technicalinfo";

const Myrent = () => {
    let url = window.location.href;
    url = url.split(";");
    return (
        <DashboardState>
            <div className="dashboard__sections__box subpage">
                <div className="dashboard__sections__box__head">
                    <h2>Náš dům</h2>
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
                    {url[1] == 1 ? (
                        <div className="half">
                            <Importantinfo />
                            <Houserules />
                        </div>
                    ) : (
                        <Technicalinfo />
                    )}
                </div>
            </div>
        </DashboardState>
    );
};

ReactDOM.render(<Myrent />, document.querySelector("#reactApp"));
