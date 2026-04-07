export class ItineraryController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindOpenMapEvent(this.handleOpenMap.bind(this));
        this.view.bindCloseMapEvent(this.handleCloseMap.bind(this));

        this.initApp();
    }

    initApp() {
        const data = this.model.getAll();
        this.view.renderCards(data);
    }

    handleOpenMap(id) {
        const item = this.model.getById(id);

        if (item) {
            this.view.showModal(item);
        }
    }

    handleCloseMap() {
        this.view.hideModal();
    }
}