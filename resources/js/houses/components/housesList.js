import React, { useState } from "react";
import HouseDetail from "./houseDetail";

const HousesList = ({ houses }) => {
    const [filteredCity, setfilteredCity] = useState("");
    let listOfCities = [];
    let uniqueCitiesSelects = [];
    let housesToRender = [];

    const getUniqueCities = () => {
        houses.map(house => listOfCities.push(house.city));
        const uniqueCities = new Set(listOfCities);
        for (let city of uniqueCities) {
            uniqueCitiesSelects.push(<option value={city}>{city}</option>);
        }
    };

    if (filteredCity != "") {
        housesToRender = houses.filter(house => house.city == filteredCity);
    } else {
        housesToRender = houses;
    }

    return (
        <div className="page__main__dash__item i__full">
            <div className="page__main__dash__item__head">
                <h3>Prague</h3>
            </div>
            <div className="page__main__dash__item__body">
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        setfilteredCity(e.target[0].value);
                    }}
                >
                    <select
                        onLoad={getUniqueCities()}
                        name="listofCities"
                        id="listofCities"
                    >
                        {uniqueCitiesSelects}
                    </select>
                    <input type="submit" value="filtruj" />
                </form>
                <button
                    type="submit"
                    onClick={e => {
                        e.preventDefault();
                        setfilteredCity("");
                    }}
                >
                    X
                </button>
                <table>
                    <thead>
                        <tr>
                            <th>Město</th>
                            <th>Ulice</th>
                            <th>Číslo popisné / orientační</th>
                            <th>Přidáno do Hously</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {housesToRender.map(house => {
                            return <HouseDetail house={house} />;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HousesList;
