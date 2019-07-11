import React from "react";
const BuildingInfo = ({ data, owners, users, flats, residents }) => {
    return (
        <>
            <div className="page__main__dash__item i__full">
                <div className="page__main__dash__item__head">
                    <h3>Tato budova</h3>
                </div>
                <div className="page__main__dash__item__body">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="2">Informace o budově</th>
                            </tr>
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
                            <th colSpan="3">Bytové jednotky</th>
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
                            <th colSpan="3">Nebytové jednotky</th>
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
