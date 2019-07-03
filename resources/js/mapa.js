
const listofAdress=["U hajovny 11, 18200, Praha","Václavské náměstí 1, Praha",]


document.addEventListener('DOMContentLoaded', () => {
    console.log("funguje na res")
    const mapa = document.querySelector("#game");

const mapaObsah=()=>{

    const center =SMap.Coords.fromWGS84(14.4676344,50.1281042);
    const map = new SMap(JAK.gel("map"), center, 12);
    map.addDefaultLayer(SMap.DEF_BASE).enable();
    map.addDefaultControls();

    const layer = new SMap.Layer.Marker();
    map.addLayer(layer);
    layer.enable();



    // vytvoreni jednotlivych markerů
    function odpoved(geocoder) {
        const vysledky= geocoder.getResults()[0].results;
        console.log("call", vysledky);
        
        const pozice=vysledky[0].coords;
        const marker = new SMap.Marker(pozice, `marker-${vysledky[0].id}`);
        console.log(marker);
        layer.addMarker(marker);

    }
    // vytvoreni sady markerů z listu adres
    listofAdress.map(element=>{
        new SMap.Geocoder(element, odpoved);
    })
    }
mapa.appendChild(mapaObsah);
}


// new SMap.Geocoder("U hajovny 11, Praha", odpoved);
// new SMap.Geocoder("Václavské náměstí 1, Praha", odpoved);
    
    




)
