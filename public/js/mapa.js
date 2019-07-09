// const listofAdress = [];
// const listofId = [];
const vstupniData = {
    listofAdres: [],
    listofId: []
};
fetch("./map/api")
    .then(response => response.json())

    //prevod dat na spravny tvar
    .then(data => {
        // console.log("data", data);
        data.map(element => {
            // console.log("element", element);
            const adresa =
                `${element.street}` +
                ` ` +
                `${element.house_number}` +
                `,` +
                `${element.postal}` +
                `,` +
                `${element.city}`;

            // listofAdress.push(adresa);
            // listofId.push(element.id);
            vstupniData.listofAdres.push(adresa);
            vstupniData.listofId.push(element.id);
        });
        console.log("vstupni data", vstupniData);
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

            const znacka = JAK.mel("div");
            const obrazek = JAK.mel(
                "img",
                {
                    src: "../img/hously-logo-small.png"
                },
                {
                    width: "25px",
                    height: "25px"
                }
            );
            znacka.appendChild(obrazek);
            const card = new SMap.Card();
            console.log("geocoder", geocoder._options.card_id);
            // console.log("list of id", card_id);
            card.getHeader().innerHTML = `<div class=visit_card>
                                        <img src="../img/hously-logo-small.png">
                                        <div class=card_title>Hously s.r.o</div>
                                        </div>`;

            card.getBody().innerHTML = geocoder._query;
            card.getFooter().innerHTML = `<a href src="/building_id${
                geocoder._options.card_id
            }">home</a>`;
            const marker = new SMap.Marker(pozice, null, { url: znacka });
            marker.decorate(SMap.Marker.Feature.Card, card);

            layer.addMarker(marker);
        }
        //******************************************** */

        // vytvoreni sady markerů z listu adres
        for (let i = 0; i < vstupniData.listofAdres.length; i++) {
            console.log("hello");
            new SMap.Geocoder(vstupniData.listofAdres[i], odpoved, {
                card_id: vstupniData.listofId[i]
            });
        }

        // vstupniData.map(element => {
        //     new SMap.Geocoder(element.listofAdres, odpoved, {
        //         card_id: element.listofId
        //     });
        // });
        //********************************* */
    });
