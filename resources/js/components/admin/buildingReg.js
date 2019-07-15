import React from "react";
const BuildingReg = (data, owners, users, flats, residents) => {
    return (
        <>
            <div className="page__main__dash__item i__mid">
                <div className="page__main__dash__item__head">
                    <h3>Edit building info</h3>
                </div>
                <div className="page__main__dash__item__body">
                    <form
                        className="form__container"
                        action="/building"
                        method="post"
                        encType="multipart/form-data"
                    >
                        <div className="form__item">
                            <label>City:</label>
                            <input
                                type="text"
                                name="city"
                                id="name"
                                value={data.city}
                            />
                        </div>
                        <div className="form__item">
                            <label>Street:</label>
                            <input type="text" name="street" id="street" />
                        </div>
                        <div className="form__item">
                            <label>House number:</label>
                            <input
                                type="number"
                                name="house_number"
                                id="house_number"
                            />
                        </div>
                        <div className="form__item">
                            <label>Post Code:</label>
                            <input type="number" name="postal" id="postal" />
                        </div>
                        <div className="form__item">
                            <label>Construction completed:</label>
                            <input type="date" name="construction_date" />
                        </div>
                        <div className="form__item">
                            <label>Floors above the ground lvl:</label>
                            <input type="number" name="floors_above_ground" />
                        </div>
                        <div className="form__item">
                            <label>Floors below the ground lvl:</label>
                            <input type="number" name="floors_bellow_ground" />
                        </div>
                        <div className="form__item">
                            <label>Heating</label>
                            <input type="checkbox" name="heating" />
                        </div>
                        <div className="form__item">
                            <label>Gas</label>
                            <input type="checkbox" name="gas" />
                        </div>
                        <div className="form__item">
                            <label>Elevator(s)</label>
                            <input type="number" name="elevator" />
                        </div>
                        <div className="form__item">
                            <label>House Rules</label>
                            <input type="file" name="file" />
                        </div>

                        <button type="submit" className="form__submit">
                            Edit
                        </button>
                    </form>
                    <br />
                </div>
            </div>
        </>
    );
};
export default BuildingReg;
