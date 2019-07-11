import React from "react";
const UserList = ({ residents, users, flats }) => {
    return (
        <>
            <h4>Databaze obyvatel</h4>
            <ol>
                {residents.map(resident => {
                    return (
                        <li>
                            <div>
                                {`Name: ` +
                                    `${
                                        users[resident.user_id - 1].first_name
                                    }` +
                                    ` ` +
                                    `${users[resident.user_id - 1].last_name}`}
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
                                    `${users[resident.user_id - 1].email}`}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </>
    );
};
export default UserList;
