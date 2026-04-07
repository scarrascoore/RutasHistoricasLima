export class ItineraryView {
    constructor() {
        this.listContainer = document.getElementById('itinerary-list');
        this.modalOverlay = document.getElementById('modal-overlay');
        this.modalContentBox = document.getElementById('modal-content-box');
        this.modalTitle = document.getElementById('modal-title');
        this.modalIframe = document.getElementById('modal-iframe');
        this.btnCloseModal = document.getElementById('btn-close-modal');
    }

    renderCards(itineraries) {
        this.listContainer.innerHTML = itineraries.map((item, index) => `
            <div class="scrap-card relative p-8 rounded-sm" data-id="${item.id}">
                <div class="washi-tape ${item.color}"></div>

                <div class="flex justify-between items-start mb-6">
                    <div class="stamp-number text-lg uppercase">${index + 1}</div>
                    <div class="bg-amber-50 p-2 rounded-lg border border-amber-200">
                        <i data-lucide="${item.icon}" class="w-5 h-5 text-amber-900"></i>
                    </div>
                </div>

                <h3 class="museum-name text-2xl text-slate-800 mb-2 uppercase leading-tight">${item.name}</h3>

                <div class="flex gap-2 mb-4">
                    <span class="text-[9px] font-black bg-slate-800 text-white px-2 py-1 rounded uppercase tracking-widest">${item.time}</span>
                    <span class="text-[9px] font-black border-2 border-slate-800 text-slate-800 px-2 py-0.5 rounded uppercase tracking-widest">${item.cost}</span>
                </div>

                <p class="text-sm text-slate-600 mb-6 font-medium leading-relaxed italic">
                    "${item.desc}"
                </p>

                <button class="btn-open-map btn-expander w-full flex items-center justify-center gap-2" data-id="${item.id}">
                    <i data-lucide="map-pin" class="w-4 h-4"></i> VER UBICACIÓN
                </button>
            </div>
        `).join('');

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    bindOpenMapEvent(handler) {
        this.listContainer.addEventListener('click', (event) => {
            const button = event.target.closest('.btn-open-map');

            if (button) {
                const id = parseInt(button.getAttribute('data-id'), 10);
                handler(id);
            }
        });
    }

    bindCloseMapEvent(handler) {
        this.btnCloseModal.addEventListener('click', () => handler());

        this.modalOverlay.addEventListener('click', (event) => {
            if (event.target === this.modalOverlay) {
                handler();
            }
        });

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                handler();
            }
        });
    }

    showModal(museumData) {
        this.modalTitle.textContent = museumData.name;
        this.modalIframe.src = museumData.map;
        this.modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    hideModal() {
        this.modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';

        setTimeout(() => {
            this.modalIframe.src = '';
        }, 300);
    }
}