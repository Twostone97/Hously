import React from "react";
const UserList = ({ residents, users, flats, handleSetDetail, refetchApp }) => {
    return (
        <>
            <div className="page__main__dash__item i__full">
                <div className="page__main__dash__item__head">
                    <h3>Database of Residents</h3>
                </div>
                <div className="page__main__dash__item__body">
                    <ol className="resident__list__container">
                        {residents.map(resident => {
                            return (
                                <li>
                                    <div>
                                        <strong>
                                            {
                                                users[resident.user_id - 1]
                                                    .first_name
                                            }{" "}
                                            {
                                                users[resident.user_id - 1]
                                                    .last_name
                                            }
                                        </strong>
                                    </div>

                                    <div>
                                        {flats.map(flat => {
                                            if (flat.id == resident.flat_id)
                                                return (
                                                    <>
                                                        {"Flat number:" +
                                                            `${flat.number}`}
                                                    </>
                                                );
                                        })}
                                    </div>
                                    <div>
                                        {`Contact: ` +
                                            `${
                                                users[resident.user_id - 1]
                                                    .email
                                            }`}
                                    </div>
                                    <div>
                                        <a
                                            href={`/storage/contract/${
                                                resident.flat_id
                                            }.pdf`}
                                            target="_blank"
                                        >
                                            Nájemní Smlouva
                                        </a>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => {
                                                handleSetDetail(
                                                    resident.user_id
                                                );
                                            }}
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => {
                                                let data = {
                                                    _token: document.querySelector(
                                                        'meta[name="csrf-token"]'
                                                    ).content,
                                                    flat_id: resident.flat_id
                                                };
                                                // console.log(data);
                                                fetch(
                                                    `/su/delete/resident/${
                                                        resident.id
                                                    }`,
                                                    {
                                                        method: "post",
                                                        headers: {
                                                            Accept:
                                                                "application/json",
                                                            "Content-Type":
                                                                "application/json"
                                                        },

                                                        body: JSON.stringify(
                                                            data
                                                        )
                                                    }
                                                )
                                                    .then(response => {
                                                        if (response.ok) {
                                                            toastr["warning"](
                                                                "User deleted!",
                                                                "Success"
                                                            );
                                                        } else {
                                                            toastr["error"](
                                                                "Something went wrong, try again please",
                                                                "Error"
                                                            );
                                                        }
                                                    })
                                                    .finally(() => {
                                                        refetchApp();
                                                    });
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};
export default UserList;
