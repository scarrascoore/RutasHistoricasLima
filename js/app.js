import { ItineraryModel } from './models/ItineraryModel.js';
import { ItineraryView } from './views/ItineraryView.js';
import { ItineraryController } from './controllers/ItineraryController.js';

document.addEventListener('DOMContentLoaded', () => {
    new ItineraryController(new ItineraryModel(), new ItineraryView());
});