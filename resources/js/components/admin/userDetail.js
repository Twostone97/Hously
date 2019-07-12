import React, { useState, useEffect } from "react";
// endpoint /update_(resident_id)_(user_id)
const UserDetail = ({ handleSetDetail, user, resident, rentcontracts }) => {
    // list of states****************
    resident = resident[0];
    console.log("resident", resident);
    console.log("user", user);
    const [isSmlouvaNaDobuUrcitou, setisSmlouvaNaDobuUrcitou] = useState(false);
    const [user_id, setUser_id] = useState(user.id);
    const [flat_id, setFlat_id] = useState(resident.flat_id);
    const [begining_of_first_rent, setBegining_of_first_rent] = useState(
        resident.begining_of_first_rent
    );
    const [begining_of_current_rent, setBegining_of_current_rent] = useState(
        resident.begining_of_current_rent
    );
    const [end_of_current_rent, SetEnd_of_current_rent] = useState(
        resident.end_of_current_rent
    );

    const [rental, setRental] = useState(resident.rental);
    const [file, setFile] = useState(resident.file);
    const [contract_id, setContract_id] = useState(resident.contract_id);

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
        setFile(e.target.files[0]);
    };

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

    return (
        <>
            <div className="kontrolni div pro userdetail">
                <div>{`${user.first_name}` + " " + `${user.last_name}`}</div>
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <label>Flat</label>
                    <select
                        name="flat_id"
                        onChange={handleFlat_id}
                        value={flat_id}
                    />
                    {/* rozpracovat flat_id /dotáhnout z building info */}
                    <br />

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
                        {rentcontracts.map(contract => {
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

                    {/* <label>Počet osob</label>
                <input
                    type="number"
                    name="number_of_residents"
                    onChange={handleNumber_of_residents}
                    value={number_of_residents}
                /> */}

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
                    <div>New file automatically rewrite the old one.</div>
                    <br />

                    <input
                        type="submit"
                        value="submit"
                        onClick={() => {
                            handleSetDetail(null);
                        }}
                    />
                </form>
            </div>
        </>
    );
};
export default UserDetail;
