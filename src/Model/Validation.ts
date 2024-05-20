export class Validation {

  static showSuccees = (fils: HTMLElement) => {
    const parent = fils.parentNode as HTMLElement;
    parent.className = "content";
  };

  static getInputName = (input: HTMLInputElement) =>
    input.id.charAt(0).toUpperCase() + input.id.slice(1);

  static showError = (fils: HTMLElement, msg:string) => {
    const parent = fils.parentNode as HTMLElement;
    parent.className = "content error";
    const span = parent.querySelector("span") as HTMLSpanElement;
      span.innerText = msg;
  };

  static checkRequireGlobal = (inputArray: NodeListOf<HTMLInputElement>) => {
    let valid = true;
    inputArray.forEach((input) => {
      const parent = input.parentNode as HTMLElement;
      if (input.value.trim() === "") {
        valid = false;
        parent.className = "content error";
        Validation.showError(input, `${Validation.getInputName(input)} est requis`);
      } else {
        Validation.showSuccees(input);
      }
    });
    return valid;
  };
}