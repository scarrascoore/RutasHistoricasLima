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
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3901.905634568631!2d-77.03072212406834!3d-12.04423454245592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8ca31950001%3A0xa193796d39691924!2sCasa%20de%20la%20Literatura%20Peruana!5e0!3m2!1ses-419!2spe!4v1710000000000"
            },
            {
                id: 2,
                name: "Catacumbas San Francisco",
                cost: "S/ 20.00",
                time: "1 hora",
                icon: "history",
                color: "washi-blue",
                desc: "Famoso convento con laberintos subterráneos. ¡Toda una aventura bajo la ciudad!",
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3901.895393043834!2d-77.0292850240683!3d-12.04523454244192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b746815339%3A0x6b497b778732e650!2sConvento%20de%20San%20Francisco!5e0!3m2!1ses-419!2spe!4v1710000000001"
            },
            {
                id: 3,
                name: "Museo Naval Casa Grau",
                cost: "S/ 3.00",
                time: "1 hora",
                icon: "anchor",
                color: "washi-yellow",
                desc: "Residencia histórica del Almirante Miguel Grau. Un testimonio de honor y vida republicana.",
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3901.861783043834!2d-77.0341140240683!3d-12.04751454239592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c67c51965f%3A0x8670a4a82173f4b4!2sMuseo%20Naval%20Casa%20Grau!5e0!3m2!1ses-419!2spe!4v1710000000002"
            },
            {
                id: 4,
                name: "Museo Municipal Prehispánico",
                cost: "Gratis",
                time: "30 min",
                icon: "map",
                color: "washi-tape",
                desc: "Colección única de piezas prehispánicas en pleno corazón del centro.",
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3901.905634568631!2d-77.03272212406834!3d-12.04413454245592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8ca31950001%3A0x6b497b778732e650!2sMuseo%20Municipal%20Prehisp%C3%A1nico!5e0!3m2!1ses-419!2spe!4v1710000000003"
            },
            {
                id: 5,
                name: "Bodega y Quadra",
                cost: "S/ 4.00",
                time: "30 min",
                icon: "search",
                color: "washi-blue",
                desc: "Increíble museo de sitio que muestra los cimientos de la Lima colonial.",
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3901.905634568631!2d-77.03112212406834!3d-12.04423454245592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b66804a589%3A0x7d6f6e80b1e4f4b!2sMuseo%20de%20Sitio%20Bodega%20y%20Quadra!5e0!3m2!1ses-419!2spe!4v1710000000004"
            },
            {
                id: 6,
                name: "Basílica La Merced",
                cost: "Gratis",
                time: "30 min",
                icon: "church",
                color: "washi-yellow",
                desc: "Arquitectura barroca churrigueresca. ¡La fachada tallada es impresionante!",
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3901.851783043834!2d-77.0347140240683!3d-12.04811454239592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c6a0c00001%3A0x7d6f6e80b1e4f4b!2sBas%C3%ADlica%20y%20Convento%20de%20Nuestra%20Se%C3%B1ora%20de%20la%20Merced!5e0!3m2!1ses-419!2spe!4v1710000000005"
            },
            {
                id: 7,
                name: "Casa O'Higgins",
                cost: "Gratis",
                time: "30 min",
                icon: "home",
                color: "washi-tape",
                desc: "Casona restaurada por la PUCP. Centro de cultura y arte en el centro.",
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3901.841783043834!2d-77.0341140240683!3d-12.04891454239592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c67c51965f%3A0x8670a4a82173f4b4!2sCasa%20O'Higgins!5e0!3m2!1ses-419!2spe!4v1710000000006"
            },
            {
                id: 8,
                name: "Convento Santo Domingo",
                cost: "Gratis",
                time: "30 min",
                icon: "flower",
                color: "washi-blue",
                desc: "Sus claustros y azulejos sevillanos son de los más bellos de América.",
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3901.905634568631!2d-77.03372212406834!3d-12.04453454245592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8ca31950001%3A0x6b497b778732e650!2sBas%C3%ADlica%20y%20Convento%20de%20Santo%20Domingo!5e0!3m2!1ses-419!2spe!4v1710000000007"
            },
            {
                id: 9,
                name: "Galería Pancho Fierro",
                cost: "Gratis",
                time: "30 min",
                icon: "palette",
                color: "washi-yellow",
                desc: "Finalizamos el recorrido con el arte costumbrista que dio color a Lima.",
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3901.905634568631!2d-77.03272212406834!3d-12.04473454245592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8ca31950001%3A0x6b497b778732e650!2sGaler%C3%ADa%20Pancho%20Fierro!5e0!3m2!1ses-419!2spe!4v1710000000008"
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