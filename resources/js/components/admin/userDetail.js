import React, { useState, useEffect } from "react";
// endpoint /update_(resident_id)_(user_id)
const UserDetail = ({
    handleSetDetail,
    user,
    resident,
    rentcontracts,
    flats
}) => {
    // list of states****************

    resident = resident[0];

    console.log("user", user);
    const [isSmlouvaNaDobuUrcitou, setisSmlouvaNaDobuUrcitou] = useState(false);

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
    const [email, setEmail] = useState(user.email);
    const [phone_number, setPhone_number] = useState(user.phone_number);

    // ******************************-
    // nastaveni states

    const changeInput = e => {
        setContract_id(e.target.value);
        setisSmlouvaNaDobuUrcitou(!isSmlouvaNaDobuUrcitou);
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

    const handleRental = e => {
        setRental(e.target.value);
    };
    const handleEmail = e => {
        setEmail(e.target.value);
    };
    const handlePhone_number = e => {
        setPhone_number(e.target.value);
    };

    const handleFile = e => {
        setFile(e.target.files[0]);
    };

    // ***********************************************

    const handleSubmit = e => {
        SetDetail(null);
        console.log("submit probehne");
        e.preventDefault();
        const data = {
            _token,
            flat_id,
            begining_of_first_rent,
            begining_of_current_rent,
            end_of_current_rent,
            contract_id,
            rental,
            email,
            phone_number,
            file
        };

        fetch(`/update_${resident.id}_${user.id}`, {
            method: "post",

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
                    >
                        {flats.map(flat => {
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
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmail}
                    />

                    <br />
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={phone_number}
                        onChange={handlePhone_number}
                    />

                    <br />

                    <input type="submit" value="submit" />
                </form>
            </div>
        </>
    );
};
export default UserDetail;
