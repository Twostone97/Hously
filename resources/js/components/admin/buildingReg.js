import React from "react";
const BuildingReg = () => {
    return (
        <>
            <h4>Registrace budov</h4>
            <form
                action="/building"
                method="post"
                encType="multipart/form-data"
            >
                <label>Město</label>
                <input type="text" name="city" />
                <br />

                <label>Ulice</label>
                <input type="text" name="street" />
                <br />

                <label>Číslo popisné</label>
                <input type="number" name="house_number" />
                <br />

                <label>Poštovní směrovací číslo</label>
                <input type="number" name="postal" />
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

                <label>Pravidla domu</label>
                <input type="file" name="file" />
                <br />

                <input type="submit" value="Registrovat" />
            </form>
            <br />
        </>
    );
};
export default BuildingReg;
