class ButtonCount extends HTMLElement {
    constructor() {
      super();
      let button = document.createElement("button");

  
      button.textContent = "Time Clicked: 0 ";
      button.addEventListener("click", () => {
        const count = parseInt(button.textContent.split(":")[1].trim());
        button.textContent = `Time Clicked: ${count + 1}`;
      });
      let shadow = this.attachShadow({ mode: "open" });

      shadow.appendChild(button);
    }
  }
  
  customElements.define("button-count", ButtonCount);
  