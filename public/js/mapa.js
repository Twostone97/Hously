const listofAdress = [];

fetch("./map/api")
    .then(response => response.json())

    //prevod dat na spravny tvar
    .then(data => {
        console.log("data", data);
        data.map(element => {
            console.log("element", element);
            const adresa =
                `${element.street}` +
                ` ` +
                `${element.house_number}` +
                `,` +
                `${element.postal}` +
                `,` +
                `${element.city}`;
            listofAdress.push(adresa);
        });

        //**********************************************- */
        //vytvoreni nove mapy
        const center = SMap.Coords.fromWGS84(14.4304, 50.07975);
        const map = new SMap(JAK.gel("map"), center, 11);

        map.addDefaultLayer(SMap.DEF_BASE).enable();
        map.addDefaultControls();

        const layer = new SMap.Layer.Marker();
        map.addLayer(layer);
        layer.enable();
        //*************************************** */

        // vytvoreni jednotlivych markerů
        function odpoved(geocoder) {
            const vysledky = geocoder.getResults()[0].results;

            const pozice = vysledky[0].coords;
            const marker = new SMap.Marker(pozice, `marker-${vysledky[0].id}`);

            layer.addMarker(marker);
        }
        //******************************************** */

        // vytvoreni sady markerů z listu adres
        listofAdress.map(element => {
            new SMap.Geocoder(element, odpoved);
        });
        //********************************* */
    });
