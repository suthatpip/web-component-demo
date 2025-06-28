// import { LitElement, html, css } from "lit";
import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit@latest/index.js?module";

class MyElement extends LitElement {
  static styles = css`
    p {
      color: blue;
      font-size: 20px;
    }
  `;

  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = "World";
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

customElements.define("my-element", MyElement);
