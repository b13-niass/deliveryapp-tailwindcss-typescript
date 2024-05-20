import { Validation } from "./Model/Validation";
export function cargaisons() {
    const addCargaisonForm = document.getElementById('AddCargaisonForm');
    addCargaisonForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let formControls = addCargaisonForm.querySelectorAll(".form-control");
        const form = new FormData(addCargaisonForm);
        Validation.checkRequireGlobal(formControls);
    });
}
