import React, { useState, useEffect } from "react";

const UserReg = ({ apidata }) => {
    const [isSmlouvaNaDobuUrcitou, setisSmlouvaNaDobuUrcitou] = useState(false);

    const changeInput = () => {
        setisSmlouvaNaDobuUrcitou(!isSmlouvaNaDobuUrcitou);
    };

    return (
        <>
            <h4>Registrace obyvatel</h4>

            <form
                action="/resident"
                method="post"
                encType="multipart/form-data"
            >
                <select name="user_id">
                    {apidata.users.map(user => {
                        return (
                            <option value={user.id}>
                                {`${user.first_name}` +
                                    " " +
                                    `${user.last_name}`}
                            </option>
                        );
                    })}
                </select>
                <br />

                <select name="flat_id">
                    {apidata.flats.map(flat => {
                        return (
                            <option value={flat.id}>
                                {`patro: ` +
                                    `${flat.floor}` +
                                    ` číslo bytu: ` +
                                    `${flat.number}`}
                            </option>
                        );
                    })}
                </select>
                <br />
                <input
                    type="hidden"
                    name="building_id"
                    value={apidata.this_building.id}
                />

                <label>Začátek prvního nájemního období</label>
                <input type="date" name="begining_of_first_rent" />
                <br />

                <label>Začátek aktuálního nájemního období</label>
                <input type="date" name="begining_of_current_rent" />
                <br />

                <label>Smlouva</label>
                <select name="contract_id" onChange={changeInput}>
                    {apidata.rentcontracts.map(contract => {
                        return (
                            <option value={contract.id}>
                                {`typ: ` + `${contract.name}`}
                            </option>
                        );
                    })}
                </select>
                <br />

                {isSmlouvaNaDobuUrcitou && (
                    <>
                        <label>Konec aktuálního nájemního obdobý</label>
                        <input type="date" name="end_of_current_rent" />
                        <br />
                    </>
                )}

                <label>Počet osob</label>
                <input type="number" name="number_of_residents" />

                <label>Nájemné (kč)</label>
                <input type="number" name="rental" />
                <br />

                <label>Nájemní smlouva</label>
                <input type="file" name="file" />
                <br />

                <input type="submit" value="Registrovat" />
            </form>
        </>
    );
};
export default UserReg;
