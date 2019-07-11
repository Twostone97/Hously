import React from "react";
const BuildingInfo = ({ data, owners, users, flats, residents }) => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <p>Tato budova</p>
                </div>
                <div className="card-body">
                    <table>
                        <thead>
                            <th>Položka</th>
                            <th>Hodnota</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Město</td>
                                <td>{data.city}</td>
                            </tr>
                            <tr>
                                <td>Ulice</td>
                                <td>{data.street}</td>
                            </tr>
                            <tr>
                                <td>Číslo popisné</td>
                                <td>{data.house_number}</td>
                            </tr>
                            <tr>
                                <td>Počet podlaží</td>
                                <td>
                                    {` nadzemni: ` +
                                        `${data.floors_above_ground}` +
                                        ` podzemni: ` +
                                        `${data.floors_bellow_ground}`}
                                </td>
                            </tr>
                            <tr>
                                <td>Vytápění</td>
                                <td>{data.heating ? "ano" : "ne"}</td>
                            </tr>
                            <tr>
                                <td>Výtah</td>
                                <td>{data.elevator} (krát)</td>
                            </tr>

                            <tr>
                                <td>Vlastník</td>
                                <td>
                                    {`${
                                        users[owners[0].user_id - 1].first_name
                                    }` +
                                        ` ` +
                                        `${
                                            users[owners[0].user_id - 1]
                                                .last_name
                                        }`}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <th>Bytové jednotky</th>
                        </thead>

                        <tbody>
                            {flats.map(flat => {
                                if (flat.residential) {
                                    return (
                                        <>
                                            <tr>
                                                <td>Patro: {flat.floor}</td>
                                                <td>
                                                    Číslo bytu: {flat.number}
                                                </td>
                                                <td>
                                                    Obyvatel:
                                                    {residents.map(resident => {
                                                        if (
                                                            resident.flat_id ==
                                                            flat.id
                                                        ) {
                                                            return (
                                                                <>
                                                                    {`${
                                                                        users[
                                                                            resident.user_id -
                                                                                1
                                                                        ]
                                                                            .first_name
                                                                    }` +
                                                                        ` ` +
                                                                        `${
                                                                            users[
                                                                                resident.user_id -
                                                                                    1
                                                                            ]
                                                                                .last_name
                                                                        }`}
                                                                </>
                                                            );
                                                        }
                                                    })}
                                                </td>
                                            </tr>
                                        </>
                                    );
                                }
                            })}
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <th>Nebytové jednotky</th>
                        </thead>

                        <tbody>
                            {flats.map(flat => {
                                if (!flat.residential) {
                                    return (
                                        <>
                                            <tr>
                                                <td>Patro: {flat.floor}</td>
                                                <td>
                                                    Číslo jednotky:{" "}
                                                    {flat.number}
                                                </td>
                                                <td>
                                                    Uživatel:
                                                    {residents.map(resident => {
                                                        if (
                                                            resident.flat_id ==
                                                            flat.id
                                                        ) {
                                                            return (
                                                                <>
                                                                    {`${
                                                                        users[
                                                                            resident.user_id -
                                                                                1
                                                                        ]
                                                                            .first_name
                                                                    }` +
                                                                        ` ` +
                                                                        `${
                                                                            users[
                                                                                resident.user_id -
                                                                                    1
                                                                            ]
                                                                                .last_name
                                                                        }`}
                                                                </>
                                                            );
                                                        }
                                                    })}
                                                </td>
                                            </tr>
                                        </>
                                    );
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default BuildingInfo;
