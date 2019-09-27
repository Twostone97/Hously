import React, { useContext, useEffect } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";
import { isDate } from "util";

const Contract = () => {
    const dashboardContext = useContext(DashboardContext);
    const {
        flats,
        this_building,
        residents,
        current_user,
        contract
    } = dashboardContext.data;

    const displayDate = date => {
        date.toString();
        let array = date.split("-");
        return `${`${array[2]}. ${array[1]}. ${array[0]}`}`;
    };

    if (dashboardContext.loading || dashboardContext.errorFetch) {
        return (
            <>
                <div className="dashboard__sections__box subpage">
                    <div className="dashboard__sections__box__head">
                        <h2>Nájemní smlouva</h2>
                    </div>
                    <div
                        className="dashboard__sections__box__body subpage"
                        style={{ height: "80vh" }}
                    >
                        <table className="pnajmu">
                            <th>Oprávněný nájemník</th>
                            <tr>
                                <td>Jméno a příjmení:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Datum narození:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Trvalé bydliště:</td>
                                <td></td>
                            </tr>
                        </table>

                        <table className="pnajmu">
                            <th>Nájemní smlouva</th>
                            <tr>
                                <td>Nájemní smlouva uzavřena dne:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Začátek prvního nájemního období:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Začátek aktuálního nájemního období:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Smlouva na dobu:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Konec aktuálního nájemního období:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Lhůta pro žádost o prodloužení nájmu:</td>
                                <td></td>
                            </tr>
                        </table>

                        <h4>Plné znění nájemní smlouvy:</h4>
                    </div>
                </div>
            </>
        );
    } else {
        const current_resident = residents.filter(resident => {
            return resident.user_id == current_user.id;
        });

        const current_contract = residents.filter(resident => {
            return resident.user_id == current_user.id;
        });
        return (
            <>
                <div className="dashboard__sections__box subpage">
                    <div className="dashboard__sections__box__head">
                        <h2>Nájemní smlouva</h2>
                    </div>
                    <div
                        className="dashboard__sections__box__body subpage scrollable"
                        style={{ height: "80vh" }}
                    >
                        <table className="pnajmu">
                            <th>Oprávněný nájemník</th>
                            <tr>
                                <td>Jméno a příjmení:</td>
                                <td>{`${current_user.first_name} ${current_user.last_name}`}</td>
                            </tr>
                            <tr>
                                <td>Datum narození:</td>
                                <td>{displayDate(current_user.birth_date)}</td>
                            </tr>
                            <tr>
                                <td>Trvalé bydliště:</td>
                                <td>{`${current_user.street} ${current_user.house_number}, ${current_user.city}`}</td>
                            </tr>
                        </table>

                        <table className="pnajmu">
                            <th>Nájemní smlouva</th>
                            <tr>
                                <td>Nájemní smlouva uzavřena dne:</td>
                                <td>
                                    {displayDate(
                                        current_resident[0]
                                            .begining_of_first_rent
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Začátek prvního nájemního období:</td>
                                <td>
                                    {displayDate(
                                        current_resident[0]
                                            .begining_of_first_rent
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Začátek aktuálního nájemního období:</td>
                                <td>
                                    {displayDate(
                                        current_resident[0]
                                            .begining_of_current_rent
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Smlouva na dobu:</td>
                                <td>{contract.name}</td>
                            </tr>
                            <tr>
                                <td>Konec aktuálního nájemního období:</td>
                                <td>
                                    {" "}
                                    {current_resident[0].contract_id == 2
                                        ? displayDate(
                                              current_resident[0]
                                                  .begining_of_current_rent
                                          )
                                        : contract.name}
                                </td>
                            </tr>
                            <tr>
                                <td>Lhůta pro žádost o prodloužení nájmu:</td>
                                <td>Již brzy</td>
                            </tr>
                        </table>

                        <div style={{ marginTop: "1rem", display: "flex" }}>
                            <h5 style={{ fontWeight: "800" }}>
                                Plné znění nájemní smlouvy:
                            </h5>
                            <a
                                href={`/storage/contract/${current_resident[0].flat_id}.pdf`}
                                style={{ marginLeft: "2rem" }}
                            >
                                PDF
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Contract;
