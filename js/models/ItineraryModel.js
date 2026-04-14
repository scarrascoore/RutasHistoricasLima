export class ItineraryModel {
    constructor() {
        this.itineraries = [
            {
                id: 1,
                name: "Casa de la Literatura",
                cost: "Gratis",
                time: "1 hora",
                icon: "book-open",
                color: "washi-tape",
                desc: "Antigua Estación de Desamparados. Es el punto de partida perfecto para amantes de los libros.",
                coords: [-12.0444446, -77.028765],
                googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-12.0443046,-77.0286810"
            },
            {
                id: 2,
                name: "Catacumbas San Francisco",
                cost: "S/ 20.00",
                time: "1 hora",
                icon: "history",
                color: "washi-blue",
                desc: "Famoso convento con laberintos subterráneos. ¡Toda una aventura bajo la ciudad!",
                coords: [-12.0452978, -77.0274438],
                googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-12.0452978,-77.0274438"
            },
            {
                id: 3,
                name: "Museo Naval Casa Grau",
                cost: "S/ 3.00",
                time: "1 hora",
                icon: "anchor",
                color: "washi-yellow",
                desc: "Residencia histórica del Almirante Miguel Grau. Un testimonio de honor y vida republicana.",
                coords: [-12.0475784, -77.0333729],
                googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-12.0475784,-77.0333729"
            },
            {
                id: 4,
                name: "Museo Municipal Prehispánico",
                cost: "Gratis",
                time: "30 min",
                icon: "map",
                color: "washi-tape",
                desc: "Colección única de piezas prehispánicas en pleno corazón del centro.",
                coords: [-12.0451718, -77.0280850],
                googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-12.0451718,-77.0280850"
            },
            {
                id: 5,
                name: "Bodega y Quadra",
                cost: "S/ 4.00",
                time: "30 min",
                icon: "search",
                color: "washi-blue",
                desc: "Increíble museo de sitio que muestra los cimientos de la Lima colonial.",
                coords: [-12.0448312, -77.0286776],
                googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-12.0448312,-77.0286776"
            },
            {
                id: 6,
                name: "Basílica La Merced",
                cost: "Gratis",
                time: "30 min",
                icon: "church",
                color: "washi-yellow",
                desc: "Arquitectura barroca churrigueresca. ¡La fachada tallada es impresionante!",
                coords: [-12.0482007, -77.0327782]
            },
            {
                id: 7,
                name: "Casa O'Higgins",
                cost: "Gratis",
                time: "30 min",
                icon: "home",
                color: "washi-tape",
                desc: "Casona restaurada por la PUCP. Centro de cultura y arte en el centro.",
                coords: [-12.0476222, -77.0325450]
            },
            {
                id: 8,
                name: "Convento Santo Domingo",
                cost: "Gratis",
                time: "30 min",
                icon: "flower",
                color: "washi-blue",
                desc: "Sus claustros y azulejos sevillanos son de los más bellos de América.",
                coords: [-12.0441256, -77.0314728]
            },
            {
                id: 9,
                name: "Galería Pancho Fierro",
                cost: "Gratis",
                time: "30 min",
                icon: "palette",
                color: "washi-yellow",
                desc: "Finalizamos el recorrido con el arte costumbrista que dio color a Lima.",
                coords: [-12.0454581, -77.0311831]
            }
        ];
    }

    getAll() {
        return this.itineraries;
    }

    getById(id) {
        return this.itineraries.find(item => item.id === id);
    }
}