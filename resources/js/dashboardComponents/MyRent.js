import React, { useContext } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";

const MyRent = () => {
    const dashboardContext = useContext(DashboardContext);
    const { residents, current_user } = dashboardContext.data;

    return (
        <div className="dashboard__sections__box__body scrollable">
            <div className="myrent__container">
                <div className="myrent__container__section">
                    <p>
                        Konec aktuálního nájemního období: <span> ss</span>
                    </p>
                    <p>
                        Lhůta pro žádost o prodloužení nájmu:{" "}
                        <span> 12/2019</span>
                    </p>
                    <p>
                        Počet hlášených osob:: <span> 2</span>
                    </p>
                </div>
                <div className="myrent__container__section">
                    <h4>Předpis nájmu</h4>
                    <p>
                        Datum přístí splatnosti nájmu: <span> 12/2019</span>
                    </p>
                    <p>
                        Datum poslední přijaté platby: <span> 12/2018</span>
                    </p>
                    <p>
                        Aktuální přeplatek/nedoplatek: <span> 0,00 Kč</span>
                    </p>
                    <button>Zaplatit</button>
                </div>
            </div>
        </div>
    );
};

export default MyRent;
