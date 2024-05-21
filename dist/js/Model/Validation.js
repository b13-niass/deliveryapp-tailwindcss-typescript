export class Validation {
    static showSuccees = (fils) => {
        const parent = fils.parentNode;
        parent.className = "content";
    };
    static showSuccees2 = (fils) => {
        const parent = fils.parentNode;
        parent.className = "content  w-[30%]";
    };
    static getInputName = (input) => input.id.charAt(0).toUpperCase() + input.id.slice(1);
    static showError = (fils, msg) => {
        const parent = fils.parentNode;
        parent.className = "content error";
        const span = parent.querySelector("span");
        span.innerText = msg;
    };
    static showError2 = (fils, msg) => {
        const parent = fils.parentNode;
        parent.className = "content error  w-[30%]";
        const span = parent.querySelector("span");
        span.innerText = msg;
    };
    static checkRequireGlobal = (inputArray) => {
        let valid = true;
        inputArray.forEach((input) => {
            const parent = input.parentNode;
            if (input.value.trim() === "") {
                valid = false;
                parent.className = "content error";
                Validation.showError(input, `${Validation.getInputName(input)} est requis`);
            }
            else {
                Validation.showSuccees(input);
            }
        });
        return valid;
    };
    static checkRequireGlobal2 = (inputArray) => {
        let valid = true;
        inputArray.forEach((input) => {
            const parent = input.parentNode;
            if (input.value.trim() === "") {
                valid = false;
                parent.className = "content error  w-[30%]";
                Validation.showError2(input, `${Validation.getInputName(input)} est requis`);
            }
            else {
                Validation.showSuccees2(input);
            }
        });
        return valid;
    };
    static validerToxicite = (input) => {
        let valid = true;
        const parent = input.parentNode;
        if (input.value.trim() === "" || parseInt(input.value.trim()) < 0 || parseInt(input.value.trim()) > 10) {
            valid = false;
            parent.className = "content error  w-[30%]";
            Validation.showError2(input, `${Validation.getInputName(input)} n'est pas valide`);
        }
        else {
            Validation.showSuccees2(input);
        }
        return valid;
    };
    static validerEntier = (input) => {
        let valid = true;
        const parent = input.parentNode;
        if (parseInt(input.value.trim()) < 0) {
            valid = false;
            parent.className = "content error  w-[30%]";
            Validation.showError2(input, `${Validation.getInputName(input)} doit être positif`);
        }
        else {
            Validation.showSuccees2(input);
        }
        return valid;
    };
}
