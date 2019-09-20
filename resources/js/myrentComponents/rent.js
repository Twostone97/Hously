import React, { useContext, useEffect } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";

const Rent = () => {
    const dashboardContext = useContext(DashboardContext);
    const {
        flats,
        this_building,
        residents,
        floors,
        current_user
    } = dashboardContext.data;

    if (dashboardContext.loading || dashboardContext.errorFetch) {
        return (
            <>
                <div className="dashboard__sections__box subpage">
                    <div className="dashboard__sections__box__head">
                        <h2>Předmět nájmu</h2>
                    </div>
                    <div
                        className="dashboard__sections__box__body subpage scrollable"
                        style={{ height: "80vh" }}
                    >
                        <table>
                            <tr>
                                <td>Ulice, číslo popisné / orientační:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>PSČ, Město:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Podlaží:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Číslo jednotky:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Označení jednotky:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Plocha jednotky:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Účel jednotky:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Dispozice jednotky:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Počet místností:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Balkon:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Vytápění:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Studená voda:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Teplá voda:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Elektřina:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Plyn:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Datová přípojka:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Nájem:</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </>
        );
    } else {
        const current_resident = residents.filter(resident => {
            return resident.user_id == current_user.id;
        });

        let current_flat = flats.filter(flat => {
            return flat.id == current_resident[0].flat_id;
        });

        let current_floor = floors.filter(floor => {
            return floor.id == current_flat[0].floor_id;
        });

        return (
            <>
                <div className="dashboard__sections__box subpage">
                    <div className="dashboard__sections__box__head">
                        <h2>Předmět nájmu</h2>
                    </div>
                    <div
                        className="dashboard__sections__box__body subpage scrollable"
                        style={{ height: "80vh" }}
                    >
                        <table className="pnajmu">
                            <tr>
                                <td>Ulice, číslo popisné / orientační:</td>
                                <td>{`${this_building.street}, ${this_building.house_number} / ${this_building.house_number_orient}`}</td>
                            </tr>
                            <tr>
                                <td>PSČ, Město:</td>
                                <td>{this_building.city}</td>
                            </tr>
                            <tr>
                                <td>Podlaží:</td>
                                <td>{current_floor[0].label}</td>
                            </tr>
                            <tr>
                                <td>Číslo jednotky:</td>
                                <td>{current_flat[0].label}</td>
                            </tr>
                            <tr>
                                <td>Označení jednotky:</td>
                                <td>{current_flat[0].label}</td>
                            </tr>
                            <tr>
                                <td>Plocha jednotky:</td>
                                <td>{current_flat[0].size}</td>
                            </tr>
                            <tr>
                                <td>Účel jednotky:</td>
                                <td>{current_flat[0].type}</td>
                            </tr>
                            <tr>
                                <td>Dispozice jednotky:</td>
                                <td>{current_flat[0].dispozition}</td>
                            </tr>
                            <tr>
                                <td>Počet místností:</td>
                                <td>{current_flat[0].rooms}</td>
                            </tr>
                            <tr>
                                <td>Balkon:</td>
                                <td>
                                    {current_flat[0].balcony == true
                                        ? current_flat[0].balcony_area + " m2"
                                        : "nemá balkon"}
                                </td>
                            </tr>
                            <tr>
                                <td>Terasa:</td>
                                <td>
                                    {current_flat[0].terrace == true
                                        ? current_flat[0].terrace_area + " m2"
                                        : "nemá terasu"}
                                </td>
                            </tr>
                            <tr>
                                <td>Vytápění kategorie:</td>
                                <td>{current_flat[0].heating_type}</td>
                            </tr>
                            <tr>
                                <td>Vytápění samostatné měření:</td>
                                <td>{current_flat[0].heating_measurement}</td>
                            </tr>
                            <tr>
                                <td>Studená voda samostatné měření:</td>
                                <td>
                                    {current_flat[0].cold_water_measurement}
                                </td>
                            </tr>
                            <tr>
                                <td>Studená voda samostatné měření:</td>
                                <td>
                                    {current_flat[0].warm_water_measurement}
                                </td>
                            </tr>
                            <tr>
                                <td>Elektřina samostatné měření:</td>
                                <td>
                                    {
                                        current_flat[0]
                                            .electricity_unit_measurement
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>Plyn samostatné měření:</td>
                                <td>{current_flat[0].gas_measurement}</td>
                            </tr>
                            <tr>
                                <td>Telefoní přípojka</td>
                                <td>{current_flat[0].phone_wire}</td>
                            </tr>
                            <tr>
                                <td>Společná anténa</td>
                                <td>{current_flat[0].antena}</td>
                            </tr>
                            <tr>
                                <td>Datová přípojka</td>
                                <td>{current_flat[0].data}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </>
        );
    }
};

export default Rent;
