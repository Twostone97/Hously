import React from "react";
const BuildingReg = () => {
    return (
        <>
            <div className="page__main__dash__item i__full">
                <div className="page__main__dash__item__head">
                    <h3>Registrace budov</h3>
                </div>
                <div className="page__main__dash__item__body">
                    <form
                        action="/building"
                        method="post"
                        encType="multipart/form-data"
                    >
                        <label forHtml="city">
                            City:
                            <input type="text" name="city" id="name" />
                        </label>
                        <br />
                        <label forHtml="street">
                            Street
                            <input type="text" name="street" id="street" />
                        </label>
                        <br />
                        <label forHtml="house_number">
                            House number
                            <input
                                type="number"
                                name="house_number"
                                id="house_number"
                            />
                        </label>
                        <br />
                        <label forHtml="postal">
                            Post Code
                            <input type="number" name="postal" id="postal" />
                        </label>
                        <br />
                        <label>Datum výstavby</label>
                        <input type="date" name="construction_date" />
                        <br />

                        <label>Počet nadzemních pater</label>
                        <input type="number" name="floors_above_ground" />
                        <br />

                        <label>Počet nadzemních pater</label>
                        <input type="number" name="floors_bellow_ground" />
                        <br />

                        <label>Vytápění</label>
                        <input type="checkbox" name="heating" />
                        <br />

                        <label>Plyn</label>
                        <input type="checkbox" name="gas" />
                        <br />

                        <label>Výtah(počet)</label>
                        <input type="number" name="elevator" />
                        <br />

                        <label>Textový soubor pravidel domu</label>
                        <input type="file" name="file" />
                        <br />

<<<<<<< HEAD
                <label>Vytápění</label>
                <input type="checkbox" name="heating" />
                <br />

                <label>Plyn</label>
                <input type="checkbox" name="gas" />
                <br />

                <label>Výtah(počet)</label>
                <input type="number" name="elevator" />
                <br />

                <label>Pravidla domu</label>
                <input type="file" name="file" />
                <br />

                <input type="submit" value="Registrovat" />
            </form>
            <br />
=======
                        <input type="submit" value="Registrovat" />
                    </form>
                    <br />
                </div>
            </div>
>>>>>>> feat/jakub
        </>
    );
};
export default BuildingReg;
