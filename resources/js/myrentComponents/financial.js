import React, { useContext, useEffect } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";

const Financial = () => {
    const dashboardContext = useContext(DashboardContext);
    const { this_building } = dashboardContext.data;

    let měsíce = [
        "Leden",
        "Únor",
        "Březen",
        "Duben",
        "Květen",
        "Červen",
        "Červenec",
        "Srpen",
        "Září",
        "Říjen",
        "Listopad",
        "Prosinec"
    ];

    return (
        <>
            <div className="dashboard__sections__box subpage">
                <div className="dashboard__sections__box__head">
                    <h2>Finanční Plnění</h2>
                </div>
                <div
                    className="dashboard__sections__box__body subpage"
                    style={{ height: "80vh" }}
                >
                    <table className="obje" style={{ padding: "20px" }}>
                        <tr>
                            <th>Měsíc</th>
                            <th>Předpis</th>
                            <th>Zaplaceno</th>
                            <th>Datum</th>
                            <th>Účel</th>
                        </tr>
                        {měsíce.map(měsíc => {
                            return (
                                <tr>
                                    <td>{měsíc}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
        </>
    );
};

export default Financial;
