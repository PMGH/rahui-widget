(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('wc-datepicker,wc-datepicker *,wc-datepicker *:before,wc-datepicker *:after{margin:0;padding:0;box-sizing:border-box}wc-datepicker{display:inline-flex}.wc-datepicker{display:block;width:min-content;min-width:17rem;max-width:24rem;border:.0625rem solid #f2f3f5;color:#111;background-color:#fff;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-size:1rem;font-weight:400;line-height:1.5}.wc-datepicker--disabled *:disabled{opacity:.5;cursor:default}.wc-datepicker--disabled .wc-datepicker__weekday{color:#767676}.wc-datepicker--disabled .wc-datepicker__date:focus>*{outline:none}.wc-datepicker--disabled .wc-datepicker__date{cursor:default;opacity:.5}.wc-datepicker--disabled .wc-datepicker__date:hover>*{background-color:transparent}.wc-datepicker--disabled .wc-datepicker__date--in-range:hover>*{background-color:#f2f3f5}.wc-datepicker--disabled .wc-datepicker__date--selected:hover>*{color:#fff;background-color:#00f}.wc-datepicker__header{display:flex;padding:.75rem;align-items:center;gap:.5rem}.wc-datepicker__current-month{display:flex;flex-grow:1;gap:.5rem}.wc-datepicker__month-select,.wc-datepicker__year-select{display:flex;height:2rem;padding-right:.5rem;padding-left:.5rem;align-items:center;border:none;border-radius:.25rem;color:#111;background:#f2f3f5;font:inherit;line-height:1.125}.wc-datepicker__month-select{flex-grow:1;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.wc-datepicker__year-select{max-width:5rem}.wc-datepicker__previous-month-button,.wc-datepicker__next-month-button,.wc-datepicker__previous-year-button,.wc-datepicker__next-year-button{display:inline-flex;width:2rem;height:2rem;padding:.375rem;flex-shrink:0;justify-content:center;align-items:center;border:none;border-radius:.25rem;color:#111;background-color:transparent;background-color:#f2f3f5;cursor:pointer}.wc-datepicker__body{padding-right:.75rem;padding-bottom:.75rem;padding-left:.75rem}.wc-datepicker__calendar{width:100%;table-layout:fixed;border-collapse:collapse}.wc-datepicker__weekday>span{display:flex;padding:.125rem;justify-content:center;align-items:center;font-weight:600;aspect-ratio:1}.wc-datepicker__date{padding:.125rem;text-align:center;cursor:pointer}.wc-datepicker__date:focus{outline:none}.wc-datepicker__date:focus>*{outline:.125rem solid #0000ff}.wc-datepicker__date:hover>*{background-color:#f2f3f5}.wc-datepicker__date>*{display:flex;justify-content:center;align-items:center;border-radius:.25rem;aspect-ratio:1}.wc-datepicker__date--today>*{font-weight:700;font-style:normal}.wc-datepicker__date--in-range>*{background-color:#f2f3f5}.wc-datepicker__date--selected>*,.wc-datepicker__date--selected:hover>*{color:#fff;background-color:#00f;font-weight:500}.wc-datepicker__date--disabled{color:#767676;cursor:default}.wc-datepicker__date--disabled:not(.wc-datepicker__date--selected):not(.wc-datepicker__date--in-range):hover>*{background-color:transparent}.wc-datepicker__date--disabled.wc-datepicker__date--in-range:not(.wc-datepicker__date--selected):not(.wc-datepicker__date--in-range)>*{background-color:transparent}.wc-datepicker__footer{display:flex;padding-right:.75rem;padding-bottom:.75rem;padding-left:.75rem;align-items:center;gap:.5rem}.wc-datepicker__clear-button,.wc-datepicker__today-button{display:inline-flex;height:2rem;padding-right:.5rem;padding-left:.5rem;justify-content:center;align-items:center;border:none;border-radius:.25rem;color:#111;background-color:#f2f3f5;font:inherit;line-height:1;cursor:pointer}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var Re=Object.defineProperty;var Ae=(t,e,s)=>e in t?Re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var p=(t,e,s)=>Ae(t,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const qe=`
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
`,He=({heading:t,buttonText:e,formId:s,datePickerHiddenInputId:n,datePickerId:o,timePickerHoursId:i,timePickerMinutesId:r})=>`
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

  <form id="${s}">
    <input type="hidden" id="widget-submission" name="widget-submission" value="true">
    <div class="form__field__group">
      <div class="form__field">
        <div class="form__field__required">
          <label for="booking[date]">Booking (date and time)</label><span class="required-field-symbol">*</span>
          <input type="hidden" id="${n}" name="booking[date]">
        </div>
        <wc-datepicker id="${o}" first-day-of-week="1" id="${o}"></wc-datepicker>
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
`,C={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!1,cmpDidUpdate:!0,cmpDidRender:!0,cmpWillLoad:!0,cmpWillUpdate:!0,cmpWillRender:!0,connectedCallback:!0,disconnectedCallback:!0,element:!0,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!0,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!0,mode:!0,observeAttribute:!0,prop:!0,propMutable:!0,reflect:!0,scoped:!0,shadowDom:!0,slot:!0,cssAnnotations:!0,state:!0,style:!0,svg:!0,updatable:!0,vdomAttribute:!0,vdomXlink:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomPropOrAttr:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,hotModuleReplacement:!1,isDebug:!1,isDev:!1,isTesting:!1,hydrateServerSide:!1,hydrateClientSide:!1,lifecycleDOMEvents:!1,lazyLoad:!1,profile:!1,slotRelocation:!0,appendChildSlotFix:!1,cloneNodeFix:!1,hydratedAttribute:!1,hydratedClass:!0,safari10:!1,scriptDataOpts:!1,scopedSlotTextContentFix:!1,shadowDomShim:!1,slotChildNodesFix:!1,invisiblePrehydration:!0,propBoolean:!0,propNumber:!0,propString:!0,cssVarShim:!1,constructableCSS:!0,cmpShouldUpdate:!0,devTools:!1,dynamicImportShim:!1,shadowDelegatesFocus:!0,initializeNextTick:!1,asyncLoading:!1,asyncQueue:!1,transformTagName:!1,attachStyles:!0};let E,he,q,me=!1,F=!1,z=!1,y=!1,J=null,W=!1;const S=(t,e="")=>()=>{},X="http://www.w3.org/1999/xlink",Z={},je="http://www.w3.org/2000/svg",We="http://www.w3.org/1999/xhtml",Ye=t=>t!=null,K=t=>(t=typeof t,t==="object"||t==="function");function Ue(t){var e,s,n;return(n=(s=(e=t.head)===null||e===void 0?void 0:e.querySelector('meta[name="csp-nonce"]'))===null||s===void 0?void 0:s.getAttribute("content"))!==null&&n!==void 0?n:void 0}const f=(t,e,...s)=>{let n=null,o=null,i=null,r=!1,a=!1;const l=[],c=d=>{for(let h=0;h<d.length;h++)n=d[h],Array.isArray(n)?c(n):n!=null&&typeof n!="boolean"&&((r=typeof t!="function"&&!K(n))&&(n=String(n)),r&&a?l[l.length-1].$text$+=n:l.push(r?P(null,n):n),a=r)};if(c(s),e){e.key&&(o=e.key),e.name&&(i=e.name);{const d=e.className||e.class;d&&(e.class=typeof d!="object"?d:Object.keys(d).filter(h=>d[h]).join(" "))}}if(typeof t=="function")return t(e===null?{}:e,l,Ke);const u=P(t,null);return u.$attrs$=e,l.length>0&&(u.$children$=l),u.$key$=o,u.$name$=i,u},P=(t,e)=>{const s={$flags$:0,$tag$:t,$text$:e,$elm$:null,$children$:null};return s.$attrs$=null,s.$key$=null,s.$name$=null,s},pe={},ze=t=>t&&t.$tag$===pe,Ke={forEach:(t,e)=>t.map(V).forEach(e),map:(t,e)=>t.map(V).map(e).map(Ge)},V=t=>({vattrs:t.$attrs$,vchildren:t.$children$,vkey:t.$key$,vname:t.$name$,vtag:t.$tag$,vtext:t.$text$}),Ge=t=>{if(typeof t.vtag=="function"){const s=Object.assign({},t.vattrs);return t.vkey&&(s.key=t.vkey),t.vname&&(s.name=t.vname),f(t.vtag,s,...t.vchildren||[])}const e=P(t.vtag,t.vtext);return e.$attrs$=t.vattrs,e.$children$=t.vchildren,e.$key$=t.vkey,e.$name$=t.vname,e},Qe=t=>wt.map(e=>e(t)).find(e=>!!e),Je=(t,e)=>t!=null&&!K(t)?e&4?t==="false"?!1:t===""||!!t:e&2?parseFloat(t):e&1?String(t):t:t,Xe=t=>t,ee=(t,e,s)=>{const n=Xe(t);return{emit:o=>Ze(n,e,{bubbles:!!(s&4),composed:!!(s&2),cancelable:!!(s&1),detail:o})}},Ze=(t,e,s)=>{const n=g.ce(e,s);return t.dispatchEvent(n),n},te=new WeakMap,Ve=(t,e,s)=>{let n=A.get(t);Ct&&s?(n=n||new CSSStyleSheet,typeof n=="string"?n=e:n.replaceSync(e)):n=e,A.set(t,n)},et=(t,e,s,n)=>{var o;let i=ge(e,s);const r=A.get(i);if(t=t.nodeType===11?t:b,r)if(typeof r=="string"){t=t.head||t;let a=te.get(t),l;if(a||te.set(t,a=new Set),!a.has(i)){{l=b.createElement("style"),l.innerHTML=r;const c=(o=g.$nonce$)!==null&&o!==void 0?o:Ue(b);c!=null&&l.setAttribute("nonce",c),t.insertBefore(l,t.querySelector("link"))}a&&a.add(i)}}else t.adoptedStyleSheets.includes(r)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,r]);return i},tt=t=>{const e=t.$cmpMeta$,s=t.$hostElement$,n=e.$flags$,o=S("attachStyles",e.$tagName$),i=et(s.shadowRoot?s.shadowRoot:s.getRootNode(),e,t.$modeName$);n&10&&(s["s-sc"]=i,s.classList.add(i+"-h"),n&2&&s.classList.add(i+"-s")),o()},ge=(t,e)=>"sc-"+(e&&t.$flags$&32?t.$tagName$+"-"+e:t.$tagName$),se=(t,e,s,n,o,i)=>{if(s!==n){let r=re(t,e),a=e.toLowerCase();if(e==="class"){const l=t.classList,c=ne(s),u=ne(n);l.remove(...c.filter(d=>d&&!u.includes(d))),l.add(...u.filter(d=>d&&!c.includes(d)))}else if(e==="style"){for(const l in s)(!n||n[l]==null)&&(l.includes("-")?t.style.removeProperty(l):t.style[l]="");for(const l in n)(!s||n[l]!==s[l])&&(l.includes("-")?t.style.setProperty(l,n[l]):t.style[l]=n[l])}else if(e!=="key")if(e==="ref")n&&n(t);else if(!t.__lookupSetter__(e)&&e[0]==="o"&&e[1]==="n")e[2]==="-"?e=e.slice(3):re(j,a)?e=a.slice(2):e=a[2]+e.slice(3),s&&g.rel(t,e,s,!1),n&&g.ael(t,e,n,!1);else{const l=K(n);if((r||l&&n!==null)&&!o)try{if(t.tagName.includes("-"))t[e]=n;else{const u=n??"";e==="list"?r=!1:(s==null||t[e]!=u)&&(t[e]=u)}}catch{}let c=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(e=a,c=!0),n==null||n===!1?(n!==!1||t.getAttribute(e)==="")&&(c?t.removeAttributeNS(X,e):t.removeAttribute(e)):(!r||i&4||o)&&!l&&(n=n===!0?"":n,c?t.setAttributeNS(X,e,n):t.setAttribute(e,n))}}},st=/\s/,ne=t=>t?t.split(st):[],$e=(t,e,s,n)=>{const o=e.$elm$.nodeType===11&&e.$elm$.host?e.$elm$.host:e.$elm$,i=t&&t.$attrs$||Z,r=e.$attrs$||Z;for(n in i)n in r||se(o,n,i[n],void 0,s,e.$flags$);for(n in r)se(o,n,i[n],r[n],s,e.$flags$)},R=(t,e,s,n)=>{const o=e.$children$[s];let i=0,r,a,l;if(me||(z=!0,o.$tag$==="slot"&&(E&&n.classList.add(E+"-s"),o.$flags$|=o.$children$?2:1)),o.$text$!==null)r=o.$elm$=b.createTextNode(o.$text$);else if(o.$flags$&1)r=o.$elm$=b.createTextNode("");else{if(y||(y=o.$tag$==="svg"),r=o.$elm$=b.createElementNS(y?je:We,o.$flags$&2?"slot-fb":o.$tag$),y&&o.$tag$==="foreignObject"&&(y=!1),$e(null,o,y),Ye(E)&&r["s-si"]!==E&&r.classList.add(r["s-si"]=E),o.$children$)for(i=0;i<o.$children$.length;++i)a=R(t,o,i,r),a&&r.appendChild(a);o.$tag$==="svg"?y=!1:r.tagName==="foreignObject"&&(y=!0)}return r["s-hn"]=q,o.$flags$&3&&(r["s-sr"]=!0,r["s-cr"]=he,r["s-sn"]=o.$name$||"",l=t&&t.$children$&&t.$children$[s],l&&l.$tag$===o.$tag$&&t.$elm$&&I(t.$elm$,!1)),r},I=(t,e)=>{g.$flags$|=1;const s=t.childNodes;for(let n=s.length-1;n>=0;n--){const o=s[n];o["s-hn"]!==q&&o["s-ol"]&&(be(o).insertBefore(o,G(o)),o["s-ol"].remove(),o["s-ol"]=void 0,z=!0),e&&I(o,e)}g.$flags$&=-2},ye=(t,e,s,n,o,i)=>{let r=t["s-cr"]&&t["s-cr"].parentNode||t,a;for(r.shadowRoot&&r.tagName===q&&(r=r.shadowRoot);o<=i;++o)n[o]&&(a=R(null,s,o,t),a&&(n[o].$elm$=a,r.insertBefore(a,G(e))))},ve=(t,e,s,n,o)=>{for(;e<=s;++e)(n=t[e])&&(o=n.$elm$,we(n),F=!0,o["s-ol"]?o["s-ol"].remove():I(o,!0),o.remove())},nt=(t,e,s,n)=>{let o=0,i=0,r=0,a=0,l=e.length-1,c=e[0],u=e[l],d=n.length-1,h=n[0],m=n[d],$,D;for(;o<=l&&i<=d;)if(c==null)c=e[++o];else if(u==null)u=e[--l];else if(h==null)h=n[++i];else if(m==null)m=n[--d];else if(O(c,h))M(c,h),c=e[++o],h=n[++i];else if(O(u,m))M(u,m),u=e[--l],m=n[--d];else if(O(c,m))(c.$tag$==="slot"||m.$tag$==="slot")&&I(c.$elm$.parentNode,!1),M(c,m),t.insertBefore(c.$elm$,u.$elm$.nextSibling),c=e[++o],m=n[--d];else if(O(u,h))(c.$tag$==="slot"||m.$tag$==="slot")&&I(u.$elm$.parentNode,!1),M(u,h),t.insertBefore(u.$elm$,c.$elm$),u=e[--l],h=n[++i];else{for(r=-1,a=o;a<=l;++a)if(e[a]&&e[a].$key$!==null&&e[a].$key$===h.$key$){r=a;break}r>=0?(D=e[r],D.$tag$!==h.$tag$?$=R(e&&e[i],s,r,t):(M(D,h),e[r]=void 0,$=D.$elm$),h=n[++i]):($=R(e&&e[i],s,i,t),h=n[++i]),$&&be(c.$elm$).insertBefore($,G(c.$elm$))}o>l?ye(t,n[d+1]==null?null:n[d+1].$elm$,s,n,i,d):i>d&&ve(e,o,l)},O=(t,e)=>t.$tag$===e.$tag$?t.$tag$==="slot"?t.$name$===e.$name$:t.$key$===e.$key$:!1,G=t=>t&&t["s-ol"]||t,be=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,M=(t,e)=>{const s=e.$elm$=t.$elm$,n=t.$children$,o=e.$children$,i=e.$tag$,r=e.$text$;let a;r===null?(y=i==="svg"?!0:i==="foreignObject"?!1:y,i==="slot"||$e(t,e,y),n!==null&&o!==null?nt(s,n,e,o):o!==null?(t.$text$!==null&&(s.textContent=""),ye(s,null,e,o,0,o.length-1)):n!==null&&ve(n,0,n.length-1),y&&i==="svg"&&(y=!1)):(a=s["s-cr"])?a.parentNode.textContent=r:t.$text$!==r&&(s.data=r)},De=t=>{const e=t.childNodes;let s,n,o,i,r,a;for(n=0,o=e.length;n<o;n++)if(s=e[n],s.nodeType===1){if(s["s-sr"]){for(r=s["s-sn"],s.hidden=!1,i=0;i<o;i++)if(a=e[i].nodeType,e[i]["s-hn"]!==s["s-hn"]||r!==""){if(a===1&&r===e[i].getAttribute("slot")){s.hidden=!0;break}}else if(a===1||a===3&&e[i].textContent.trim()!==""){s.hidden=!0;break}}De(s)}},v=[],ke=t=>{let e,s,n,o,i,r,a=0;const l=t.childNodes,c=l.length;for(;a<c;a++){if(e=l[a],e["s-sr"]&&(s=e["s-cr"])&&s.parentNode)for(n=s.parentNode.childNodes,o=e["s-sn"],r=n.length-1;r>=0;r--)s=n[r],!s["s-cn"]&&!s["s-nr"]&&s["s-hn"]!==e["s-hn"]&&(oe(s,o)?(i=v.find(u=>u.$nodeToRelocate$===s),F=!0,s["s-sn"]=s["s-sn"]||o,i?i.$slotRefNode$=e:v.push({$slotRefNode$:e,$nodeToRelocate$:s}),s["s-sr"]&&v.map(u=>{oe(u.$nodeToRelocate$,s["s-sn"])&&(i=v.find(d=>d.$nodeToRelocate$===s),i&&!u.$slotRefNode$&&(u.$slotRefNode$=i.$slotRefNode$))})):v.some(u=>u.$nodeToRelocate$===s)||v.push({$nodeToRelocate$:s}));e.nodeType===1&&ke(e)}},oe=(t,e)=>t.nodeType===1?t.getAttribute("slot")===null&&e===""||t.getAttribute("slot")===e:t["s-sn"]===e?!0:e==="",we=t=>{t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(we)},ot=(t,e)=>{const s=t.$hostElement$,n=t.$cmpMeta$,o=t.$vnode$||P(null,null),i=ze(e)?e:f(null,null,e);q=s.tagName,n.$attrsToReflect$&&(i.$attrs$=i.$attrs$||{},n.$attrsToReflect$.map(([r,a])=>i.$attrs$[a]=s[r])),i.$tag$=null,i.$flags$|=4,t.$vnode$=i,i.$elm$=o.$elm$=s.shadowRoot||s,E=s["s-sc"],he=s["s-cr"],me=(n.$flags$&1)!==0,F=!1,M(o,i);{if(g.$flags$|=1,z){ke(i.$elm$);let r,a,l,c,u,d,h=0;for(;h<v.length;h++)r=v[h],a=r.$nodeToRelocate$,a["s-ol"]||(l=b.createTextNode(""),l["s-nr"]=a,a.parentNode.insertBefore(a["s-ol"]=l,a));for(h=0;h<v.length;h++)if(r=v[h],a=r.$nodeToRelocate$,r.$slotRefNode$){for(c=r.$slotRefNode$.parentNode,u=r.$slotRefNode$.nextSibling,l=a["s-ol"];l=l.previousSibling;)if(d=l["s-nr"],d&&d["s-sn"]===a["s-sn"]&&c===d.parentNode&&(d=d.nextSibling,!d||!d["s-nr"])){u=d;break}(!u&&c!==a.parentNode||a.nextSibling!==u)&&a!==u&&(!a["s-hn"]&&a["s-ol"]&&(a["s-hn"]=a["s-ol"].parentNode.nodeName),c.insertBefore(a,u))}else a.nodeType===1&&(a.hidden=!0)}F&&De(i.$elm$),g.$flags$&=-2,v.length=0}},it=(t,e)=>{},_e=(t,e)=>(t.$flags$|=16,it(t,t.$ancestorComponent$),Tt(()=>rt(t,e))),rt=(t,e)=>{const s=t.$hostElement$,n=S("scheduleUpdate",t.$cmpMeta$.$tagName$),o=s;let i;return e?i=T(o,"componentWillLoad"):i=T(o,"componentWillUpdate"),i=ie(i,()=>T(o,"componentWillRender")),n(),ie(i,()=>at(t,o,e))},at=async(t,e,s)=>{const n=t.$hostElement$,o=S("update",t.$cmpMeta$.$tagName$);n["s-rc"],s&&tt(t);const i=S("render",t.$cmpMeta$.$tagName$);lt(t,e,n),i(),o(),ct(t)},lt=(t,e,s)=>{try{J=e,e=e.render&&e.render(),t.$flags$&=-17,t.$flags$|=2,(C.hasRenderFn||C.reflect)&&(C.vdomRender||C.reflect)&&(C.hydrateServerSide||ot(t,e))}catch(a){L(a,t.$hostElement$)}return J=null,null},ct=t=>{const e=t.$cmpMeta$.$tagName$,s=t.$hostElement$,n=S("postUpdate",e),o=s;t.$ancestorComponent$,T(o,"componentDidRender"),t.$flags$&64?(T(o,"componentDidUpdate"),n()):(t.$flags$|=64,T(o,"componentDidLoad"),n())},T=(t,e,s)=>{if(t&&t[e])try{return t[e](s)}catch(n){L(n)}},ie=(t,e)=>t&&t.then?t.then(e):e(),dt=(t,e)=>H(t).$instanceValues$.get(e),ut=(t,e,s,n)=>{const o=H(t),i=t,r=o.$instanceValues$.get(e),a=o.$flags$,l=i;s=Je(s,n.$members$[e][0]);const c=Number.isNaN(r)&&Number.isNaN(s);if(s!==r&&!c){o.$instanceValues$.set(e,s);{if(n.$watchers$&&a&128){const d=n.$watchers$[e];d&&d.map(h=>{try{l[h](s,r,e)}catch(m){L(m,i)}})}if((a&18)===2){if(l.componentShouldUpdate&&l.componentShouldUpdate(s,r,e)===!1)return;_e(o,!1)}}}},ft=(t,e,s)=>{if(e.$members$){t.watchers&&(e.$watchers$=t.watchers);const n=Object.entries(e.$members$),o=t.prototype;n.map(([i,[r]])=>{(r&31||r&32)&&Object.defineProperty(o,i,{get(){return dt(this,i)},set(a){ut(this,i,a,e)},configurable:!0,enumerable:!0})});{const i=new Map;o.attributeChangedCallback=function(r,a,l){g.jmp(()=>{const c=i.get(r);if(this.hasOwnProperty(c))l=this[c],delete this[c];else if(o.hasOwnProperty(c)&&typeof this[c]=="number"&&this[c]==l)return;this[c]=l===null&&typeof this[c]=="boolean"?!1:l})},t.observedAttributes=n.filter(([r,a])=>a[0]&15).map(([r,a])=>{const l=a[1]||r;return i.set(l,r),a[0]&512&&e.$attrsToReflect$.push([r,l]),l})}}return t},ht=async(t,e,s,n,o)=>{if(!(e.$flags$&32)&&(o=t.constructor,e.$flags$|=32,customElements.whenDefined(s.$tagName$).then(()=>e.$flags$|=128),o.style)){let r=o.style;typeof r!="string"&&(r=r[e.$modeName$=Qe(t)]);const a=ge(s,e.$modeName$);if(!A.has(a)){const l=S("registerStyles",s.$tagName$);Ve(a,r,!!(s.$flags$&1)),l()}}e.$ancestorComponent$,_e(e,!0)},mt=t=>{},pt=t=>{if(!(g.$flags$&1)){const e=H(t),s=e.$cmpMeta$,n=S("connectedCallback",s.$tagName$);e.$flags$&1?(Se(t,e,s.$listeners$),mt(e.$lazyInstance$)):(e.$flags$|=1,s.$flags$&12&&gt(t),s.$members$&&Object.entries(s.$members$).map(([o,[i]])=>{if(i&31&&t.hasOwnProperty(o)){const r=t[o];delete t[o],t[o]=r}}),ht(t,e,s)),n()}},gt=t=>{const e=t["s-cr"]=b.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)},$t=t=>{if(!(g.$flags$&1)){const e=H(t);e.$rmListeners$&&(e.$rmListeners$.map(s=>s()),e.$rmListeners$=void 0)}},yt=(t,e)=>{const s={$flags$:e[0],$tagName$:e[1]};s.$members$=e[2],s.$listeners$=e[3],s.$watchers$=t.$watchers$,s.$attrsToReflect$=[];const n=t.prototype.connectedCallback,o=t.prototype.disconnectedCallback;return Object.assign(t.prototype,{__registerHost(){kt(this,s)},connectedCallback(){pt(this),n&&n.call(this)},disconnectedCallback(){$t(this),o&&o.call(this)},__attachShadow(){this.attachShadow({mode:"open",delegatesFocus:!!(s.$flags$&16)})}}),t.is=s.$tagName$,ft(t,s)},Se=(t,e,s,n)=>{s&&s.map(([o,i,r])=>{const a=bt(t,o),l=vt(e,r),c=Dt(o);g.ael(a,i,l,c),(e.$rmListeners$=e.$rmListeners$||[]).push(()=>g.rel(a,i,l,c))})},vt=(t,e)=>s=>{try{C.lazyLoad||t.$hostElement$[e](s)}catch(n){L(n)}},bt=(t,e)=>e&4?b:e&8?j:e&16?b.body:t,Dt=t=>St?{passive:(t&1)!==0,capture:(t&2)!==0}:(t&2)!==0,xe=new WeakMap,H=t=>xe.get(t),kt=(t,e)=>{const s={$flags$:0,$hostElement$:t,$cmpMeta$:e,$instanceValues$:new Map};return Se(t,s,e.$listeners$),xe.set(t,s)},re=(t,e)=>e in t,L=(t,e)=>(0,console.error)(t,e),A=new Map,wt=[],j=typeof window<"u"?window:{},b=j.document||{head:{}},_t=j.HTMLElement||class{},g={$flags$:0,$resourcesUrl$:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,s,n)=>t.addEventListener(e,s,n),rel:(t,e,s,n)=>t.removeEventListener(e,s,n),ce:(t,e)=>new CustomEvent(t,e)},St=(()=>{let t=!1;try{b.addEventListener("e",null,Object.defineProperty({},"passive",{get(){t=!0}}))}catch{}return t})(),xt=t=>Promise.resolve(t),Ct=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),ae=[],Ce=[],Et=(t,e)=>s=>{t.push(s),W||(W=!0,e&&g.$flags$&4?Mt(Y):g.raf(Y))},le=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(s){L(s)}t.length=0},Y=()=>{le(ae),le(Ce),(W=ae.length>0)&&g.raf(Y)},Mt=t=>xt().then(t),Tt=Et(Ce,!0);function Ee(t,e){const s=new Date(t);return s.setDate(s.getDate()+e),s}function Bt(t,e,s){const n=[],o=Q(t),i=o.getDay()===0?7:o.getDay(),r=Me(t),a=r.getDay()===0?7:r.getDay(),l=s===1?7:s-1,c=[],u=[];{let m=(7-s+i)%7,$=U(o);for(;m>0;)c.push($),$=U($),m-=1;c.reverse();let B=(7-a+l)%7,x=N(r);for(;B>0;)u.push(x),x=N(x),B-=1}let d=o;for(;d.getMonth()===t.getMonth();)n.push(d),d=N(d);return[...c,...n,...u]}function Q(t){return _(new Date(`${String(Be(t)).padStart(4,"0")}-${String(Te(t)).padStart(2,"0")}-01`))}function w(t){if(t instanceof Date)return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Me(t){const e=Q(t);return e.setMonth(e.getMonth()+1),e.setDate(e.getDate()-1),e}function Te(t){return t.getMonth()+1}function It(t){return new Array(12).fill(void 0).map((e,s)=>{const n=_(new Date(`2006-${String(s+1).padStart(2,"0")}-01`));return Intl.DateTimeFormat(t,{month:"long"}).format(n)})}function N(t){return Ee(t,1)}function ce(t){const e=new Date(t);return e.setDate(1),e.setMonth(e.getMonth()+1),e}function de(t){const e=new Date(t);return e.setFullYear(e.getFullYear()+1),e}function U(t){return Ie(t,1)}function ue(t){const e=new Date(t);return e.setDate(1),e.setMonth(e.getMonth()-1),e}function fe(t){const e=new Date(t);return e.setFullYear(e.getFullYear()-1),e}function Lt(t,e){return new Array(7).fill(void 0).map((s,n)=>(t+n)%7+1).map(s=>{const n=_(new Date(`2006-01-0${s}`));return[Intl.DateTimeFormat(e,{weekday:"short"}).format(n),Intl.DateTimeFormat(e,{weekday:"long"}).format(n)]})}function Be(t){return t.getFullYear()}function Ot(t,e){if(!t||!e||!e.from||!e.to)return!1;const s=e.from<e.to?e.from:e.to,n=e.from<e.to?e.to:e.from;return t>=s&&t<=n}function k(t,e){return!t||!e?!1:t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}function _(t){const e=new Date(t);return e.setMinutes(e.getMinutes()+e.getTimezoneOffset()),e}function Ie(t,e){const s=new Date(t);return s.setDate(s.getDate()-e),s}const Nt=".visually-hidden.sc-wc-datepicker{position:absolute;overflow:hidden;width:1px;height:1px;white-space:nowrap;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%)}",Ft={clearButton:"Clear value",monthSelect:"Select month",nextMonthButton:"Next month",nextYearButton:"Next year",picker:"Choose date",previousMonthButton:"Previous month",previousYearButton:"Previous year",todayButton:"Show today",yearSelect:"Select year"},Pt=yt(class extends _t{constructor(){super(),this.__registerHost(),this.selectDate=ee(this,"selectDate",7),this.changeMonth=ee(this,"changeMonth",7),this.disabled=!1,this.disableDate=()=>!1,this.elementClassName="wc-datepicker",this.firstDayOfWeek=0,this.labels=Ft,this.locale=(navigator==null?void 0:navigator.language)||"en-US",this.showClearButton=!1,this.showMonthStepper=!0,this.showTodayButton=!1,this.showYearStepper=!1,this.startDate=w(new Date),this.init=()=>{this.currentDate=this.startDate?_(new Date(this.startDate)):new Date,this.updateWeekdays()},this.nextMonth=()=>{this.updateCurrentDate(ce(this.currentDate))},this.nextYear=()=>{this.updateCurrentDate(de(this.currentDate))},this.previousMonth=()=>{this.updateCurrentDate(ue(this.currentDate))},this.previousYear=()=>{this.updateCurrentDate(fe(this.currentDate))},this.showToday=()=>{this.updateCurrentDate(new Date)},this.clear=()=>{this.value=void 0,this.selectDate.emit(void 0)},this.onClick=t=>{if(this.disabled)return;const e=t.target.closest("[data-date]");if(!e)return;const s=_(new Date(e.dataset.date));this.updateCurrentDate(s),this.onSelectDate(s)},this.onMonthSelect=t=>{const e=+t.target.value-1,s=new Date(this.currentDate);s.setMonth(e),this.updateCurrentDate(s)},this.onYearSelect=t=>{let e=+t.target.value;const s=t.target;isNaN(e)?(e=new Date().getFullYear(),s.value=String(e)):e<0?(e=0,s.value=String(e)):e>9999&&(e=9999,s.value=String(e));const n=new Date(this.currentDate);n.setFullYear(e),this.updateCurrentDate(n)},this.onKeyDown=t=>{this.disabled||(t.code==="ArrowLeft"?(t.preventDefault(),this.updateCurrentDate(U(this.currentDate),!0)):t.code==="ArrowRight"?(t.preventDefault(),this.updateCurrentDate(N(this.currentDate),!0)):t.code==="ArrowUp"?(t.preventDefault(),this.updateCurrentDate(Ie(this.currentDate,7),!0)):t.code==="ArrowDown"?(t.preventDefault(),this.updateCurrentDate(Ee(this.currentDate,7),!0)):t.code==="PageUp"?(t.preventDefault(),t.shiftKey?this.updateCurrentDate(fe(this.currentDate),!0):this.updateCurrentDate(ue(this.currentDate),!0)):t.code==="PageDown"?(t.preventDefault(),t.shiftKey?this.updateCurrentDate(de(this.currentDate),!0):this.updateCurrentDate(ce(this.currentDate),!0)):t.code==="Home"?(t.preventDefault(),this.updateCurrentDate(Q(this.currentDate),!0)):t.code==="End"?(t.preventDefault(),this.updateCurrentDate(Me(this.currentDate),!0)):(t.code==="Space"||t.code==="Enter")&&(t.preventDefault(),this.onSelectDate(this.currentDate)))},this.onMouseEnter=t=>{if(this.disabled)return;const e=_(new Date(t.target.closest("td").dataset.date));this.hoveredDate=e},this.onMouseLeave=()=>{this.hoveredDate=void 0}}componentWillLoad(){this.init()}watchFirstDayOfWeek(){this.updateWeekdays()}watchLocale(){this.locale||(this.locale=(navigator==null?void 0:navigator.language)||"en-US"),this.updateWeekdays()}watchRange(){this.value=void 0,this.selectDate.emit(void 0)}watchStartDate(){this.currentDate=this.startDate?_(new Date(this.startDate)):new Date}watchValue(){this.value&&(Array.isArray(this.value)&&this.value.length>=1?this.currentDate=this.value[0]:this.value instanceof Date&&(this.currentDate=this.value))}componentDidRender(){this.moveFocusAfterMonthChanged&&(this.focusDate(this.currentDate),this.moveFocusAfterMonthChanged=!1)}updateWeekdays(){this.weekdays=Lt(this.firstDayOfWeek===0?7:this.firstDayOfWeek,this.locale)}getClassName(t){return t?`${this.elementClassName}__${t}`:this.elementClassName}getCalendarRows(){const t=Bt(this.currentDate,!0,this.firstDayOfWeek===0?7:this.firstDayOfWeek),e=[];for(let s=0;s<t.length;s+=7){const n=t.slice(s,s+7);e.push(n)}return e}getTitle(){if(this.currentDate)return Intl.DateTimeFormat(this.locale,{day:"numeric",month:"long",year:"numeric"}).format(this.currentDate)}focusDate(t){var e;(e=this.el.querySelector(`[data-date="${w(t)}"]`))===null||e===void 0||e.focus()}updateCurrentDate(t,e){const s=t.getMonth(),n=t.getFullYear();if(n>9999||n<0)return;(s!==this.currentDate.getMonth()||n!==this.currentDate.getFullYear())&&(this.changeMonth.emit({month:Te(t),year:Be(t)}),e&&(this.moveFocusAfterMonthChanged=!0)),this.currentDate=t,e&&this.focusDate(this.currentDate)}onSelectDate(t){var e,s;if(!this.disableDate(t))if(this.isRangeValue(this.value)){const n=((e=this.value)===null||e===void 0?void 0:e[0])===void 0||this.value.length===2?[t]:[this.value[0],t];n.length===2&&n[0]>n[1]&&n.reverse();const o=n[1]===void 0?[w(n[0])]:[w(n[0]),w(n[1])];this.value=n,this.selectDate.emit(o)}else{if(((s=this.value)===null||s===void 0?void 0:s.getTime())===t.getTime())return;this.value=t,this.selectDate.emit(w(t))}}isRangeValue(t){return this.range}render(){const t=this.showTodayButton||this.showClearButton;return f(pe,null,f("div",{"aria-disabled":String(this.disabled),"aria-label":this.labels.picker,class:{[this.getClassName()]:!0,[`${this.getClassName()}--disabled`]:this.disabled},role:"group"},f("div",{class:this.getClassName("header")},f("span",{"aria-atomic":"true","aria-live":"polite",class:"visually-hidden"},this.getTitle()),this.showYearStepper&&f("button",{"aria-label":this.labels.previousYearButton,class:this.getClassName("previous-year-button"),disabled:this.disabled,innerHTML:this.previousYearButtonContent||void 0,onClick:this.previousYear,type:"button"},f("svg",{fill:"none",height:"24","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24",width:"24"},f("polyline",{points:"11 17 6 12 11 7"}),f("polyline",{points:"18 17 13 12 18 7"}))),this.showMonthStepper&&f("button",{"aria-label":this.labels.previousMonthButton,class:this.getClassName("previous-month-button"),disabled:this.disabled,innerHTML:this.previousMonthButtonContent||void 0,onClick:this.previousMonth,type:"button"},f("svg",{fill:"none",height:"24","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24",width:"24"},f("polyline",{points:"15 18 9 12 15 6"}))),f("span",{class:this.getClassName("current-month")},f("select",{"aria-label":this.labels.monthSelect,class:this.getClassName("month-select"),disabled:this.disabled,name:"month",onChange:this.onMonthSelect},It(this.locale).map((e,s)=>f("option",{key:e,selected:this.currentDate.getMonth()===s,value:s+1},e))),f("input",{"aria-label":this.labels.yearSelect,class:this.getClassName("year-select"),disabled:this.disabled,max:9999,maxLength:4,min:1,name:"year",onChange:this.onYearSelect,type:"number",value:this.currentDate.getFullYear()})),this.showMonthStepper&&f("button",{"aria-label":this.labels.nextMonthButton,class:this.getClassName("next-month-button"),disabled:this.disabled,innerHTML:this.nextMonthButtonContent||void 0,onClick:this.nextMonth,type:"button"},f("svg",{fill:"none",height:"24","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24",width:"24"},f("polyline",{points:"9 18 15 12 9 6"}))),this.showYearStepper&&f("button",{"aria-label":this.labels.nextYearButton,class:this.getClassName("next-year-button"),disabled:this.disabled,innerHTML:this.nextYearButtonContent||void 0,onClick:this.nextYear,type:"button"},f("svg",{fill:"none",height:"24","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24",width:"24"},f("polyline",{points:"13 17 18 12 13 7"}),f("polyline",{points:"6 17 11 12 6 7"})))),f("div",{class:this.getClassName("body")},f("table",{class:this.getClassName("calendar"),onKeyDown:this.onKeyDown,role:"grid"},f("thead",{class:this.getClassName("calendar-header")},f("tr",{class:this.getClassName("weekday-row")},this.weekdays.map(e=>f("th",{abbr:e[1],class:this.getClassName("weekday"),key:e[0],scope:"col"},f("span",null,e[0]))))),f("tbody",null,this.getCalendarRows().map(e=>{const s=`row-${e[0].getMonth()}-${e[0].getDate()}`;return f("tr",{class:this.getClassName("calendar-row"),key:s},e.map(n=>{var o,i,r,a,l;const c=k(n,this.currentDate),u=n.getMonth()!==this.currentDate.getMonth(),d=Array.isArray(this.value)?k(n,this.value[0])||k(n,this.value[1]):k(n,this.value),h=this.isRangeValue?Ot(n,{from:(o=this.value)===null||o===void 0?void 0:o[0],to:((i=this.value)===null||i===void 0?void 0:i[1])||this.hoveredDate||this.currentDate}):!1,m=!((r=this.value)===null||r===void 0)&&r[0]?[(a=this.value)===null||a===void 0?void 0:a[0],((l=this.value)===null||l===void 0?void 0:l[1])||this.hoveredDate].sort((Fe,Pe)=>Fe-Pe):[],$=this.range&&k(m[0],n),D=this.range&&k(m[1],n),B=k(n,new Date),x=this.disableDate(n),Le=`cell-${n.getMonth()}-${n.getDate()}`,Oe={[this.getClassName("date")]:!0,[this.getClassName("date--current")]:c,[this.getClassName("date--disabled")]:x,[this.getClassName("date--overflowing")]:u,[this.getClassName("date--today")]:B,[this.getClassName("date--selected")]:d,[this.getClassName("date--in-range")]:h,[this.getClassName("date--start")]:$,[this.getClassName("date--end")]:D},Ne=d?"strong":B?"em":"span";return f("td",{"aria-disabled":String(x),"aria-selected":d?"true":void 0,class:Oe,"data-date":w(n),key:Le,onClick:this.onClick,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,role:"gridcell",tabIndex:k(n,this.currentDate)&&!this.disabled?0:-1},f(Ne,{"aria-hidden":"true"},n.getDate()),f("span",{class:"visually-hidden"},Intl.DateTimeFormat(this.locale,{day:"numeric",month:"long"}).format(n)))}))})))),t&&f("div",{class:this.getClassName("footer")},this.showTodayButton&&f("button",{class:this.getClassName("today-button"),disabled:this.disabled,innerHTML:this.todayButtonContent||void 0,onClick:this.showToday,type:"button"},this.labels.todayButton),this.showClearButton&&f("button",{class:this.getClassName("clear-button"),disabled:this.disabled,innerHTML:this.clearButtonContent||void 0,onClick:this.clear,type:"button"},this.labels.clearButton))))}get el(){return this}static get watchers(){return{firstDayOfWeek:["watchFirstDayOfWeek"],locale:["watchLocale"],range:["watchRange"],startDate:["watchStartDate"],value:["watchValue"]}}static get style(){return Nt}},[2,"wc-datepicker",{clearButtonContent:[1,"clear-button-content"],disabled:[4],disableDate:[16],elementClassName:[1,"element-class-name"],firstDayOfWeek:[2,"first-day-of-week"],range:[4],labels:[16],locale:[1],nextMonthButtonContent:[1,"next-month-button-content"],nextYearButtonContent:[1,"next-year-button-content"],previousMonthButtonContent:[1,"previous-month-button-content"],previousYearButtonContent:[1,"previous-year-button-content"],showClearButton:[4,"show-clear-button"],showMonthStepper:[4,"show-month-stepper"],showTodayButton:[4,"show-today-button"],showYearStepper:[4,"show-year-stepper"],startDate:[1,"start-date"],todayButtonContent:[1,"today-button-content"],value:[1040],currentDate:[32],hoveredDate:[32],weekdays:[32]}]),Rt=Pt;var At={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_IS_DEVELOPMENT:"false",VITE_RAHUI_BOOKING_LOCAL_SERVER_URL:"http://localhost:3001",VITE_TEST_ROOT_ELEMENT:"false"};class qt{constructor({apiKey:e,rootElementId:s,content:n}){p(this,"apiKey","");p(this,"rootElementId","");p(this,"widgetContainer",null);p(this,"form",null);p(this,"formId","rahui-booking-form");p(this,"datePickerId","date-picker");p(this,"timePickerHoursId","time-picker-hours");p(this,"timePickerMinutesId","time-picker-minutes");p(this,"datePickerHiddenInputId","hidden-date-input");p(this,"confirmationContainerElementId","confirmation-message-container");p(this,"confirmationBookingDatetimeElementId","confirmation-booking-datetime");p(this,"confirmationBookingCoversElementId","confirmation-booking-number-of-covers");p(this,"errorMessageElementId","error-message");p(this,"heading","");p(this,"buttonText","");this.apiKey=e,this.rootElementId=s||"",this.heading=(n==null?void 0:n.heading)||"Book a table",this.buttonText=(n==null?void 0:n.buttonText)||"Create booking",this.initialize(),this.injectStyles(),this.setupEventListenersForRequiredFields()}async initialize(){var o;let e,s;this.rootElementId.length?e=document.getElementById(this.rootElementId):(s=document.createElement("div"),document.body.appendChild(s)),this.widgetContainer=document.createElement("div"),this.widgetContainer.classList.add("widget__container"),this.createWidgetContent(),(o=e||s)==null||o.appendChild(this.widgetContainer),this.form=document.getElementById(this.formId),this.form&&this.form.addEventListener("submit",this.formSubmit.bind(this)),customElements.define("wc-datepicker",Rt);const n=document.getElementById(this.datePickerId);n&&(n.disableDate=function(i){const r=new Date,a=new Date(r.setHours(0,0,0));return new Date(i.setHours(15,0,0)).getTime()<a.getTime()},n.addEventListener("selectDate",i=>{const r=document.getElementById(this.datePickerHiddenInputId);r&&(r.value=i.detail),this.getOpeningHours(i.detail)})),this.getWidgetSettings(),this.getOpeningHours()}apiBaseUrl(){const{VITE_IS_DEVELOPMENT:e,VITE_RAHUI_BOOKING_LOCAL_SERVER_URL:s}=At;return e==="true"?s:"https://rahui-booking.com"}async formSubmit(e){e.preventDefault();const s=new FormData(e.target),n=Object.fromEntries(s.entries()),o=new Date(n["booking[date]"]),i=n["booking[time][hours]"],r=n["booking[time][minutes]"],l=new Date(o.setHours(parseInt(i),parseInt(r),0)).toUTCString(),c=String(n["booking[number_of_covers]"]),u=String(n["booking[notes]"]),d=String(n["customer[first_name]"]),h=String(n["customer[last_name]"]),m=String(n["customer[email]"]),$=String(n["customer[phone]"]),D={"widget-submission":!0,booking:{datetime:l,number_of_covers:c,notes:u},customer:{first_name:d,last_name:h,email:m,phone:$}};await this.forwardFormSubmissionToServer(D)}async getWidgetSettings(){const e=`${this.apiBaseUrl()}/api/widgets/settings`,s=await fetch(e,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},method:"GET"});if(s.status===200){const n=await s.json();this.applySettings(n)}else console.error({body:await s.json()})}applySettings(e){this.setMaxCoversPerBooking(e)}setMaxCoversPerBooking(e){const s=e.max_covers_per_booking,n=document.getElementById("number_of_covers_label"),o=document.getElementById("number_of_covers");s&&n&&o&&(n.textContent=n.textContent+` (max: ${s})`,o.max=String(s))}async getOpeningHours(e=void 0){const s=Intl.DateTimeFormat().resolvedOptions().timeZone,n=e&&s?`?date=${e}&timezone=${s}`:void 0,o=n?`${this.apiBaseUrl()}/api/widgets/opening_hours${n}`:`${this.apiBaseUrl()}/api/widgets/opening_hours`,i=await fetch(o,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},method:"GET"});if(i.status===200){const r=await i.json();this.applyOpeningHours(r)}else console.error({body:await i.json()})}applyOpeningHours(e){const s=document.getElementById(this.timePickerHoursId);if(s&&e){const{open_at:n,close_at:o}=e==null?void 0:e.opening_hours,i=Array.from(Array(23).keys()).map(a=>{const l=document.createElement("option");return l.value=String(a),l.innerHTML=a<10?String(a).padStart(2,"0"):String(a),l}),r=[];i.forEach(a=>{a.value>=n&&a.value<=o&&r.push(a)}),s.innerHTML="",s.append(...r)}}async forwardFormSubmissionToServer(e){const s=`${this.apiBaseUrl()}/api/widgets/create_booking`;if(s&&e){const n=await fetch(s,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},method:"POST",body:JSON.stringify(e)});if(this.hideErrorMessage(),n.status===201){const o=await n.json();this.hideForm(),this.showConfirmationMessage(o)}else console.error({body:await n.json()}),this.showErrorMessage()}}hideForm(){const e=document.getElementById(this.formId);e&&(e.style.visibility="hidden")}showConfirmationMessage(e){const s=document.getElementById(this.confirmationContainerElementId),n=document.getElementById(this.confirmationBookingDatetimeElementId),o=document.getElementById(this.confirmationBookingCoversElementId);if(!(!s||!e)){if(n){const i=new Date(e.datetime),r=Intl.DateTimeFormat().resolvedOptions().locale,a=new Intl.DateTimeFormat(r,{dateStyle:"full",timeStyle:"short"}).format(i);n.textContent=a}if(o){const i=String(e.number_of_covers),r=e.number_of_covers===1?`${i} Person | `:`${i} People | `;o.textContent=r}s.style.display="flex",s.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}}hideErrorMessage(){const e=document.getElementById(this.errorMessageElementId);e&&(e.style.display="none")}showErrorMessage(){const e=document.getElementById(this.errorMessageElementId);e&&(e.style.display="block")}createWidgetContent(){this.widgetContainer.innerHTML=He({heading:this.heading,buttonText:this.buttonText,formId:this.formId,datePickerHiddenInputId:this.datePickerHiddenInputId,datePickerId:this.datePickerId,timePickerHoursId:this.timePickerHoursId,timePickerMinutesId:this.timePickerMinutesId})}injectStyles(){const e=document.createElement("style");e.innerHTML=qe.replace(/^\s+|\n/gm,""),document.head.appendChild(e)}setupEventListenersForRequiredFields(){const e=document.getElementById("customer_first_name"),s=document.getElementById("customer_last_name");[e,s].forEach(n=>{const o=[e,s];this.handleToggleRequiredFields({relatedFields:o}),n&&n.addEventListener("change",()=>this.handleToggleRequiredFields({relatedFields:o}))})}getRequiredSymbolFor(e){const s=e.id+"_required_symbol";return document.getElementById(s)}toggleRequiredSymbolFor(e){const s=this.getRequiredSymbolFor(e);s&&(s.style.display="none")}handleToggleRequiredFields({relatedFields:e}){const[s,n]=e,o=e.every(r=>r.value.length>0),i=e.every(r=>r.value.length===0);(o||i)&&e.forEach(r=>{const a=this.getRequiredSymbolFor(r);a&&(a.style.display="inline"),r.required=!0}),s.value.length>0&&n.value.length===0&&(this.toggleRequiredSymbolFor(n),n.required=!1),n.value.length>0&&s.value.length===0&&(this.toggleRequiredSymbolFor(s),s.required=!1)}}window.RahuiWidget=qt;
