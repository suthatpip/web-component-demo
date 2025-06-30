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
    atoken: { type: String },
  };

  constructor() {
    super();
    this.name = "World";
  }

  render() {
    return html`<p>Hi, ${this.atoken}!</p>`;
  }
}

customElements.define("my-element", MyElement);

// https://purge.jsdelivr.net/gh/suthatpip/web-component-demo@main/my-element.js
// https://cdn.jsdelivr.net/gh/suthatpip/web-component-demo@main/my-element.js
