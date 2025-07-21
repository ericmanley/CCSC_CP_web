window.conference.map = (() => {
    let config;
    let lang;

    let map;

    const setup = (elId) => {
        map = L.map(elId).setView(config.home_coord, config.default_zoom);
    
        L.tileLayer.provider(config.map_provider).addTo(map);
    
        L.easyButton('far fa-star', () => {
            map.flyTo(config.home_coord, config.default_zoom);
        }, lang.focus_conf).addTo(map);
    
        L.control.locate({
            flyTo: true,
            strings: {
                title: lang.focus_me
            }
        }).addTo(map);
    
        // Add pins
        if (config.pins && Array.isArray(config.pins)) {
            config.pins.forEach(pin => {
                const marker = L.marker(pin.coord, {
                    icon: L.icon({
                        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                        iconSize: [25, 41], // size of the icon
                        iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
                        popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
                        shadowSize: [41, 41] // size of the shadow
                    })
                }).addTo(map);

                if (pin.label) {
                    marker.bindPopup(pin.label);
                }
            });
        }
    };

    const init = (c, l) => {
        config = c;
        lang = l;

        const elId = 'map';

        if (document.getElementById(elId)) {
            setup(elId);
        }
    };

    const getMap = () => {
        return map
    };

    return {
        init: init,
        getMap: getMap
    };
})();
