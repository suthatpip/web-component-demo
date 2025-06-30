function t(t,s,i,e){for(var o,n=arguments.length,r=n<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(s,i,r):o(s,i))||r);return n>3&&r&&Object.defineProperty(s,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),o=new WeakMap;let n=class{constructor(t,s,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=o.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(s,t))}return t}toString(){return this.cssText}};const r=(t,...s)=>{const i=1===t.length?t[0]:s.reduce((s,i,e)=>s+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[e+1],t[0]);return new n(i,t,e)},h=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,e))(s)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:a,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,f=globalThis,v=f.trustedTypes,g=v?v.emptyScript:"",b=f.reactiveElementPolyfillSupport,y=(t,s)=>t,m={toAttribute(t,s){switch(s){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,s)=>!c(t,s),$={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:w};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=$){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),e=this.getPropertyDescriptor(t,i,s);void 0!==e&&l(this.prototype,t,e)}}static getPropertyDescriptor(t,s,i){const{get:e,set:o}=a(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get:e,set(s){const n=e?.call(this);o?.call(this,s),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,s=[...d(t),...u(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)s.unshift(h(t))}else void 0!==t&&s.push(h(t));return s}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(i)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),o=s.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:m).toAttribute(s,i.type);this._$Em=t,null==o?this.removeAttribute(e):this.setAttribute(e,o),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=e,this[e]=o.fromAttribute(s,t.type)??this._$Ej?.get(e)??null,this._$Em=null}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,o=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??w)(o,s)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,s,{useDefault:i,reflect:e,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??s??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[y("elementProperties")]=new Map,S[y("finalized")]=new Map,b?.({ReactiveElement:S}),(f.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,C=x.trustedTypes,A=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,_="?"+k,P=`<${_}>`,M=document,O=()=>M.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,T="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,D=/>/g,I=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,L=/"/g,H=/^(?:script|style|textarea|title)$/i,W=(t=>(s,...i)=>({_$litType$:t,strings:s,values:i}))(1),B=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Z=new WeakMap,q=M.createTreeWalker(M,129);function K(t,s){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(s):s}const V=(t,s)=>{const i=t.length-1,e=[];let o,n=2===s?"<svg>":3===s?"<math>":"",r=N;for(let s=0;s<i;s++){const i=t[s];let h,c,l=-1,a=0;for(;a<i.length&&(r.lastIndex=a,c=r.exec(i),null!==c);)a=r.lastIndex,r===N?"!--"===c[1]?r=z:void 0!==c[1]?r=D:void 0!==c[2]?(H.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=I):void 0!==c[3]&&(r=I):r===I?">"===c[0]?(r=o??N,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,h=c[1],r=void 0===c[3]?I:'"'===c[3]?L:R):r===L||r===R?r=I:r===z||r===D?r=N:(r=I,o=void 0);const d=r===I&&t[s+1].startsWith("/>")?" ":"";n+=r===N?i+P:l>=0?(e.push(h),i.slice(0,l)+E+i.slice(l)+k+d):i+k+(-2===l?s:d)}return[K(t,n+(t[i]||"<?>")+(2===s?"</svg>":3===s?"</math>":"")),e]};class F{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let o=0,n=0;const r=t.length-1,h=this.parts,[c,l]=V(t,s);if(this.el=F.createElement(c,i),q.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=q.nextNode())&&h.length<r;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(E)){const s=l[n++],i=e.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(s);h.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?st:"@"===r[1]?it:Y}),e.removeAttribute(t)}else t.startsWith(k)&&(h.push({type:6,index:o}),e.removeAttribute(t));if(H.test(e.tagName)){const t=e.textContent.split(k),s=t.length-1;if(s>0){e.textContent=C?C.emptyScript:"";for(let i=0;i<s;i++)e.append(t[i],O()),q.nextNode(),h.push({type:2,index:++o});e.append(t[s],O())}}}else if(8===e.nodeType)if(e.data===_)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(k,t+1));)h.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,s){const i=M.createElement("template");return i.innerHTML=t,i}}function G(t,s,i=t,e){if(s===B)return s;let o=void 0!==e?i._$Co?.[e]:i._$Cl;const n=j(s)?void 0:s._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,e)),void 0!==e?(i._$Co??=[])[e]=o:i._$Cl=o),void 0!==o&&(s=G(t,o._$AS(t,s.values),o,e)),s}class Q{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,e=(t?.creationScope??M).importNode(s,!0);q.currentNode=e;let o=q.nextNode(),n=0,r=0,h=i[0];for(;void 0!==h;){if(n===h.index){let s;2===h.type?s=new X(o,o.nextSibling,this,t):1===h.type?s=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(s=new et(o,this,t)),this._$AV.push(s),h=i[++r]}n!==h?.index&&(o=q.nextNode(),n++)}return q.currentNode=M,e}p(t){let s=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,i,e){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===t?.nodeType&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=G(this,t,s),j(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:i}=t,e="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=F.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===e)this._$AH.p(s);else{const t=new Q(e,this),i=t.u(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let s=Z.get(t.strings);return void 0===s&&Z.set(t.strings,s=new F(t)),s}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,e=0;for(const o of t)e===s.length?s.push(i=new X(this.O(O()),this.O(O()),this,this.options)):i=s[e],i._$AI(o),e++;e<s.length&&(this._$AR(i&&i._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,e,o){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(t,s=this,i,e){const o=this.strings;let n=!1;if(void 0===o)t=G(this,t,s,0),n=!j(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const e=t;let r,h;for(t=o[0],r=0;r<o.length-1;r++)h=G(this,e[i+r],s,r),h===B&&(h=this._$AH[r]),n||=!j(h)||h!==this._$AH[r],h===J?t=J:t!==J&&(t+=(h??"")+o[r+1]),this._$AH[r]=h}n&&!e&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class st extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class it extends Y{constructor(t,s,i,e,o){super(t,s,i,e,o),this.type=5}_$AI(t,s=this){if((t=G(this,t,s,0)??J)===B)return;const i=this._$AH,e=t===J&&i!==J||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==J&&(i===J||e);e&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const ot=x.litHtmlPolyfillSupport;ot?.(F,X),(x.litHtmlVersions??=[]).push("3.3.0");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rt extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,s,i)=>{const e=i?.renderBefore??s;let o=e._$litPart$;if(void 0===o){const t=i?.renderBefore??null;e._$litPart$=o=new X(s.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}rt._$litElement$=!0,rt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:rt});const ht=nt.litElementPolyfillSupport;ht?.({LitElement:rt}),(nt.litElementVersions??=[]).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(s,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,s)}):customElements.define(t,s)},lt={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:w},at=(t=lt,s,i)=>{const{kind:e,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===e&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===e){const{name:e}=i;return{set(i){const o=s.get.call(this);s.set.call(this,i),this.requestUpdate(e,o,t)},init(s){return void 0!==s&&this.C(e,void 0,t,s),s}}}if("setter"===e){const{name:e}=i;return function(i){const o=this[e];s.call(this,i),this.requestUpdate(e,o,t)}}throw Error("Unsupported decorator location: "+e)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(s,i)=>"object"==typeof i?at(t,s,i):((t,s,i)=>{const e=s.hasOwnProperty(i);return s.constructor.createProperty(i,t),e?Object.getOwnPropertyDescriptor(s,i):void 0})(t,s,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return dt({...t,state:!0,attribute:!1})}let pt=class extends rt{constructor(){super(...arguments),this.items=[{id:1,name:"Apple"},{id:2,name:"Orange"}],this.showDropdown=!1}toggleDropdown(){this.showDropdown=!this.showDropdown}render(){return W`
      <div class="icon" @click=${this.toggleDropdown}>
        🛒
        <span class="badge">${this.items.length}</span>
      </div>

      ${this.showDropdown?W`
            <div class="dropdown">
              <ul>
                ${this.items.map(t=>W`<li>
                      <span>${t.name}</span>
                      <button @click=${()=>this.removeItem(t.id)}>
                        ✕
                      </button>
                    </li>`)}
              </ul>
            </div>
          `:null}
    `}removeItem(t){this.items=this.items.filter(s=>s.id!==t)}};pt.styles=r`
    :host {
      position: relative;
      display: inline-block;
    }

    .icon {
      position: relative;
      font-size: 24px;
      cursor: pointer;
    }

    .badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background: red;
      color: white;
      border-radius: 50%;
      padding: 2px 6px;
      font-size: 12px;
    }

    .dropdown {
      position: absolute;
      top: 40px;
      right: 0;
      background: white;
      border: 1px solid #ccc;
      border-radius: 8px;
      width: 250px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 100;
    }

    .dropdown ul {
      list-style: none;
      margin: 0;
      padding: 8px;
      color: #000;
    }

    .dropdown li {
      display: flex;
      justify-content: space-between;
      padding: 6px 0;
      border-bottom: 1px solid #eee;
    }

    .dropdown li:last-child {
      border-bottom: none;
    }
  `,t([ut()],pt.prototype,"items",void 0),t([ut()],pt.prototype,"showDropdown",void 0),pt=t([ct("cart-component")],pt);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let ft=class extends rt{constructor(){super(...arguments),this.name="World",this.count=0,this.apiData=null}connectedCallback(){super.connectedCallback(),this.fetchData()}async fetchData(){console.log("Calling API at:","https://jsonplaceholder.typicode.com/posts/1");try{const t=await fetch("https://jsonplaceholder.typicode.com/posts/1");if(!t.ok)throw new Error("Network error");const s=await t.json();this.apiData=s}catch(t){console.error("Error fetching API:",t)}}render(){return W`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        123 Click Count: ${this.count}
      </button>

      <div style="margin-top: 16px;">
        <h3>API Data:</h3>
        ${this.apiData?W`
              <p><strong>${this.apiData.title}</strong></p>
              <p>${this.apiData.body}</p>
            `:W`<p>xxxx Loading API data...</p>`}
      </div>

      <slot></slot>
    `}_onClick(){this.count++,this.dispatchEvent(new CustomEvent("count-changed",{detail:{count:this.count}}))}sayHello(t){return`Hello, ${t}`}};ft.styles=r`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,t([dt()],ft.prototype,"name",void 0),t([dt({type:Number})],ft.prototype,"count",void 0),t([ut()],ft.prototype,"apiData",void 0),ft=t([ct("my-element")],ft);
//# sourceMappingURL=demo-bundle.js.map
