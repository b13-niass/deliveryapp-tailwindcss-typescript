export class Validation {
    static showSuccees = (fils) => {
        const parent = fils.parentNode;
        parent.className = "content";
    };
    static getInputName = (input) => input.id.charAt(0).toUpperCase() + input.id.slice(1);
    static showError = (fils, msg) => {
        const parent = fils.parentNode;
        parent.className = "content error";
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
}
