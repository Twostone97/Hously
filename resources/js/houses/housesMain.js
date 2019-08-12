import React, { useEffect, useState } from "react";
import HousesList from "./components/housesList.js";

export default function housesMain({ match }) {
    const [houseData, sethouseData] = useState(null);

    useEffect(() => {
        fetch("/react-houses-api")
            .then(response => response.json())
            .then(data => sethouseData(data));
    }, []);

    return houseData == null ? (
        <section className="page__main bg__gradient-light">
            <div className="page__main__promo">
                <h1>Loading...</h1>
            </div>
        </section>
    ) : (
        <section className="page__main bg__gradient-light">
            <div className="page__main__promo">
                <h1>This is list of involved houses</h1>
            </div>
            <div className="page__main__dash dash__houses">
                <HousesList houses={houseData.allBuildings} match={match} />
            </div>
        </section>
    );
}
