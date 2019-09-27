import React, { useContext, useEffect, useState } from "react";
import DashboardContext from "../context/dashboard/DashboardContext";

const Technicalinfo = () => {
    const dashboardContext = useContext(DashboardContext);
    const {
        flats,
        this_building,
        residents,
        floors,
        current_user
    } = dashboardContext.data;

    const [showFloors, setshowFloors] = useState(false);
    const [showFlats, setshowFlats] = useState(0);

    let shownFloor = 0;

    if (dashboardContext.loading || dashboardContext.errorFetch) {
        return (
            <>
                <div className="dashboard__sections__box subpage">
                    <div className="dashboard__sections__box__head">
                        <h2>Základní technické údaje o budově</h2>
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
                            >
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
                        </table>
                    </div>
                </div>
            </>
        );
    } else {
        const current_resident = residents.filter(resident => {
            return resident.user_id == current_user.id;
        });

        const our_flats = flats.filter(flat => {
            return flat.building_id == this_building.id;
        });

        const our_floors = floors.filter(floor => {
            return floor.building_id == this_building.id;
        });

        return (
            <>
                <div className="dashboard__sections__box subpage">
                    <div className="dashboard__sections__box__head">
                        <h2>Základní technické údaje</h2>
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
                                <td>
                                    {showFloors ? (
                                        <table className="techinfo scroll">
                                            <tr>
                                                <td>
                                                    <button
                                                        onClick={() => {
                                                            setshowFloors(
                                                                false
                                                            );
                                                        }}
                                                    >
                                                        {"< Patra"}
                                                    </button>
                                                </td>
                                            </tr>
                                            {our_floors.map(floor => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                Označení patra:
                                                            </td>
                                                            <td>
                                                                {floor.label}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Typ patra:</td>
                                                            <td>
                                                                {floor.type}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Jednotky na
                                                                patře:
                                                            </td>
                                                            <td>
                                                                {showFlats ==
                                                                floor.id ? (
                                                                    <table className="techinfo scroll">
                                                                        <tr>
                                                                            <td>
                                                                                <button
                                                                                    onClick={() => {
                                                                                        setshowFlats(
                                                                                            0
                                                                                        );
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        "< Jednotky"
                                                                                    }
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                        {our_flats.map(
                                                                            flat => {
                                                                                if (
                                                                                    flat.floor_id ==
                                                                                    floor.id
                                                                                ) {
                                                                                    return (
                                                                                        <>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    Označení
                                                                                                    jednotky
                                                                                                </td>
                                                                                                <td>
                                                                                                    {
                                                                                                        flat.label
                                                                                                    }
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    Typ
                                                                                                    jednotky
                                                                                                </td>
                                                                                                <td>
                                                                                                    {
                                                                                                        flat.type
                                                                                                    }
                                                                                                </td>
                                                                                            </tr>
                                                                                        </>
                                                                                    );
                                                                                }
                                                                            }
                                                                        )}
                                                                    </table>
                                                                ) : (
                                                                    <button
                                                                        onClick={() => {
                                                                            shownFloor =
                                                                                floor.id;
                                                                            setshowFlats(
                                                                                floor.id
                                                                            );
                                                                        }}
                                                                    >
                                                                        {
                                                                            "Jednotky >"
                                                                        }
                                                                    </button>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    </>
                                                );
                                            })}
                                        </table>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                setshowFloors(true);
                                            }}
                                        >
                                            {"Patra >"}
                                        </button>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Výtah:</td>
                                <td>
                                    {this_building.elevator == true
                                        ? `Tato budova má ${this_building.elevator_q} výtah(ů)`
                                        : "nemá výtah"}
                                </td>
                            </tr>
                            <tr>
                                <td>Vytápění kategorie:</td>
                                <td>{this_building.heating_type}</td>
                            </tr>
                            <tr>
                                <td>Vytápění samostatné měření:</td>
                                <td>
                                    {this_building.heating_measurement
                                        ? `Má ${this_building.heating_measurement_q} měření`
                                        : "Nemá"}
                                </td>
                            </tr>
                            <tr>
                                <td>Studená voda samostatné měření:</td>
                                <td>
                                    {this_building.cold_water_measurement
                                        ? `Má ${this_building.cold_water_measurement_q} měření`
                                        : "Nemá"}
                                </td>
                            </tr>
                            <tr>
                                <td>Studená voda samostatné měření:</td>
                                <td>
                                    {this_building.warm_water_measurement
                                        ? `Má ${this_building.warm_water_measurement_q} měření`
                                        : "Nemá"}
                                </td>
                            </tr>
                            <tr>
                                <td>Elektřina samostatné měření:</td>
                                <td>
                                    {this_building.electricity_measurement
                                        ? `Má ${this_building.electricity_measurement_q} měření`
                                        : "Nemá"}
                                </td>
                            </tr>
                            <tr>
                                <td>Plyn samostatné měření:</td>
                                <td>
                                    {this_building.gas_measurement
                                        ? `Má ${this_building.gas_measurement_q} měření`
                                        : "Nemá"}
                                </td>
                            </tr>
                            <tr>
                                <td>Telefoní přípojka</td>
                                <td>{this_building.phone_wire}</td>
                            </tr>
                            <tr>
                                <td>Společná anténa</td>
                                <td>{this_building.antena}</td>
                            </tr>
                            <tr>
                                <td>Datová přípojka</td>
                                <td>{this_building.data}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </>
        );
    }
};

export default Technicalinfo;
