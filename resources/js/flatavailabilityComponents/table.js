import React, { useContext } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";

const Table = () => {
    const dashboardContext = useContext(DashboardContext);
    const { flats, this_building, residents, users } = dashboardContext.data;

    let ourflats = [];
    let ourresidents = [];

    if (dashboardContext.loading || dashboardContext.errorFetch) {
        ("loading");
    } else {
        flats.forEach(flat => {
            if (flat.building_id == this_building.id) {
                ourflats.push(flat);
            }
        });
        residents.forEach(resident => {
            ourflats.forEach(flat => {
                if (resident.flat_id == flat.id) {
                    ourresidents.push(resident);
                }
            });
        });
    }

    const displayDate = date => {
        let array = date.split("-");
        return `${array[2]}. ${array[1]}. ${array[0]}`;
    };

    return (
        <>
            <div className="dashboard__sections__box subpage">
                <div className="dashboard__sections__box__head">
                    <h2>Obsazenost Jednotek</h2>
                </div>
                <div
                    className="dashboard__sections__box__body subpage"
                    style={{ padding: 10 }}
                >
                    <table className="obje">
                        <tr>
                            <th>Číslo jednotky</th>
                            <th>Typ jednotky</th>
                            <th>Výměra jednotky</th>
                            <th>Nájem na m2</th>
                            <th>Nájemné</th>
                            <th>Poplatky</th>
                            <th>Nájem od</th>
                            <th>Nájem do</th>
                            <th>Nájemce</th>
                        </tr>
                        {ourflats.map(flat => {
                            let resident = ourresidents.filter(resid => {
                                return resid.flat_id == flat.id;
                            });

                            let user = [];

                            if (resident.length > 0) {
                                user = users.filter(usr => {
                                    return usr.id == resident[0].user_id;
                                });
                            }

                            console.log(user);

                            return (
                                <tr>
                                    <td>{flat.label}</td>
                                    <td>{flat.type}</td>
                                    <td>{flat.size + " m2"}</td>
                                    <td>{Math.floor(flat.rent / flat.size)}</td>
                                    <td>{flat.rent}</td>
                                    <td>{flat.fees}</td>
                                    <td>
                                        {resident.length > 0
                                            ? displayDate(
                                                  resident[0]
                                                      .begining_of_current_rent
                                              )
                                            : ""}
                                    </td>
                                    <td>
                                        {resident.length > 0
                                            ? resident[0]
                                                  .end_of_current_rent !== null
                                                ? displayDate(
                                                      resident[0]
                                                          .end_of_current_rent
                                                  )
                                                : "Smlouva na dobu neurčitou"
                                            : ""}
                                    </td>
                                    <td>
                                        {user.length > 0
                                            ? `${user[0].first_name} ${user[0].last_name}`
                                            : "Žádný nájemce"}
                                    </td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
        </>
    );
};

export default Table;
