import { ItineraryModel } from './models/itineraryModel.js';
import { ItineraryView } from './views/ItineraryView.js';
import { ItineraryController } from './controllers/ItineraryController.js';

document.addEventListener('DOMContentLoaded', () => {
    new ItineraryController(new ItineraryModel(), new ItineraryView());
});