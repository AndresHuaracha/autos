customElements.define("mi-footer", class extends HTMLElement {
  connectedCallback() {
    this.innerText = "Copyright © 2019 Huaracha Rosales Andrés IC51-M.";
  }
}, { extends: "footer" });