import React, { useContext, useEffect } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";

const Importantcontacts = () => {
    const dashboardContext = useContext(DashboardContext);
    const { this_building } = dashboardContext.data;

    let subjekty = [
        ["Policie", 158],
        ["Hasiči", 150],
        ["ZZS", 155],
        ["Havarijní služba", 153468268],
        ["Výtah - vyproštění osob", 156863154],
        ["Zámečník", 641984101]
    ];

    const nicePhoneNumber = phoneNumber => {
        phoneNumber = phoneNumber.toString();
        return (
            phoneNumber.substring(0, 3) +
            " " +
            phoneNumber.substring(3, 6) +
            " " +
            phoneNumber.substring(6, 9)
        );
    };

    return (
        <>
            <div className="dashboard__sections__box subpage">
                <div className="dashboard__sections__box__head">
                    <h2>Důležité kontakty</h2>
                </div>
                <div
                    className="dashboard__sections__box__body subpage"
                    style={{ height: "80vh" }}
                >
                    <table className="obje" style={{ padding: "20px" }}>
                        <tr>
                            <th>Subjekt</th>
                            <th>Telefon</th>
                            <th>Email</th>
                        </tr>
                        {subjekty.map(subjekt => {
                            return (
                                <tr>
                                    <td>{subjekt[0]}</td>
                                    <td>
                                        {subjekt[1] > 999
                                            ? nicePhoneNumber(subjekt[1])
                                            : subjekt[1]}
                                    </td>
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

export default Importantcontacts;
