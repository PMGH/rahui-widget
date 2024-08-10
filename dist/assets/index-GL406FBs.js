(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('wc-datepicker,wc-datepicker *,wc-datepicker *:before,wc-datepicker *:after{margin:0;padding:0;box-sizing:border-box}wc-datepicker{display:inline-flex}.wc-datepicker{display:block;width:min-content;min-width:17rem;max-width:24rem;border:.0625rem solid #f2f3f5;color:#111;background-color:#fff;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-size:1rem;font-weight:400;line-height:1.5}.wc-datepicker--disabled *:disabled{opacity:.5;cursor:default}.wc-datepicker--disabled .wc-datepicker__weekday{color:#767676}.wc-datepicker--disabled .wc-datepicker__date:focus>*{outline:none}.wc-datepicker--disabled .wc-datepicker__date{cursor:default;opacity:.5}.wc-datepicker--disabled .wc-datepicker__date:hover>*{background-color:transparent}.wc-datepicker--disabled .wc-datepicker__date--in-range:hover>*{background-color:#f2f3f5}.wc-datepicker--disabled .wc-datepicker__date--selected:hover>*{color:#fff;background-color:#00f}.wc-datepicker__header{display:flex;padding:.75rem;align-items:center;gap:.5rem}.wc-datepicker__current-month{display:flex;flex-grow:1;gap:.5rem}.wc-datepicker__month-select,.wc-datepicker__year-select{display:flex;height:2rem;padding-right:.5rem;padding-left:.5rem;align-items:center;border:none;border-radius:.25rem;color:#111;background:#f2f3f5;font:inherit;line-height:1.125}.wc-datepicker__month-select{flex-grow:1;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.wc-datepicker__year-select{max-width:5rem}.wc-datepicker__previous-month-button,.wc-datepicker__next-month-button,.wc-datepicker__previous-year-button,.wc-datepicker__next-year-button{display:inline-flex;width:2rem;height:2rem;padding:.375rem;flex-shrink:0;justify-content:center;align-items:center;border:none;border-radius:.25rem;color:#111;background-color:transparent;background-color:#f2f3f5;cursor:pointer}.wc-datepicker__body{padding-right:.75rem;padding-bottom:.75rem;padding-left:.75rem}.wc-datepicker__calendar{width:100%;table-layout:fixed;border-collapse:collapse}.wc-datepicker__weekday>span{display:flex;padding:.125rem;justify-content:center;align-items:center;font-weight:600;aspect-ratio:1}.wc-datepicker__date{padding:.125rem;text-align:center;cursor:pointer}.wc-datepicker__date:focus{outline:none}.wc-datepicker__date:focus>*{outline:.125rem solid #0000ff}.wc-datepicker__date:hover>*{background-color:#f2f3f5}.wc-datepicker__date>*{display:flex;justify-content:center;align-items:center;border-radius:.25rem;aspect-ratio:1}.wc-datepicker__date--today>*{font-weight:700;font-style:normal}.wc-datepicker__date--in-range>*{background-color:#f2f3f5}.wc-datepicker__date--selected>*,.wc-datepicker__date--selected:hover>*{color:#fff;background-color:#00f;font-weight:500}.wc-datepicker__date--disabled{color:#767676;cursor:default}.wc-datepicker__date--disabled:not(.wc-datepicker__date--selected):not(.wc-datepicker__date--in-range):hover>*{background-color:transparent}.wc-datepicker__date--disabled.wc-datepicker__date--in-range:not(.wc-datepicker__date--selected):not(.wc-datepicker__date--in-range)>*{background-color:transparent}.wc-datepicker__footer{display:flex;padding-right:.75rem;padding-bottom:.75rem;padding-left:.75rem;align-items:center;gap:.5rem}.wc-datepicker__clear-button,.wc-datepicker__today-button{display:inline-flex;height:2rem;padding-right:.5rem;padding-left:.5rem;justify-content:center;align-items:center;border:none;border-radius:.25rem;color:#111;background-color:#f2f3f5;font:inherit;line-height:1;cursor:pointer}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var se=Object.defineProperty;var ie=(t,e,o)=>e in t?se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var p=(t,e,o)=>ie(t,typeof e!="symbol"?e+"":e,o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const re=`
  .widget__container * {
    box-sizing: border-box;
    font-size: 16px;
  }        
  h3, p, input {
    margin: 0;
    padding: 0;
  }
  .widget__container {
    box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
    width: 100%;
    overflow: auto;
    transition: max-height .2s ease;
    font-family: Helvetica, Arial ,sans-serif;
    background-color: white;
    border-radius: 10px;
    box-sizing: border-box;
  }
  .widget__header {
    padding: 1.5rem 2rem;
    background-color: #000;
    color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
  }
  .widget__header h3 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  #confirmation-message-container {
    color: green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  #confirmation-message-container,
  #error-message {
    display: none;
    margin: 2rem 1rem 1rem 1rem;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    font-weight: bold;
  }
  #confirmation-message {
    font-size: 1.5rem;
  }
  #confirmation-booking-container {
    margin-top: 1rem;
    margin-right: 1rem;
  }
  #confirmation-booking-container {
    display: flex;
    align-items: center;
  }
  #confirmation-booking-number-of-covers {
    margin-right: 0.5rem;
  }
  #error-message {
    color: red;
    border: 2px solid red;
  }
  form {
    padding: 2rem 1rem 1.5rem;
  }
  form .form__field {
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .form__field label {
    margin-bottom: 8px;
    font-size: 1rem;
  }
  .form__field__required {
    display: flex;
  }
  .required-field-symbol {
    color: red;
    font-size: 1.5rem;
    margin-left: 0.25rem;
  }
  .form__field input,
  .form__field textarea {
    border: 1px solid #000000ad;
    border-radius: 3px;
    padding: 8px 10px;
    background-color: #fff;
  }
  .form__field input {
    height: 48px;
  }
  .form__field textarea::placeholder {
    font-family: Helvetica, Arial ,sans-serif;
  }
  form button {
    height: 48px;
    border-radius: 6px;
    font-size: 18px;
    background-color: #000;
    color: #fff;
    border: 0;
    width: 100%;
    cursor: pointer;
  }
  form button:hover {
    background-color: #1d1d20;
  }
  .form__field__group {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  .info {
    margin-bottom: 0.5rem;
  }
  .muted {
    font-size: 0.75rem;
    color: grey;
  }
  wc-datepicker {
    justify-content: center;
  }
  .wc-datepicker__previous-month-button:hover,
  .wc-datepicker__next-month-button:hover {
    color: white;
  }
  .wc-datepicker__current-month {
    align-items: center;
  }
  select.wc-datepicker__month-select {
    font-weight: bold;
    text-align: center;
  }
  input.wc-datepicker__year-select {
    height: 32px;
    font-weight: bold;
  }
  .time-select-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin: 2rem 0;
    gap: 1rem;
  }
  .time-select {
    padding: 0.75rem 1rem;
  }
  .time-select:hover {
    cursor: pointer;
  }
  .wrapper {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: green;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }
  .checkmark {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 10% auto;
    box-shadow: inset 0px 0px 0px green;
    animation: fill 0.4s ease-in-out 0.4s forwards,
      scale 0.3s ease-in-out 0.9s both;
  }
  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes scale {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }
  @keyframes fill {
    100% {
      box-shadow: inset 0px 0px 0px 30px green;
    }
  }

  @media screen and (min-width: 768px) {
    .form__field__group {
      flex-flow: row nowrap;
    }
    wc-datepicker {
      justify-content: flex-start;
    }
    .number-of-covers {
      align-self: flex-start;
    }
    .number-of-covers,
    .last-name {
      margin-left: 1rem;
    }
    .time-select-container {
      justify-content: flex-start;
      margin-left: 1rem;
    }
  }
`,ae=({heading:t,buttonText:e,formId:o,datePickerHiddenInputId:n,datePickerId:s,timePickerHoursId:i,timePickerMinutesId:r})=>`
  <header class="widget__header">
    <h3>${t}</h3>
  </header>

  <div id="error-message">Sorry, something went wrong. Please try again.</div>

  <div id="confirmation-message-container">
    <div class="wrapper">
      <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
    </div>
    <h3 id="confirmation-message">Booking confirmed!</h3>
    <div id="confirmation-booking-container">
      <span id="confirmation-booking-number-of-covers"></span>
      <span id="confirmation-booking-datetime"></span>
    </div>
  </div>

  <form id="${o}">
    <input type="hidden" id="widget-submission" name="widget-submission" value="true">
    <div class="form__field__group">
      <div class="form__field">
        <div class="form__field__required">
          <label for="booking[date]">Booking (date and time)</label><span class="required-field-symbol">*</span>
          <input type="hidden" id="${n}" name="booking[date]">
        </div>
        <wc-datepicker id="${s}" first-day-of-week="1" id="${s}"></wc-datepicker>
        <div class="time-select-container">
          <select id="${i}" name="booking[time][hours]" required class="time-select" data-time="hours">
            <option value="0">00</option>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
          </select>
          <select id="${r}" name="booking[time][minutes]" required class="time-select" data-time="minutes">
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
        </div>
      </div>
      <div class="form__field form__field__required number-of-covers">
        <div class="form__field__required">
          <label id="number_of_covers_label" for="booking[number_of_covers]">Guests</label><span class="required-field-symbol">*</span>
        </div>
        <input
          type="number"
          id="number_of_covers"
          name="booking[number_of_covers]"
          placeholder="1"
          min="1"
          required
        />
      </div>
    </div>

    <section class="customer-details">
      <div class="form__field__group">
        <div class="form__field">
          <div class="form__field__required">
            <label for="customer[first_name]">First name</label><span class="required-field-symbol" id="customer_first_name_required_symbol">*</span>
          </div>
          <input
            type="text"
            id="customer_first_name"
            name="customer[first_name]"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div class="form__field last-name">
          <div class="form__field__required">
            <label for="customer[last_name]">Last name</label><span class="required-field-symbol" id="customer_last_name_required_symbol">*</span>
          </div>
          <input
            type="text"
            id="customer_last_name"
            name="customer[last_name]"
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>
      <div class="form__field">
        <div class="form__field__required">
          <label for="customer[email]">Email</label><span class="required-field-symbol">*</span>
        </div>
        <p class="info muted">We send the booking confirmation to this email address</p>
        <input
          type="email"
          id="email"
          name="customer[email]"
          placeholder="Enter your email address"
        />
      </div>
      <div class="form__field">
        <label for="customer[phone]">Phone number</label>
        <p class="info muted">We may use this to contact you about your booking</p>
        <input
          type="phone"
          id="phone"
          name="customer[phone]"
          placeholder="Enter your phone number"
        />
      </div>
    </section>

    <div class="form__field">
      <label for="booking[notes]">Notes</label>
      <textarea
        id="notes"
        name="booking[notes]"
        placeholder="Enter any additional notes"
        rows="6"
      ></textarea>
    </div>

    <button type="submit">${e}</button>
  </form>
`,le="modulepreload",ce=function(t){return"/"+t},C={},de=function(e,o,n){let s=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),r=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(o.map(a=>{if(a=ce(a),a in C)return;C[a]=!0;const l=a.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":le,l||(d.as="script",d.crossOrigin=""),d.href=a,r&&d.setAttribute("nonce",r),document.head.appendChild(d),l)return new Promise((u,m)=>{d.addEventListener("load",u),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(i=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i})},ue="wc-datepicker";let S,h=!1,P=!1;const b=(t,e="")=>()=>{},me=(t,e)=>()=>{},fe="{visibility:hidden}.hydrated{visibility:inherit}",D={},pe="http://www.w3.org/2000/svg",ge="http://www.w3.org/1999/xhtml",$e=t=>t!=null,q=t=>(t=typeof t,t==="object"||t==="function"),he=(t,e,...o)=>{let n=null,s=null,i=!1,r=!1;const a=[],l=d=>{for(let u=0;u<d.length;u++)n=d[u],Array.isArray(n)?l(n):n!=null&&typeof n!="boolean"&&((i=!q(n))&&(n=String(n)),i&&r?a[a.length-1].$text$+=n:a.push(i?L(null,n):n),r=i)};l(o);const c=L(t,null);return c.$attrs$=e,a.length>0&&(c.$children$=a),c.$key$=s,c},L=(t,e)=>{const o={$flags$:0,$tag$:t,$text$:e,$elm$:null,$children$:null};return o.$attrs$=null,o.$key$=null,o},ye={},be=t=>t&&t.$tag$===ye,_e=(t,e)=>t!=null&&!q(t)?e&4?t==="false"?!1:t===""||!!t:e&2?parseFloat(t):e&1?String(t):t:t,ve=(t,e,o)=>{const n=$.ce(e,o);return t.dispatchEvent(n),n},j=new WeakMap,ke=(t,e,o)=>{let n=I.get(t);Ue&&o?(n=n||new CSSStyleSheet,typeof n=="string"?n=e:n.replaceSync(e)):n=e,I.set(t,n)},Ee=(t,e,o,n)=>{let s=K(e);const i=I.get(s);if(t=t.nodeType===11?t:_,i)if(typeof i=="string"){t=t.head||t;let r=j.get(t),a;r||j.set(t,r=new Set),r.has(s)||(a=_.createElement("style"),a.innerHTML=i,t.insertBefore(a,t.querySelector("link")),r&&r.add(s))}else t.adoptedStyleSheets.includes(i)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,i]);return s},we=t=>{const e=t.$cmpMeta$,o=t.$hostElement$,n=e.$flags$,s=b("attachStyles",e.$tagName$),i=Ee(o.getRootNode(),e);n&10&&(o["s-sc"]=i,o.classList.add(i+"-h"),n&2&&o.classList.add(i+"-s")),s()},K=(t,e)=>"sc-"+t.$tagName$,A=(t,e,o,n,s,i)=>{if(o!==n){let r=U(t,e),a=e.toLowerCase();if(e==="class"){const l=t.classList,c=F(o),d=F(n);l.remove(...c.filter(u=>u&&!d.includes(u))),l.add(...d.filter(u=>u&&!c.includes(u)))}else if(e!=="key")if(!r&&e[0]==="o"&&e[1]==="n")e[2]==="-"?e=e.slice(3):U(T,a)?e=a.slice(2):e=a[2]+e.slice(3),o&&$.rel(t,e,o,!1),n&&$.ael(t,e,n,!1);else{const l=q(n);if((r||l&&n!==null)&&!s)try{if(t.tagName.includes("-"))t[e]=n;else{const c=n??"";e==="list"?r=!1:(o==null||t[e]!=c)&&(t[e]=c)}}catch{}n==null||n===!1?(n!==!1||t.getAttribute(e)==="")&&t.removeAttribute(e):(!r||i&4||s)&&!l&&(n=n===!0?"":n,t.setAttribute(e,n))}}},Se=/\s/,F=t=>t?t.split(Se):[],G=(t,e,o,n)=>{const s=e.$elm$.nodeType===11&&e.$elm$.host?e.$elm$.host:e.$elm$,i=t&&t.$attrs$||D,r=e.$attrs$||D;for(n in i)n in r||A(s,n,i[n],void 0,o,e.$flags$);for(n in r)A(s,n,i[n],r[n],o,e.$flags$)},x=(t,e,o,n)=>{const s=e.$children$[o];let i=0,r,a;if(s.$text$!==null)r=s.$elm$=_.createTextNode(s.$text$);else{if(h||(h=s.$tag$==="svg"),r=s.$elm$=_.createElementNS(h?pe:ge,s.$tag$),h&&s.$tag$==="foreignObject"&&(h=!1),G(null,s,h),$e(S)&&r["s-si"]!==S&&r.classList.add(r["s-si"]=S),s.$children$)for(i=0;i<s.$children$.length;++i)a=x(t,s,i),a&&r.appendChild(a);s.$tag$==="svg"?h=!1:r.tagName==="foreignObject"&&(h=!0)}return r},Y=(t,e,o,n,s,i)=>{let r=t,a;for(;s<=i;++s)n[s]&&(a=x(null,o,s),a&&(n[s].$elm$=a,r.insertBefore(a,e)))},J=(t,e,o,n,s)=>{for(;e<=o;++e)(n=t[e])&&(s=n.$elm$,s.remove())},xe=(t,e,o,n)=>{let s=0,i=0,r=0,a=0,l=e.length-1,c=e[0],d=e[l],u=n.length-1,m=n[0],f=n[u],g,y;for(;s<=l&&i<=u;)if(c==null)c=e[++s];else if(d==null)d=e[--l];else if(m==null)m=n[++i];else if(f==null)f=n[--u];else if(w(c,m))v(c,m),c=e[++s],m=n[++i];else if(w(d,f))v(d,f),d=e[--l],f=n[--u];else if(w(c,f))v(c,f),t.insertBefore(c.$elm$,d.$elm$.nextSibling),c=e[++s],f=n[--u];else if(w(d,m))v(d,m),t.insertBefore(d.$elm$,c.$elm$),d=e[--l],m=n[++i];else{for(r=-1,a=s;a<=l;++a)if(e[a]&&e[a].$key$!==null&&e[a].$key$===m.$key$){r=a;break}r>=0?(y=e[r],y.$tag$!==m.$tag$?g=x(e&&e[i],o,r):(v(y,m),e[r]=void 0,g=y.$elm$),m=n[++i]):(g=x(e&&e[i],o,i),m=n[++i]),g&&c.$elm$.parentNode.insertBefore(g,c.$elm$)}s>l?Y(t,n[u+1]==null?null:n[u+1].$elm$,o,n,i,u):i>u&&J(e,s,l)},w=(t,e)=>t.$tag$===e.$tag$?t.$key$===e.$key$:!1,v=(t,e)=>{const o=e.$elm$=t.$elm$,n=t.$children$,s=e.$children$,i=e.$tag$,r=e.$text$;r===null?(h=i==="svg"?!0:i==="foreignObject"?!1:h,G(t,e,h),n!==null&&s!==null?xe(o,n,e,s):s!==null?(t.$text$!==null&&(o.textContent=""),Y(o,null,e,s,0,s.length-1)):n!==null&&J(n,0,n.length-1),h&&i==="svg"&&(h=!1)):t.$text$!==r&&(o.data=r)},Ie=(t,e)=>{const o=t.$hostElement$,n=t.$vnode$||L(null,null),s=be(e)?e:he(null,null,e);s.$tag$=null,s.$flags$|=4,t.$vnode$=s,s.$elm$=n.$elm$=o,S=o["s-sc"],v(n,s)},Z=(t,e)=>{e&&!t.$onRenderResolve$&&e["s-p"]&&e["s-p"].push(new Promise(o=>t.$onRenderResolve$=o))},M=(t,e)=>{if(t.$flags$|=16,t.$flags$&4){t.$flags$|=512;return}return Z(t,t.$ancestorComponent$),Re(()=>Te(t,e))},Te=(t,e)=>{const o=b("scheduleUpdate",t.$cmpMeta$.$tagName$),n=t.$lazyInstance$;let s;return e&&(s=Q(n,"componentWillLoad")),o(),Oe(s,()=>Be(t,n,e))},Be=async(t,e,o)=>{const n=t.$hostElement$,s=b("update",t.$cmpMeta$.$tagName$),i=n["s-rc"];o&&we(t);const r=b("render",t.$cmpMeta$.$tagName$);Pe(t,e),i&&(i.map(a=>a()),n["s-rc"]=void 0),r(),s();{const a=n["s-p"],l=()=>Le(t);a.length===0?l():(Promise.all(a).then(l),t.$flags$|=4,a.length=0)}},Pe=(t,e,o)=>{try{e=e.render(),t.$flags$&=-17,t.$flags$|=2,Ie(t,e)}catch(n){k(n,t.$hostElement$)}return null},Le=t=>{const e=t.$cmpMeta$.$tagName$,o=t.$hostElement$,n=b("postUpdate",e),s=t.$lazyInstance$,i=t.$ancestorComponent$;Q(s,"componentDidRender"),t.$flags$&64?n():(t.$flags$|=64,X(o),n(),t.$onReadyResolve$(o),i||N()),t.$onRenderResolve$&&(t.$onRenderResolve$(),t.$onRenderResolve$=void 0),t.$flags$&512&&H(()=>M(t,!1)),t.$flags$&=-517},N=t=>{X(_.documentElement),H(()=>ve(T,"appload",{detail:{namespace:ue}}))},Q=(t,e,o)=>{if(t&&t[e])try{return t[e](o)}catch(n){k(n)}},Oe=(t,e)=>t&&t.then?t.then(e):e(),X=t=>t.classList.add("hydrated"),qe=(t,e)=>E(t).$instanceValues$.get(e),Me=(t,e,o,n)=>{const s=E(t),i=s.$hostElement$,r=s.$instanceValues$.get(e),a=s.$flags$,l=s.$lazyInstance$;o=_e(o,n.$members$[e][0]);const c=Number.isNaN(r)&&Number.isNaN(o),d=o!==r&&!c;if((!(a&8)||r===void 0)&&d&&(s.$instanceValues$.set(e,o),l)){if(n.$watchers$&&a&128){const u=n.$watchers$[e];u&&u.map(m=>{try{l[m](o,r,e)}catch(f){k(f,i)}})}(a&18)===2&&M(s,!1)}},V=(t,e,o)=>{if(e.$members$){t.watchers&&(e.$watchers$=t.watchers);const n=Object.entries(e.$members$),s=t.prototype;if(n.map(([i,[r]])=>{(r&31||o&2&&r&32)&&Object.defineProperty(s,i,{get(){return qe(this,i)},set(a){Me(this,i,a,e)},configurable:!0,enumerable:!0})}),o&1){const i=new Map;s.attributeChangedCallback=function(r,a,l){$.jmp(()=>{const c=i.get(r);if(this.hasOwnProperty(c))l=this[c],delete this[c];else if(s.hasOwnProperty(c)&&typeof this[c]=="number"&&this[c]==l)return;this[c]=l===null&&typeof this[c]=="boolean"?!1:l})},t.observedAttributes=n.filter(([r,a])=>a[0]&15).map(([r,a])=>{const l=a[1]||r;return i.set(l,r),l})}}return t},He=async(t,e,o,n,s)=>{if(!(e.$flags$&32)){{if(e.$flags$|=32,s=Fe(o),s.then){const l=me();s=await s,l()}s.isProxied||(o.$watchers$=s.watchers,V(s,o,2),s.isProxied=!0);const a=b("createInstance",o.$tagName$);e.$flags$|=8;try{new s(e)}catch(l){k(l)}e.$flags$&=-9,e.$flags$|=128,a()}if(s.style){let a=s.style;const l=K(o);if(!I.has(l)){const c=b("registerStyles",o.$tagName$);ke(l,a,!!(o.$flags$&1)),c()}}}const i=e.$ancestorComponent$,r=()=>M(e,!0);i&&i["s-rc"]?i["s-rc"].push(r):r()},Ce=t=>{if(!($.$flags$&1)){const e=E(t),o=e.$cmpMeta$,n=b("connectedCallback",o.$tagName$);if(!(e.$flags$&1)){e.$flags$|=1;{let s=t;for(;s=s.parentNode||s.host;)if(s["s-p"]){Z(e,e.$ancestorComponent$=s);break}}o.$members$&&Object.entries(o.$members$).map(([s,[i]])=>{if(i&31&&t.hasOwnProperty(s)){const r=t[s];delete t[s],t[s]=r}}),He(t,e,o)}n()}},De=t=>{$.$flags$&1||E(t)},je=(t,e={})=>{const o=b(),n=[],s=e.exclude||[],i=T.customElements,r=_.head,a=r.querySelector("meta[charset]"),l=_.createElement("style"),c=[];let d,u=!0;Object.assign($,e),$.$resourcesUrl$=new URL(e.resourcesUrl||"./",_.baseURI).href,t.map(m=>{m[1].map(f=>{const g={$flags$:f[0],$tagName$:f[1],$members$:f[2],$listeners$:f[3]};g.$members$=f[2],g.$watchers$={};const y=g.$tagName$,oe=class extends HTMLElement{constructor(B){super(B),B=this,Ae(B,g)}connectedCallback(){d&&(clearTimeout(d),d=null),u?c.push(this):$.jmp(()=>Ce(this))}disconnectedCallback(){$.jmp(()=>De(this))}componentOnReady(){return E(this).$onReadyPromise$}};g.$lazyBundleId$=m[0],!s.includes(y)&&!i.get(y)&&(n.push(y),i.define(y,V(oe,g,1)))})}),l.innerHTML=n+fe,l.setAttribute("data-styles",""),r.insertBefore(l,a?a.nextSibling:r.firstChild),u=!1,c.length?c.map(m=>m.connectedCallback()):$.jmp(()=>d=setTimeout(N,30)),o()},ee=new WeakMap,E=t=>ee.get(t),Ae=(t,e)=>{const o={$flags$:0,$hostElement$:t,$cmpMeta$:e,$instanceValues$:new Map};return o.$onReadyPromise$=new Promise(n=>o.$onReadyResolve$=n),t["s-p"]=[],t["s-rc"]=[],ee.set(t,o)},U=(t,e)=>e in t,k=(t,e)=>(0,console.error)(t,e),z=new Map,Fe=(t,e,o)=>{const n=t.$tagName$.replace(/-/g,"_"),s=t.$lazyBundleId$,i=z.get(s);if(i)return i[n];/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return de(()=>import(`./${s}.entry.js`),[]).then(r=>(z.set(s,r),r[n]),k)},I=new Map,T=typeof window<"u"?window:{},_=T.document||{head:{}},$={$flags$:0,$resourcesUrl$:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,o,n)=>t.addEventListener(e,o,n),rel:(t,e,o,n)=>t.removeEventListener(e,o,n),ce:(t,e)=>new CustomEvent(t,e)},te=t=>Promise.resolve(t),Ue=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),R=[],ne=[],ze=(t,e)=>o=>{t.push(o),P||(P=!0,$.$flags$&4?H(O):$.raf(O))},W=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(o){k(o)}t.length=0},O=()=>{W(R),W(ne),(P=R.length>0)&&$.raf(O)},H=t=>te().then(t),Re=ze(ne),We=()=>te(),Ke=(t,e)=>typeof window>"u"?Promise.resolve():We().then(()=>je([["wc-datepicker",[[2,"wc-datepicker",{clearButtonContent:[1,"clear-button-content"],disabled:[4],disableDate:[16],elementClassName:[1,"element-class-name"],firstDayOfWeek:[2,"first-day-of-week"],range:[4],labels:[16],locale:[1],nextMonthButtonContent:[1,"next-month-button-content"],nextYearButtonContent:[1,"next-year-button-content"],previousMonthButtonContent:[1,"previous-month-button-content"],previousYearButtonContent:[1,"previous-year-button-content"],showClearButton:[4,"show-clear-button"],showMonthStepper:[4,"show-month-stepper"],showTodayButton:[4,"show-today-button"],showYearStepper:[4,"show-year-stepper"],startDate:[1,"start-date"],todayButtonContent:[1,"today-button-content"],value:[1040],currentDate:[32],hoveredDate:[32],weekdays:[32]}]]]],e));(function(){if(typeof window<"u"&&window.Reflect!==void 0&&window.customElements!==void 0){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}})();var Ge={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_IS_DEVELOPMENT:"false",VITE_RAHUI_BOOKING_LOCAL_SERVER_URL:"http://localhost:3001",VITE_TEST_ROOT_ELEMENT:"true"};class Ye{constructor({apiKey:e,rootElementId:o,content:n}){p(this,"apiKey","");p(this,"rootElementId","");p(this,"widgetContainer",null);p(this,"form",null);p(this,"formId","rahui-booking-form");p(this,"datePickerId","date-picker");p(this,"timePickerHoursId","time-picker-hours");p(this,"timePickerMinutesId","time-picker-minutes");p(this,"datePickerHiddenInputId","hidden-date-input");p(this,"confirmationContainerElementId","confirmation-message-container");p(this,"confirmationBookingDatetimeElementId","confirmation-booking-datetime");p(this,"confirmationBookingCoversElementId","confirmation-booking-number-of-covers");p(this,"errorMessageElementId","error-message");p(this,"heading","");p(this,"buttonText","");this.apiKey=e,this.rootElementId=o||"",this.heading=(n==null?void 0:n.heading)||"Book a table",this.buttonText=(n==null?void 0:n.buttonText)||"Create booking",this.initialize(),this.injectStyles(),this.setupEventListenersForRequiredFields()}async initialize(){const e=document.createElement("div");if(this.rootElementId.length){const n=document.getElementById(this.rootElementId);n&&n.appendChild(e)}else document.body.appendChild(e);this.widgetContainer=document.createElement("div"),this.widgetContainer.classList.add("widget__container"),this.createWidgetContent(),e.appendChild(this.widgetContainer),this.form=document.getElementById(this.formId),this.form&&this.form.addEventListener("submit",this.formSubmit.bind(this)),Ke();const o=document.getElementById(this.datePickerId);o&&(o.disableDate=function(n){const s=new Date,i=new Date(s.setHours(0,0,0));return new Date(n.setHours(15,0,0)).getTime()<i.getTime()},o.addEventListener("selectDate",n=>{const s=document.getElementById(this.datePickerHiddenInputId);s&&(s.value=n.detail),this.getOpeningHours(n.detail)})),this.getWidgetSettings(),this.getOpeningHours()}apiBaseUrl(){const{VITE_IS_DEVELOPMENT:e,VITE_RAHUI_BOOKING_LOCAL_SERVER_URL:o}=Ge;return e==="true"?o:"https://rahui-booking.com"}async formSubmit(e){e.preventDefault();const o=new FormData(e.target),n=Object.fromEntries(o.entries()),s=new Date(n["booking[date]"]),i=n["booking[time][hours]"],r=n["booking[time][minutes]"],l=new Date(s.setHours(parseInt(i),parseInt(r),0)).toUTCString(),c=String(n["booking[number_of_covers]"]),d=String(n["booking[notes]"]),u=String(n["customer[first_name]"]),m=String(n["customer[last_name]"]),f=String(n["customer[email]"]),g=String(n["customer[phone]"]),y={"widget-submission":!0,booking:{datetime:l,number_of_covers:c,notes:d},customer:{first_name:u,last_name:m,email:f,phone:g}};await this.forwardFormSubmissionToServer(y)}async getWidgetSettings(){const e=`${this.apiBaseUrl()}/api/widgets/settings`,o=await fetch(e,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},method:"GET"});if(o.status===200){const n=await o.json();this.applySettings(n)}else console.error({body:await o.json()})}applySettings(e){this.setMaxCoversPerBooking(e)}setMaxCoversPerBooking(e){const o=e.max_covers_per_booking,n=document.getElementById("number_of_covers_label"),s=document.getElementById("number_of_covers");o&&n&&s&&(n.textContent=n.textContent+` (max: ${o})`,s.max=String(o))}async getOpeningHours(e=void 0){const o=Intl.DateTimeFormat().resolvedOptions().timeZone,n=e&&o?`?date=${e}&timezone=${o}`:void 0,s=n?`${this.apiBaseUrl()}/api/widgets/opening_hours${n}`:`${this.apiBaseUrl()}/api/widgets/opening_hours`,i=await fetch(s,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},method:"GET"});if(i.status===200){const r=await i.json();this.applyOpeningHours(r)}else console.error({body:await i.json()})}applyOpeningHours(e){const o=document.getElementById(this.timePickerHoursId);if(o&&e){const{open_at:n,close_at:s}=e==null?void 0:e.opening_hours,i=Array.from(Array(23).keys()).map(a=>{const l=document.createElement("option");return l.value=String(a),l.innerHTML=a<10?String(a).padStart(2,"0"):String(a),l}),r=[];i.forEach(a=>{a.value>=n&&a.value<=s&&r.push(a)}),o.innerHTML="",o.append(...r)}}async forwardFormSubmissionToServer(e){const o=`${this.apiBaseUrl()}/api/widgets/create_booking`;if(o&&e){const n=await fetch(o,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},method:"POST",body:JSON.stringify(e)});if(this.hideErrorMessage(),n.status===201){const s=await n.json();this.hideForm(),this.showConfirmationMessage(s)}else console.error({body:await n.json()}),this.showErrorMessage()}}hideForm(){const e=document.getElementById(this.formId);e&&(e.style.visibility="hidden")}showConfirmationMessage(e){const o=document.getElementById(this.confirmationContainerElementId),n=document.getElementById(this.confirmationBookingDatetimeElementId),s=document.getElementById(this.confirmationBookingCoversElementId);if(!(!o||!e)){if(n){const i=new Date(e.datetime),r=Intl.DateTimeFormat().resolvedOptions().locale,a=new Intl.DateTimeFormat(r,{dateStyle:"full",timeStyle:"short"}).format(i);n.textContent=a}if(s){const i=String(e.number_of_covers),r=e.number_of_covers===1?`${i} Person | `:`${i} People | `;s.textContent=r}o.style.display="flex",o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}}hideErrorMessage(){const e=document.getElementById(this.errorMessageElementId);e&&(e.style.display="none")}showErrorMessage(){const e=document.getElementById(this.errorMessageElementId);e&&(e.style.display="block")}createWidgetContent(){this.widgetContainer.innerHTML=ae({heading:this.heading,buttonText:this.buttonText,formId:this.formId,datePickerHiddenInputId:this.datePickerHiddenInputId,datePickerId:this.datePickerId,timePickerHoursId:this.timePickerHoursId,timePickerMinutesId:this.timePickerMinutesId})}injectStyles(){const e=document.createElement("style");e.innerHTML=re.replace(/^\s+|\n/gm,""),document.head.appendChild(e)}setupEventListenersForRequiredFields(){const e=document.getElementById("customer_first_name"),o=document.getElementById("customer_last_name");[e,o].forEach(n=>{const s=[e,o];this.handleToggleRequiredFields({relatedFields:s}),n&&n.addEventListener("change",()=>this.handleToggleRequiredFields({relatedFields:s}))})}getRequiredSymbolFor(e){const o=e.id+"_required_symbol";return document.getElementById(o)}toggleRequiredSymbolFor(e){const o=this.getRequiredSymbolFor(e);o&&(o.style.display="none")}handleToggleRequiredFields({relatedFields:e}){const[o,n]=e,s=e.every(r=>r.value.length>0),i=e.every(r=>r.value.length===0);(s||i)&&e.forEach(r=>{const a=this.getRequiredSymbolFor(r);a&&(a.style.display="inline"),r.required=!0}),o.value.length>0&&n.value.length===0&&(this.toggleRequiredSymbolFor(n),n.required=!1),n.value.length>0&&o.value.length===0&&(this.toggleRequiredSymbolFor(o),o.required=!1)}}window.RahuiWidget=Ye;
