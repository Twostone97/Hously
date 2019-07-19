const vstupniData = {
    listofAdres: [],
    listofId: []
};
fetch("./map/api")
    .then(response => response.json())

    //prevod dat na spravny tvar
    .then(data => {
        data.map(element => {
            const adresa =
                `${element.street}` +
                ` ` +
                `${element.house_number}` +
                `,` +
                `${element.postal}` +
                `,` +
                `${element.city}`;

            vstupniData.listofAdres.push(adresa);
            vstupniData.listofId.push(element.id);
        });

        //**********************************************- */
        //vytvoreni nove mapy
        const center = SMap.Coords.fromWGS84(14.4304, 50.07975);
        const map = new SMap(JAK.gel("map"), center, 11, {
            height: "50vh",
            width: "100vw"
        });

        map.addDefaultLayer(SMap.DEF_BASE).enable();
        map.addDefaultControls();

        const layer = new SMap.Layer.Marker();
        map.addLayer(layer);
        layer.enable();
        //*************************************** */
        // vytvoreni sady markerů z listu adres
        for (let i = 0; i < vstupniData.listofAdres.length; i++) {
            console.log("hello");
            new SMap.Geocoder(vstupniData.listofAdres[i], odpoved, {
                card_id: vstupniData.listofId[i]
            });
        }
        // vytvoreni jednotlivych markerů

        function odpoved(geocoder) {
            const vysledky = geocoder.getResults()[0].results;

            const pozice = vysledky[0].coords;

            const znacka = JAK.mel("div");
            const obrazek = JAK.mel(
                "img",
                {
                    src: "../img/hously-logo-small.png"
                },
                {
                    width: "35px",
                    height: "35px"
                }
            );
            znacka.appendChild(obrazek);
            const card = new SMap.Card();

            //rozparsování adresy z geocoderu
            let streetPattern = /[^,]+/gim;
            let postalPattern = /\d{5}/gim;
            let cityPattern = /\w+$/gim;
            let street = streetPattern.exec(geocoder._query);
            let postal = postalPattern.exec(geocoder._query);
            let city = cityPattern.exec(geocoder._query);
            //********************************* */
            
            card.getHeader().innerHTML = `
            <div style="display: flex;justify-content:center">
            <img src="../img/hously-logo-small.png" >
            </div>`;

            card.getBody().innerHTML =
                `
                <div>` +
                `${street}` +
                `</div>
                <div>` +
                `${city}` +
                `</div>
                <div>` +
                `${postal}` +
                `</div>
                       `;

            card.getFooter().innerHTML = `<a href="/houses#${
                geocoder._options.card_id
            }" src="/building_id${
                geocoder._options.card_id
            }">List of involved houses</a>`;

            let nadpis = `${street}` + `\n` + `${city}` + `\n` + `${postal}`;
            const marker = new SMap.Marker(pozice, null, {
                url: znacka,
                title: nadpis
            });
            marker.decorate(SMap.Marker.Feature.Card, card);

            layer.addMarker(marker);
        }
        //******************************************** */
    });
