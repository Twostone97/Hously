import React from "react";
const UserListOwner = ({ residents, users, flats }) => {
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
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};
export default UserListOwner;
