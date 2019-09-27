import React, { useContext, useEffect, useState } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";

const Owner = () => {
    const dashboardContext = useContext(DashboardContext);
    const {
        owners_entity,
        owners_authority,
        owners,
        this_building,
        users
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
                        <h2>Vlastník</h2>
                    </div>
                    <div
                        className="dashboard__sections__box__body subpage scrollable"
                        style={{ height: "80vh" }}
                    >
                        <table>
                            <th>
                                <td>Identifikace vlastníka</td>
                            </th>
                            <tr>
                                <td>Právní forma:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Datum vzniku a zápisu:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Obchodní firma:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Sídlo:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Identifikační číslo:</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>Předmět činosti:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Základní členský vklad:</td>
                                <td></td>
                            </tr>
                            <th>
                                <td>Statutární orgán představenstvo</td>
                            </th>
                            <tr>
                                <td>Počet členů:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Způsob jednání:</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </>
        );
    } else {
        let i = 0;
        return (
            <>
                <div className="dashboard__sections__box subpage">
                    <div className="dashboard__sections__box__head">
                        <h2>Vlastník</h2>
                    </div>
                    <div
                        className="dashboard__sections__box__body subpage scrollable"
                        style={{ height: "80vh" }}
                    >
                        <table className="pnajmu">
                            <tr>
                                <th>Identifikace vlastníka</th>
                            </tr>
                            <tr>
                                <td>Právní forma:</td>
                                <td>{owners_entity.entity_form}</td>
                            </tr>
                            <tr>
                                <td>Datum vzniku a zápisu:</td>
                                <td>
                                    {displayDate(owners_entity.founding_date)}
                                </td>
                            </tr>
                            <tr>
                                <td>Obchodní firma:</td>
                                <td>{owners_entity.entity_name}</td>
                            </tr>
                            <tr>
                                <td>Sídlo:</td>
                                <td>{`${owners_entity.entity_street} ${owners_entity.entity_number_orient}/${owners_entity.entity_number_cp}, ${owners_entity.entity_city}`}</td>
                            </tr>
                            <tr>
                                <td>Identifikační číslo:</td>
                                <td>{owners_entity.entity_ICO}</td>
                            </tr>
                            <tr>
                                <td>Předmět činosti:</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>Základní členský vklad:</td>
                                <td>
                                    {owners_entity.basic_membership_deposit +
                                        " kč"}
                                </td>
                            </tr>
                            <tr>
                                <th>Statutární orgán představenstvo</th>
                            </tr>
                            <tr>
                                <td>Počet členů:</td>
                                <td>{owners_entity.member_q}</td>
                            </tr>
                            <tr>
                                <td>Způsob jednání:</td>
                                <td>...</td>
                            </tr>
                            {owners_authority.map(owner => {
                                i++;
                                return (
                                    <>
                                        <tr className="member">
                                            <th>Člen {i}</th>
                                        </tr>
                                        <tr>
                                            <td>Funkce:</td>
                                            <td>{owner.job}</td>
                                        </tr>
                                        <tr>
                                            <td>Den vzniku funkce</td>
                                            <td>
                                                {displayDate(
                                                    owner.authority_from
                                                )}
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </table>
                    </div>
                </div>
            </>
        );
    }
};

export default Owner;
