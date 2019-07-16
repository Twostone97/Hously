import React, { useState, useEffect } from "react";
// endpoint /update_(resident_id)_(user_id)

const UserDetail = ({
    handleSetDetail,
    user,
    resident,
    rentcontracts,
    flats,
    refetchApp
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
    let _token = document.querySelector('meta[name="csrf-token"]').content;
    const handleSubmit = e => {
        handleSetDetail(null);
        console.log("file", file);
        e.preventDefault();
        let data = new FormData();
        data.append("_token", _token);
        // data.append("user_id", user_id);
        data.append("flat_id", flat_id);
        data.append("contract_id", contract_id);
        data.append("begining_of_first_rent", begining_of_first_rent);
        data.append("begining_of_current_rent", begining_of_current_rent);
        data.append("end_of_current_rent", end_of_current_rent);

        data.append("rental", rental);
        data.append("email", email);
        data.append("phone_number", phone_number);
        data.append("file", file);
        let file = document.querySelector('input[type="file"]').files[0];

        console.log("data", data);

        fetch(`/update_${resident.id}_${user.id}`, {
            method: "POST",

            body: data
        }).then(() => {
            handleSetDetail(null);
            refetchApp();
        });
    };
    // token

    return (
        <>
            <div className="page__main__dash__item i__full">
                <div className="page__main__dash__item__head">
                    <h3>{`${user.first_name}` + " " + `${user.last_name}`}</h3>
                </div>
                <div className="page__main__dash__item__body">
                    <form
                        className="form__container"
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                        style={{ width: "65%", margin: "0 auto" }}
                    >
                        <div className="form__item">
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
                        </div>

                        <div className="form__item">
                            <label>Rental starts on:</label>
                            <input
                                type="date"
                                name="begining_of_first_rent"
                                onChange={handleBegining_of_first_rent}
                                value={begining_of_first_rent}
                            />
                        </div>
                        <div className="form__item">
                            <label>Rental ends on:</label>
                            <input
                                type="date"
                                name="begining_of_current_rent"
                                onChange={handleBegining_of_current_rent}
                                value={begining_of_current_rent}
                            />
                        </div>
                        <div className="form__item">
                            <label>Contract</label>
                            <select name="contract_id" onChange={changeInput}>
                                {rentcontracts.map(contract => {
                                    return (
                                        <option value={contract.id}>
                                            {`typ: ` + `${contract.name}`}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        {isSmlouvaNaDobuUrcitou && (
                            <>
                                <div className="form__item">
                                    <label>End of current rental period:</label>
                                    <input
                                        type="date"
                                        name="end_of_current_rent"
                                        onChange={handleEnd_of_current_rent}
                                        value={end_of_current_rent}
                                    />
                                    <br />
                                </div>
                            </>
                        )}
                        <div className="form__item">
                            <label>Rent (CZK)</label>
                            <input
                                type="number"
                                name="rental"
                                onChange={handleRental}
                                value={rental}
                            />
                        </div>
                        <div className="form__item">
                            <label>Rental agrement</label>
                            <input
                                type="file"
                                name="file"
                                onChange={handleFile}
                            />
                        </div>
                        <div className="form__item">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleEmail}
                            />
                        </div>
                        <div className="form__item">
                            <label>Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={phone_number}
                                onChange={handlePhone_number}
                            />
                        </div>
                        <button type="submit" className="form__submit">
                            Submit
                        </button>
                    </form>
                    <a
                        href="#"
                        onClick={() => {
                            window.event.preventDefault();
                            handleSetDetail(null);
                        }}
                    >
                        Hide
                    </a>
                </div>
            </div>
        </>
    );
};
export default UserDetail;
