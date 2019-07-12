import React, { useState, useEffect } from "react";

const UserReg = ({ apidata }) => {
    // list of states*****************
    const [isSmlouvaNaDobuUrcitou, setisSmlouvaNaDobuUrcitou] = useState(false);
    const [user_id, setUser_id] = useState(null);
    const [flat_id, setFlat_id] = useState(null);
    const [begining_of_first_rent, setBegining_of_first_rent] = useState(null);
    const [begining_of_current_rent, setBegining_of_current_rent] = useState(
        begining_of_first_rent
    );
    const [end_of_current_rent, SetEnd_of_current_rent] = useState(
        begining_of_first_rent
    );
    const [number_of_residents, SetNumber_of_residents] = useState(0);
    const [rental, setRental] = useState(0);
    const [file, setFile] = useState(null);
    const [contract_id, setContract_id] = useState(apidata.rentcontracts[0].id);

    // ******************************-
    // nastaveni states

    const changeInput = e => {
        setContract_id(e.target.value);
        setisSmlouvaNaDobuUrcitou(!isSmlouvaNaDobuUrcitou);
    };
    const handleUser_id = e => {
        setUser_id(e.target.value);
    };
    const handleFlat_id = e => {
        setFlat_id(e.target.value);
    };
    const handleBegining_of_first_rent = e => {
        setBegining_of_first_rent(e.target.value);
        !begining_of_current_rent &&
            setBegining_of_current_rent(e.target.value);
    };
    const handleBegining_of_current_rent = e => {
        setBegining_of_current_rent(e.target.value);
    };
    const handleEnd_of_current_rent = e => {
        SetEnd_of_current_rent(e.target.value);
    };
    const handleNumber_of_residents = e => {
        SetNumber_of_residents(e.target.value);
    };
    const handleRental = e => {
        setRental(e.target.value);
    };
    const handleFile = e => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    };
    console.log("date", begining_of_first_rent);
    // ***********************************************

    const handleSubmit = e => {
        e.preventDefault();
        let data = new FormData();
        data.append("_token", _token);
        data.append("user_id", user_id);
        data.append("flat_id", flat_id);
        data.append("contract_id", contract_id);
        data.append("building_id", apidata.this_building.id);
        data.append("begining_of_first_rent", begining_of_first_rent);
        data.append("begining_of_current_rent", begining_of_current_rent);
        data.append("end_of_current_rent", end_of_current_rent);
        data.append("number_of_residents", number_of_residents);
        data.append("rental", rental);

        data.append("file", file);

        // const data = {
        //     _token,
        //     user_id,
        //     flat_id,
        //     begining_of_first_rent,
        //     begining_of_current_rent,
        //     end_of_current_rent,
        //     number_of_residents,
        //     rental,
        //     file
        // };

        console.log("body", data.values());

        fetch("/resident", {
            method: "post",
            // headers: {
            //     "Content-Type": "application/json"
            //     // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
            body: data
        });
    };
    // token
    const metaList = document.querySelectorAll("meta");
    let _token = "";
    metaList.forEach(meta => {
        if (meta.name == "csrf-token") {
            _token = meta.content;
        }
    });
    // ***************************-
    return (
        <>
            <h4>Registrace obyvatel</h4>

            <form
                // action="/resident"
                // method="post"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
            >
                {/* <input
                    type="hidden"
                    name="_token"
                    onChange={handleToken}
                    value={_token}
                /> */}
                <label>Name</label>
                <select name="user_id" onChange={handleUser_id} value={user_id}>
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
                <label>Flat</label>
                <select name="flat_id" onChange={handleFlat_id} value={flat_id}>
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
                {/* <input
                    type="hidden"
                    name="building_id"
                    value={apidata.this_building.id}
                /> */}

                <label>Začátek prvního nájemního období</label>
                <input
                    type="date"
                    name="begining_of_first_rent"
                    onChange={handleBegining_of_first_rent}
                    value={begining_of_first_rent}
                />
                <br />

                <label>Začátek aktuálního nájemního období</label>
                <input
                    type="date"
                    name="begining_of_current_rent"
                    onChange={handleBegining_of_current_rent}
                    value={begining_of_current_rent}
                />
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
                        <input
                            type="date"
                            name="end_of_current_rent"
                            onChange={handleEnd_of_current_rent}
                            value={end_of_current_rent}
                        />
                        <br />
                    </>
                )}

                <label>Počet osob</label>
                <input
                    type="number"
                    name="number_of_residents"
                    onChange={handleNumber_of_residents}
                    value={number_of_residents}
                />

                <label>Nájemné (kč)</label>
                <input
                    type="number"
                    name="rental"
                    onChange={handleRental}
                    value={rental}
                />
                <br />

                <label>Nájemní smlouva</label>
                <input type="file" name="file" onChange={handleFile} />
                <br />

                <input type="submit" value="Registrovat" />
            </form>
        </>
    );
};
export default UserReg;
