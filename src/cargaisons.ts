import { Validation } from "./Model/Validation";

export function cargaisons() {
  const addCargaisonForm = document.getElementById('AddCargaisonForm') as HTMLFormElement;

  addCargaisonForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formControls = addCargaisonForm.querySelectorAll(".form-control") as NodeListOf<HTMLInputElement>;
    const form = new FormData(addCargaisonForm);
    Validation.checkRequireGlobal(formControls);
  })

}