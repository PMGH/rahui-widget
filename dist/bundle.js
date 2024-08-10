var At=Object.defineProperty;var jt=(w,k,E)=>k in w?At(w,k,{enumerable:!0,configurable:!0,writable:!0,value:E}):w[k]=E;var g=(w,k,E)=>jt(w,typeof k!="symbol"?k+"":k,E);(function(){"use strict";var w=document.createElement("style");w.textContent=`wc-datepicker,wc-datepicker *,wc-datepicker *:before,wc-datepicker *:after{margin:0;padding:0;box-sizing:border-box}wc-datepicker{display:inline-flex}.wc-datepicker{display:block;width:min-content;min-width:17rem;max-width:24rem;border:.0625rem solid #f2f3f5;color:#111;background-color:#fff;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-size:1rem;font-weight:400;line-height:1.5}.wc-datepicker--disabled *:disabled{opacity:.5;cursor:default}.wc-datepicker--disabled .wc-datepicker__weekday{color:#767676}.wc-datepicker--disabled .wc-datepicker__date:focus>*{outline:none}.wc-datepicker--disabled .wc-datepicker__date{cursor:default;opacity:.5}.wc-datepicker--disabled .wc-datepicker__date:hover>*{background-color:transparent}.wc-datepicker--disabled .wc-datepicker__date--in-range:hover>*{background-color:#f2f3f5}.wc-datepicker--disabled .wc-datepicker__date--selected:hover>*{color:#fff;background-color:#00f}.wc-datepicker__header{display:flex;padding:.75rem;align-items:center;gap:.5rem}.wc-datepicker__current-month{display:flex;flex-grow:1;gap:.5rem}.wc-datepicker__month-select,.wc-datepicker__year-select{display:flex;height:2rem;padding-right:.5rem;padding-left:.5rem;align-items:center;border:none;border-radius:.25rem;color:#111;background:#f2f3f5;font:inherit;line-height:1.125}.wc-datepicker__month-select{flex-grow:1;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.wc-datepicker__year-select{max-width:5rem}.wc-datepicker__previous-month-button,.wc-datepicker__next-month-button,.wc-datepicker__previous-year-button,.wc-datepicker__next-year-button{display:inline-flex;width:2rem;height:2rem;padding:.375rem;flex-shrink:0;justify-content:center;align-items:center;border:none;border-radius:.25rem;color:#111;background-color:transparent;background-color:#f2f3f5;cursor:pointer}.wc-datepicker__body{padding-right:.75rem;padding-bottom:.75rem;padding-left:.75rem}.wc-datepicker__calendar{width:100%;table-layout:fixed;border-collapse:collapse}.wc-datepicker__weekday>span{display:flex;padding:.125rem;justify-content:center;align-items:center;font-weight:600;aspect-ratio:1}.wc-datepicker__date{padding:.125rem;text-align:center;cursor:pointer}.wc-datepicker__date:focus{outline:none}.wc-datepicker__date:focus>*{outline:.125rem solid #0000ff}.wc-datepicker__date:hover>*{background-color:#f2f3f5}.wc-datepicker__date>*{display:flex;justify-content:center;align-items:center;border-radius:.25rem;aspect-ratio:1}.wc-datepicker__date--today>*{font-weight:700;font-style:normal}.wc-datepicker__date--in-range>*{background-color:#f2f3f5}.wc-datepicker__date--selected>*,.wc-datepicker__date--selected:hover>*{color:#fff;background-color:#00f;font-weight:500}.wc-datepicker__date--disabled{color:#767676;cursor:default}.wc-datepicker__date--disabled:not(.wc-datepicker__date--selected):not(.wc-datepicker__date--in-range):hover>*{background-color:transparent}.wc-datepicker__date--disabled.wc-datepicker__date--in-range:not(.wc-datepicker__date--selected):not(.wc-datepicker__date--in-range)>*{background-color:transparent}.wc-datepicker__footer{display:flex;padding-right:.75rem;padding-bottom:.75rem;padding-left:.75rem;align-items:center;gap:.5rem}.wc-datepicker__clear-button,.wc-datepicker__today-button{display:inline-flex;height:2rem;padding-right:.5rem;padding-left:.5rem;justify-content:center;align-items:center;border:none;border-radius:.25rem;color:#111;background-color:#f2f3f5;font:inherit;line-height:1;cursor:pointer}
`,document.head.appendChild(w);const k=`
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
`,E=({heading:t,buttonText:e,formId:n,datePickerHiddenInputId:s,datePickerId:i,timePickerHoursId:r,timePickerMinutesId:o})=>`
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

  <form id="${n}">
    <input type="hidden" id="widget-submission" name="widget-submission" value="true">
    <div class="form__field__group">
      <div class="form__field">
        <div class="form__field__required">
          <label for="booking[date]">Booking (date and time)</label><span class="required-field-symbol">*</span>
          <input type="hidden" id="${s}" name="booking[date]">
        </div>
        <wc-datepicker id="${i}" first-day-of-week="1" id="${i}"></wc-datepicker>
        <div class="time-select-container">
          <select id="${r}" name="booking[time][hours]" required class="time-select" data-time="hours">
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
          <select id="${o}" name="booking[time][minutes]" required class="time-select" data-time="minutes">
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
`,M={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!1,cmpDidUpdate:!0,cmpDidRender:!0,cmpWillLoad:!0,cmpWillUpdate:!0,cmpWillRender:!0,connectedCallback:!0,disconnectedCallback:!0,element:!0,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!0,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!0,mode:!0,observeAttribute:!0,prop:!0,propMutable:!0,reflect:!0,scoped:!0,shadowDom:!0,slot:!0,cssAnnotations:!0,state:!0,style:!0,svg:!0,updatable:!0,vdomAttribute:!0,vdomXlink:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomPropOrAttr:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,hotModuleReplacement:!1,isDebug:!1,isDev:!1,isTesting:!1,hydrateServerSide:!1,hydrateClientSide:!1,lifecycleDOMEvents:!1,lazyLoad:!1,profile:!1,slotRelocation:!0,appendChildSlotFix:!1,cloneNodeFix:!1,hydratedAttribute:!1,hydratedClass:!0,safari10:!1,scriptDataOpts:!1,scopedSlotTextContentFix:!1,shadowDomShim:!1,slotChildNodesFix:!1,invisiblePrehydration:!0,propBoolean:!0,propNumber:!0,propString:!0,cssVarShim:!1,constructableCSS:!0,cmpShouldUpdate:!0,devTools:!1,dynamicImportShim:!1,shadowDelegatesFocus:!0,initializeNextTick:!1,asyncLoading:!1,asyncQueue:!1,transformTagName:!1,attachStyles:!0};let T,V,R,ee=!1,P=!1,z=!1,$=!1,te=null,K=!1;const S=(t,e="")=>()=>{},ne="http://www.w3.org/1999/xlink",se={},Fe="http://www.w3.org/2000/svg",Re="http://www.w3.org/1999/xhtml",Pe=t=>t!=null,G=t=>(t=typeof t,t==="object"||t==="function");function Ae(t){var e,n,s;return(s=(n=(e=t.head)===null||e===void 0?void 0:e.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:void 0}const f=(t,e,...n)=>{let s=null,i=null,r=null,o=!1,a=!1;const l=[],c=d=>{for(let h=0;h<d.length;h++)s=d[h],Array.isArray(s)?c(s):s!=null&&typeof s!="boolean"&&((o=typeof t!="function"&&!G(s))&&(s=String(s)),o&&a?l[l.length-1].$text$+=s:l.push(o?A(null,s):s),a=o)};if(c(n),e){e.key&&(i=e.key),e.name&&(r=e.name);{const d=e.className||e.class;d&&(e.class=typeof d!="object"?d:Object.keys(d).filter(h=>d[h]).join(" "))}}if(typeof t=="function")return t(e===null?{}:e,l,qe);const u=A(t,null);return u.$attrs$=e,l.length>0&&(u.$children$=l),u.$key$=i,u.$name$=r,u},A=(t,e)=>{const n={$flags$:0,$tag$:t,$text$:e,$elm$:null,$children$:null};return n.$attrs$=null,n.$key$=null,n.$name$=null,n},ie={},je=t=>t&&t.$tag$===ie,qe={forEach:(t,e)=>t.map(oe).forEach(e),map:(t,e)=>t.map(oe).map(e).map(He)},oe=t=>({vattrs:t.$attrs$,vchildren:t.$children$,vkey:t.$key$,vname:t.$name$,vtag:t.$tag$,vtext:t.$text$}),He=t=>{if(typeof t.vtag=="function"){const n=Object.assign({},t.vattrs);return t.vkey&&(n.key=t.vkey),t.vname&&(n.name=t.vname),f(t.vtag,n,...t.vchildren||[])}const e=A(t.vtag,t.vtext);return e.$attrs$=t.vattrs,e.$children$=t.vchildren,e.$key$=t.vkey,e.$name$=t.vname,e},Ue=t=>$t.map(e=>e(t)).find(e=>!!e),We=(t,e)=>t!=null&&!G(t)?e&4?t==="false"?!1:t===""||!!t:e&2?parseFloat(t):e&1?String(t):t:t,Ye=t=>t,re=(t,e,n)=>{const s=Ye(t);return{emit:i=>ze(s,e,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:i})}},ze=(t,e,n)=>{const s=m.ce(e,n);return t.dispatchEvent(s),s},ae=new WeakMap,Ke=(t,e,n)=>{let s=U.get(t);kt&&n?(s=s||new CSSStyleSheet,typeof s=="string"?s=e:s.replaceSync(e)):s=e,U.set(t,s)},Ge=(t,e,n,s)=>{var i;let r=le(e,n);const o=U.get(r);if(t=t.nodeType===11?t:v,o)if(typeof o=="string"){t=t.head||t;let a=ae.get(t),l;if(a||ae.set(t,a=new Set),!a.has(r)){{l=v.createElement("style"),l.innerHTML=o;const c=(i=m.$nonce$)!==null&&i!==void 0?i:Ae(v);c!=null&&l.setAttribute("nonce",c),t.insertBefore(l,t.querySelector("link"))}a&&a.add(r)}}else t.adoptedStyleSheets.includes(o)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,o]);return r},Qe=t=>{const e=t.$cmpMeta$,n=t.$hostElement$,s=e.$flags$,i=S("attachStyles",e.$tagName$),r=Ge(n.shadowRoot?n.shadowRoot:n.getRootNode(),e,t.$modeName$);s&10&&(n["s-sc"]=r,n.classList.add(r+"-h"),s&2&&n.classList.add(r+"-s")),i()},le=(t,e)=>"sc-"+(e&&t.$flags$&32?t.$tagName$+"-"+e:t.$tagName$),ce=(t,e,n,s,i,r)=>{if(n!==s){let o=we(t,e),a=e.toLowerCase();if(e==="class"){const l=t.classList,c=de(n),u=de(s);l.remove(...c.filter(d=>d&&!u.includes(d))),l.add(...u.filter(d=>d&&!c.includes(d)))}else if(e==="style"){for(const l in n)(!s||s[l]==null)&&(l.includes("-")?t.style.removeProperty(l):t.style[l]="");for(const l in s)(!n||s[l]!==n[l])&&(l.includes("-")?t.style.setProperty(l,s[l]):t.style[l]=s[l])}else if(e!=="key")if(e==="ref")s&&s(t);else if(!t.__lookupSetter__(e)&&e[0]==="o"&&e[1]==="n")e[2]==="-"?e=e.slice(3):we(W,a)?e=a.slice(2):e=a[2]+e.slice(3),n&&m.rel(t,e,n,!1),s&&m.ael(t,e,s,!1);else{const l=G(s);if((o||l&&s!==null)&&!i)try{if(t.tagName.includes("-"))t[e]=s;else{const u=s??"";e==="list"?o=!1:(n==null||t[e]!=u)&&(t[e]=u)}}catch{}let c=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(e=a,c=!0),s==null||s===!1?(s!==!1||t.getAttribute(e)==="")&&(c?t.removeAttributeNS(ne,e):t.removeAttribute(e)):(!o||r&4||i)&&!l&&(s=s===!0?"":s,c?t.setAttributeNS(ne,e,s):t.setAttribute(e,s))}}},Je=/\s/,de=t=>t?t.split(Je):[],ue=(t,e,n,s)=>{const i=e.$elm$.nodeType===11&&e.$elm$.host?e.$elm$.host:e.$elm$,r=t&&t.$attrs$||se,o=e.$attrs$||se;for(s in r)s in o||ce(i,s,r[s],void 0,n,e.$flags$);for(s in o)ce(i,s,r[s],o[s],n,e.$flags$)},j=(t,e,n,s)=>{const i=e.$children$[n];let r=0,o,a,l;if(ee||(z=!0,i.$tag$==="slot"&&(T&&s.classList.add(T+"-s"),i.$flags$|=i.$children$?2:1)),i.$text$!==null)o=i.$elm$=v.createTextNode(i.$text$);else if(i.$flags$&1)o=i.$elm$=v.createTextNode("");else{if($||($=i.$tag$==="svg"),o=i.$elm$=v.createElementNS($?Fe:Re,i.$flags$&2?"slot-fb":i.$tag$),$&&i.$tag$==="foreignObject"&&($=!1),ue(null,i,$),Pe(T)&&o["s-si"]!==T&&o.classList.add(o["s-si"]=T),i.$children$)for(r=0;r<i.$children$.length;++r)a=j(t,i,r,o),a&&o.appendChild(a);i.$tag$==="svg"?$=!1:o.tagName==="foreignObject"&&($=!0)}return o["s-hn"]=R,i.$flags$&3&&(o["s-sr"]=!0,o["s-cr"]=V,o["s-sn"]=i.$name$||"",l=t&&t.$children$&&t.$children$[n],l&&l.$tag$===i.$tag$&&t.$elm$&&N(t.$elm$,!1)),o},N=(t,e)=>{m.$flags$|=1;const n=t.childNodes;for(let s=n.length-1;s>=0;s--){const i=n[s];i["s-hn"]!==R&&i["s-ol"]&&(pe(i).insertBefore(i,Q(i)),i["s-ol"].remove(),i["s-ol"]=void 0,z=!0),e&&N(i,e)}m.$flags$&=-2},fe=(t,e,n,s,i,r)=>{let o=t["s-cr"]&&t["s-cr"].parentNode||t,a;for(o.shadowRoot&&o.tagName===R&&(o=o.shadowRoot);i<=r;++i)s[i]&&(a=j(null,n,i,t),a&&(s[i].$elm$=a,o.insertBefore(a,Q(e))))},he=(t,e,n,s,i)=>{for(;e<=n;++e)(s=t[e])&&(i=s.$elm$,ye(s),P=!0,i["s-ol"]?i["s-ol"].remove():N(i,!0),i.remove())},Xe=(t,e,n,s)=>{let i=0,r=0,o=0,a=0,l=e.length-1,c=e[0],u=e[l],d=s.length-1,h=s[0],p=s[d],y,_;for(;i<=l&&r<=d;)if(c==null)c=e[++i];else if(u==null)u=e[--l];else if(h==null)h=s[++r];else if(p==null)p=s[--d];else if(q(c,h))B(c,h),c=e[++i],h=s[++r];else if(q(u,p))B(u,p),u=e[--l],p=s[--d];else if(q(c,p))(c.$tag$==="slot"||p.$tag$==="slot")&&N(c.$elm$.parentNode,!1),B(c,p),t.insertBefore(c.$elm$,u.$elm$.nextSibling),c=e[++i],p=s[--d];else if(q(u,h))(c.$tag$==="slot"||p.$tag$==="slot")&&N(u.$elm$.parentNode,!1),B(u,h),t.insertBefore(u.$elm$,c.$elm$),u=e[--l],h=s[++r];else{for(o=-1,a=i;a<=l;++a)if(e[a]&&e[a].$key$!==null&&e[a].$key$===h.$key$){o=a;break}o>=0?(_=e[o],_.$tag$!==h.$tag$?y=j(e&&e[r],n,o,t):(B(_,h),e[o]=void 0,y=_.$elm$),h=s[++r]):(y=j(e&&e[r],n,r,t),h=s[++r]),y&&pe(c.$elm$).insertBefore(y,Q(c.$elm$))}i>l?fe(t,s[d+1]==null?null:s[d+1].$elm$,n,s,r,d):r>d&&he(e,i,l)},q=(t,e)=>t.$tag$===e.$tag$?t.$tag$==="slot"?t.$name$===e.$name$:t.$key$===e.$key$:!1,Q=t=>t&&t["s-ol"]||t,pe=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,B=(t,e)=>{const n=e.$elm$=t.$elm$,s=t.$children$,i=e.$children$,r=e.$tag$,o=e.$text$;let a;o===null?($=r==="svg"?!0:r==="foreignObject"?!1:$,r==="slot"||ue(t,e,$),s!==null&&i!==null?Xe(n,s,e,i):i!==null?(t.$text$!==null&&(n.textContent=""),fe(n,null,e,i,0,i.length-1)):s!==null&&he(s,0,s.length-1),$&&r==="svg"&&($=!1)):(a=n["s-cr"])?a.parentNode.textContent=o:t.$text$!==o&&(n.data=o)},me=t=>{const e=t.childNodes;let n,s,i,r,o,a;for(s=0,i=e.length;s<i;s++)if(n=e[s],n.nodeType===1){if(n["s-sr"]){for(o=n["s-sn"],n.hidden=!1,r=0;r<i;r++)if(a=e[r].nodeType,e[r]["s-hn"]!==n["s-hn"]||o!==""){if(a===1&&o===e[r].getAttribute("slot")){n.hidden=!0;break}}else if(a===1||a===3&&e[r].textContent.trim()!==""){n.hidden=!0;break}}me(n)}},b=[],ge=t=>{let e,n,s,i,r,o,a=0;const l=t.childNodes,c=l.length;for(;a<c;a++){if(e=l[a],e["s-sr"]&&(n=e["s-cr"])&&n.parentNode)for(s=n.parentNode.childNodes,i=e["s-sn"],o=s.length-1;o>=0;o--)n=s[o],!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==e["s-hn"]&&($e(n,i)?(r=b.find(u=>u.$nodeToRelocate$===n),P=!0,n["s-sn"]=n["s-sn"]||i,r?r.$slotRefNode$=e:b.push({$slotRefNode$:e,$nodeToRelocate$:n}),n["s-sr"]&&b.map(u=>{$e(u.$nodeToRelocate$,n["s-sn"])&&(r=b.find(d=>d.$nodeToRelocate$===n),r&&!u.$slotRefNode$&&(u.$slotRefNode$=r.$slotRefNode$))})):b.some(u=>u.$nodeToRelocate$===n)||b.push({$nodeToRelocate$:n}));e.nodeType===1&&ge(e)}},$e=(t,e)=>t.nodeType===1?t.getAttribute("slot")===null&&e===""||t.getAttribute("slot")===e:t["s-sn"]===e?!0:e==="",ye=t=>{t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(ye)},Ze=(t,e)=>{const n=t.$hostElement$,s=t.$cmpMeta$,i=t.$vnode$||A(null,null),r=je(e)?e:f(null,null,e);R=n.tagName,s.$attrsToReflect$&&(r.$attrs$=r.$attrs$||{},s.$attrsToReflect$.map(([o,a])=>r.$attrs$[a]=n[o])),r.$tag$=null,r.$flags$|=4,t.$vnode$=r,r.$elm$=i.$elm$=n.shadowRoot||n,T=n["s-sc"],V=n["s-cr"],ee=(s.$flags$&1)!==0,P=!1,B(i,r);{if(m.$flags$|=1,z){ge(r.$elm$);let o,a,l,c,u,d,h=0;for(;h<b.length;h++)o=b[h],a=o.$nodeToRelocate$,a["s-ol"]||(l=v.createTextNode(""),l["s-nr"]=a,a.parentNode.insertBefore(a["s-ol"]=l,a));for(h=0;h<b.length;h++)if(o=b[h],a=o.$nodeToRelocate$,o.$slotRefNode$){for(c=o.$slotRefNode$.parentNode,u=o.$slotRefNode$.nextSibling,l=a["s-ol"];l=l.previousSibling;)if(d=l["s-nr"],d&&d["s-sn"]===a["s-sn"]&&c===d.parentNode&&(d=d.nextSibling,!d||!d["s-nr"])){u=d;break}(!u&&c!==a.parentNode||a.nextSibling!==u)&&a!==u&&(!a["s-hn"]&&a["s-ol"]&&(a["s-hn"]=a["s-ol"].parentNode.nodeName),c.insertBefore(a,u))}else a.nodeType===1&&(a.hidden=!0)}P&&me(r.$elm$),m.$flags$&=-2,b.length=0}},Ve=(t,e)=>{},be=(t,e)=>(t.$flags$|=16,Ve(t,t.$ancestorComponent$),Dt(()=>et(t,e))),et=(t,e)=>{const n=t.$hostElement$,s=S("scheduleUpdate",t.$cmpMeta$.$tagName$),i=n;let r;return e?r=I(i,"componentWillLoad"):r=I(i,"componentWillUpdate"),r=ve(r,()=>I(i,"componentWillRender")),s(),ve(r,()=>tt(t,i,e))},tt=async(t,e,n)=>{const s=t.$hostElement$,i=S("update",t.$cmpMeta$.$tagName$);s["s-rc"],n&&Qe(t);const r=S("render",t.$cmpMeta$.$tagName$);nt(t,e,s),r(),i(),st(t)},nt=(t,e,n)=>{try{te=e,e=e.render&&e.render(),t.$flags$&=-17,t.$flags$|=2,(M.hasRenderFn||M.reflect)&&(M.vdomRender||M.reflect)&&(M.hydrateServerSide||Ze(t,e))}catch(a){O(a,t.$hostElement$)}return te=null,null},st=t=>{const e=t.$cmpMeta$.$tagName$,n=t.$hostElement$,s=S("postUpdate",e),i=n;t.$ancestorComponent$,I(i,"componentDidRender"),t.$flags$&64?(I(i,"componentDidUpdate"),s()):(t.$flags$|=64,I(i,"componentDidLoad"),s())},I=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(s){O(s)}},ve=(t,e)=>t&&t.then?t.then(e):e(),it=(t,e)=>H(t).$instanceValues$.get(e),ot=(t,e,n,s)=>{const i=H(t),r=t,o=i.$instanceValues$.get(e),a=i.$flags$,l=r;n=We(n,s.$members$[e][0]);const c=Number.isNaN(o)&&Number.isNaN(n);if(n!==o&&!c){i.$instanceValues$.set(e,n);{if(s.$watchers$&&a&128){const d=s.$watchers$[e];d&&d.map(h=>{try{l[h](n,o,e)}catch(p){O(p,r)}})}if((a&18)===2){if(l.componentShouldUpdate&&l.componentShouldUpdate(n,o,e)===!1)return;be(i,!1)}}}},rt=(t,e,n)=>{if(e.$members$){t.watchers&&(e.$watchers$=t.watchers);const s=Object.entries(e.$members$),i=t.prototype;s.map(([r,[o]])=>{(o&31||o&32)&&Object.defineProperty(i,r,{get(){return it(this,r)},set(a){ot(this,r,a,e)},configurable:!0,enumerable:!0})});{const r=new Map;i.attributeChangedCallback=function(o,a,l){m.jmp(()=>{const c=r.get(o);if(this.hasOwnProperty(c))l=this[c],delete this[c];else if(i.hasOwnProperty(c)&&typeof this[c]=="number"&&this[c]==l)return;this[c]=l===null&&typeof this[c]=="boolean"?!1:l})},t.observedAttributes=s.filter(([o,a])=>a[0]&15).map(([o,a])=>{const l=a[1]||o;return r.set(l,o),a[0]&512&&e.$attrsToReflect$.push([o,l]),l})}}return t},at=async(t,e,n,s,i)=>{if(!(e.$flags$&32)&&(i=t.constructor,e.$flags$|=32,customElements.whenDefined(n.$tagName$).then(()=>e.$flags$|=128),i.style)){let o=i.style;typeof o!="string"&&(o=o[e.$modeName$=Ue(t)]);const a=le(n,e.$modeName$);if(!U.has(a)){const l=S("registerStyles",n.$tagName$);Ke(a,o,!!(n.$flags$&1)),l()}}e.$ancestorComponent$,be(e,!0)},lt=t=>{},ct=t=>{if(!(m.$flags$&1)){const e=H(t),n=e.$cmpMeta$,s=S("connectedCallback",n.$tagName$);e.$flags$&1?(ke(t,e,n.$listeners$),lt(e.$lazyInstance$)):(e.$flags$|=1,n.$flags$&12&&dt(t),n.$members$&&Object.entries(n.$members$).map(([i,[r]])=>{if(r&31&&t.hasOwnProperty(i)){const o=t[i];delete t[i],t[i]=o}}),at(t,e,n)),s()}},dt=t=>{const e=t["s-cr"]=v.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)},ut=t=>{if(!(m.$flags$&1)){const e=H(t);e.$rmListeners$&&(e.$rmListeners$.map(n=>n()),e.$rmListeners$=void 0)}},ft=(t,e)=>{const n={$flags$:e[0],$tagName$:e[1]};n.$members$=e[2],n.$listeners$=e[3],n.$watchers$=t.$watchers$,n.$attrsToReflect$=[];const s=t.prototype.connectedCallback,i=t.prototype.disconnectedCallback;return Object.assign(t.prototype,{__registerHost(){gt(this,n)},connectedCallback(){ct(this),s&&s.call(this)},disconnectedCallback(){ut(this),i&&i.call(this)},__attachShadow(){this.attachShadow({mode:"open",delegatesFocus:!!(n.$flags$&16)})}}),t.is=n.$tagName$,rt(t,n)},ke=(t,e,n,s)=>{n&&n.map(([i,r,o])=>{const a=pt(t,i),l=ht(e,o),c=mt(i);m.ael(a,r,l,c),(e.$rmListeners$=e.$rmListeners$||[]).push(()=>m.rel(a,r,l,c))})},ht=(t,e)=>n=>{try{M.lazyLoad||t.$hostElement$[e](n)}catch(s){O(s)}},pt=(t,e)=>e&4?v:e&8?W:e&16?v.body:t,mt=t=>bt?{passive:(t&1)!==0,capture:(t&2)!==0}:(t&2)!==0,_e=new WeakMap,H=t=>_e.get(t),gt=(t,e)=>{const n={$flags$:0,$hostElement$:t,$cmpMeta$:e,$instanceValues$:new Map};return ke(t,n,e.$listeners$),_e.set(t,n)},we=(t,e)=>e in t,O=(t,e)=>(0,console.error)(t,e),U=new Map,$t=[],W=typeof window<"u"?window:{},v=W.document||{head:{}},yt=W.HTMLElement||class{},m={$flags$:0,$resourcesUrl$:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s),ce:(t,e)=>new CustomEvent(t,e)},bt=(()=>{let t=!1;try{v.addEventListener("e",null,Object.defineProperty({},"passive",{get(){t=!0}}))}catch{}return t})(),vt=t=>Promise.resolve(t),kt=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),De=[],Se=[],_t=(t,e)=>n=>{t.push(n),K||(K=!0,e&&m.$flags$&4?wt(J):m.raf(J))},xe=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(n){O(n)}t.length=0},J=()=>{xe(De),xe(Se),(K=De.length>0)&&m.raf(J)},wt=t=>vt().then(t),Dt=_t(Se,!0);function Ce(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function St(t,e,n){const s=[],i=X(t),r=i.getDay()===0?7:i.getDay(),o=Ee(t),a=o.getDay()===0?7:o.getDay(),l=n===1?7:n-1,c=[],u=[];{let p=(7-n+r)%7,y=Z(i);for(;p>0;)c.push(y),y=Z(y),p-=1;c.reverse();let F=(7-a+l)%7,L=Y(o);for(;F>0;)u.push(L),L=Y(L),F-=1}let d=i;for(;d.getMonth()===t.getMonth();)s.push(d),d=Y(d);return[...c,...s,...u]}function X(t){return C(new Date(`${String(Ne(t)).padStart(4,"0")}-${String(Me(t)).padStart(2,"0")}-01`))}function x(t){if(t instanceof Date)return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Ee(t){const e=X(t);return e.setMonth(e.getMonth()+1),e.setDate(e.getDate()-1),e}function Me(t){return t.getMonth()+1}function xt(t){return new Array(12).fill(void 0).map((e,n)=>{const s=C(new Date(`2006-${String(n+1).padStart(2,"0")}-01`));return Intl.DateTimeFormat(t,{month:"long"}).format(s)})}function Y(t){return Ce(t,1)}function Te(t){const e=new Date(t);return e.setDate(1),e.setMonth(e.getMonth()+1),e}function Be(t){const e=new Date(t);return e.setFullYear(e.getFullYear()+1),e}function Z(t){return Oe(t,1)}function Ie(t){const e=new Date(t);return e.setDate(1),e.setMonth(e.getMonth()-1),e}function Le(t){const e=new Date(t);return e.setFullYear(e.getFullYear()-1),e}function Ct(t,e){return new Array(7).fill(void 0).map((n,s)=>(t+s)%7+1).map(n=>{const s=C(new Date(`2006-01-0${n}`));return[Intl.DateTimeFormat(e,{weekday:"short"}).format(s),Intl.DateTimeFormat(e,{weekday:"long"}).format(s)]})}function Ne(t){return t.getFullYear()}function Et(t,e){if(!t||!e||!e.from||!e.to)return!1;const n=e.from<e.to?e.from:e.to,s=e.from<e.to?e.to:e.from;return t>=n&&t<=s}function D(t,e){return!t||!e?!1:t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}function C(t){const e=new Date(t);return e.setMinutes(e.getMinutes()+e.getTimezoneOffset()),e}function Oe(t,e){const n=new Date(t);return n.setDate(n.getDate()-e),n}const Mt=".visually-hidden.sc-wc-datepicker{position:absolute;overflow:hidden;width:1px;height:1px;white-space:nowrap;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%)}",Tt={clearButton:"Clear value",monthSelect:"Select month",nextMonthButton:"Next month",nextYearButton:"Next year",picker:"Choose date",previousMonthButton:"Previous month",previousYearButton:"Previous year",todayButton:"Show today",yearSelect:"Select year"},Bt=ft(class extends yt{constructor(){super(),this.__registerHost(),this.selectDate=re(this,"selectDate",7),this.changeMonth=re(this,"changeMonth",7),this.disabled=!1,this.disableDate=()=>!1,this.elementClassName="wc-datepicker",this.firstDayOfWeek=0,this.labels=Tt,this.locale=(navigator==null?void 0:navigator.language)||"en-US",this.showClearButton=!1,this.showMonthStepper=!0,this.showTodayButton=!1,this.showYearStepper=!1,this.startDate=x(new Date),this.init=()=>{this.currentDate=this.startDate?C(new Date(this.startDate)):new Date,this.updateWeekdays()},this.nextMonth=()=>{this.updateCurrentDate(Te(this.currentDate))},this.nextYear=()=>{this.updateCurrentDate(Be(this.currentDate))},this.previousMonth=()=>{this.updateCurrentDate(Ie(this.currentDate))},this.previousYear=()=>{this.updateCurrentDate(Le(this.currentDate))},this.showToday=()=>{this.updateCurrentDate(new Date)},this.clear=()=>{this.value=void 0,this.selectDate.emit(void 0)},this.onClick=t=>{if(this.disabled)return;const e=t.target.closest("[data-date]");if(!e)return;const n=C(new Date(e.dataset.date));this.updateCurrentDate(n),this.onSelectDate(n)},this.onMonthSelect=t=>{const e=+t.target.value-1,n=new Date(this.currentDate);n.setMonth(e),this.updateCurrentDate(n)},this.onYearSelect=t=>{let e=+t.target.value;const n=t.target;isNaN(e)?(e=new Date().getFullYear(),n.value=String(e)):e<0?(e=0,n.value=String(e)):e>9999&&(e=9999,n.value=String(e));const s=new Date(this.currentDate);s.setFullYear(e),this.updateCurrentDate(s)},this.onKeyDown=t=>{this.disabled||(t.code==="ArrowLeft"?(t.preventDefault(),this.updateCurrentDate(Z(this.currentDate),!0)):t.code==="ArrowRight"?(t.preventDefault(),this.updateCurrentDate(Y(this.currentDate),!0)):t.code==="ArrowUp"?(t.preventDefault(),this.updateCurrentDate(Oe(this.currentDate,7),!0)):t.code==="ArrowDown"?(t.preventDefault(),this.updateCurrentDate(Ce(this.currentDate,7),!0)):t.code==="PageUp"?(t.preventDefault(),t.shiftKey?this.updateCurrentDate(Le(this.currentDate),!0):this.updateCurrentDate(Ie(this.currentDate),!0)):t.code==="PageDown"?(t.preventDefault(),t.shiftKey?this.updateCurrentDate(Be(this.currentDate),!0):this.updateCurrentDate(Te(this.currentDate),!0)):t.code==="Home"?(t.preventDefault(),this.updateCurrentDate(X(this.currentDate),!0)):t.code==="End"?(t.preventDefault(),this.updateCurrentDate(Ee(this.currentDate),!0)):(t.code==="Space"||t.code==="Enter")&&(t.preventDefault(),this.onSelectDate(this.currentDate)))},this.onMouseEnter=t=>{if(this.disabled)return;const e=C(new Date(t.target.closest("td").dataset.date));this.hoveredDate=e},this.onMouseLeave=()=>{this.hoveredDate=void 0}}componentWillLoad(){this.init()}watchFirstDayOfWeek(){this.updateWeekdays()}watchLocale(){this.locale||(this.locale=(navigator==null?void 0:navigator.language)||"en-US"),this.updateWeekdays()}watchRange(){this.value=void 0,this.selectDate.emit(void 0)}watchStartDate(){this.currentDate=this.startDate?C(new Date(this.startDate)):new Date}watchValue(){this.value&&(Array.isArray(this.value)&&this.value.length>=1?this.currentDate=this.value[0]:this.value instanceof Date&&(this.currentDate=this.value))}componentDidRender(){this.moveFocusAfterMonthChanged&&(this.focusDate(this.currentDate),this.moveFocusAfterMonthChanged=!1)}updateWeekdays(){this.weekdays=Ct(this.firstDayOfWeek===0?7:this.firstDayOfWeek,this.locale)}getClassName(t){return t?`${this.elementClassName}__${t}`:this.elementClassName}getCalendarRows(){const t=St(this.currentDate,!0,this.firstDayOfWeek===0?7:this.firstDayOfWeek),e=[];for(let n=0;n<t.length;n+=7){const s=t.slice(n,n+7);e.push(s)}return e}getTitle(){if(this.currentDate)return Intl.DateTimeFormat(this.locale,{day:"numeric",month:"long",year:"numeric"}).format(this.currentDate)}focusDate(t){var e;(e=this.el.querySelector(`[data-date="${x(t)}"]`))===null||e===void 0||e.focus()}updateCurrentDate(t,e){const n=t.getMonth(),s=t.getFullYear();if(s>9999||s<0)return;(n!==this.currentDate.getMonth()||s!==this.currentDate.getFullYear())&&(this.changeMonth.emit({month:Me(t),year:Ne(t)}),e&&(this.moveFocusAfterMonthChanged=!0)),this.currentDate=t,e&&this.focusDate(this.currentDate)}onSelectDate(t){var e,n;if(!this.disableDate(t))if(this.isRangeValue(this.value)){const s=((e=this.value)===null||e===void 0?void 0:e[0])===void 0||this.value.length===2?[t]:[this.value[0],t];s.length===2&&s[0]>s[1]&&s.reverse();const i=s[1]===void 0?[x(s[0])]:[x(s[0]),x(s[1])];this.value=s,this.selectDate.emit(i)}else{if(((n=this.value)===null||n===void 0?void 0:n.getTime())===t.getTime())return;this.value=t,this.selectDate.emit(x(t))}}isRangeValue(t){return this.range}render(){const t=this.showTodayButton||this.showClearButton;return f(ie,null,f("div",{"aria-disabled":String(this.disabled),"aria-label":this.labels.picker,class:{[this.getClassName()]:!0,[`${this.getClassName()}--disabled`]:this.disabled},role:"group"},f("div",{class:this.getClassName("header")},f("span",{"aria-atomic":"true","aria-live":"polite",class:"visually-hidden"},this.getTitle()),this.showYearStepper&&f("button",{"aria-label":this.labels.previousYearButton,class:this.getClassName("previous-year-button"),disabled:this.disabled,innerHTML:this.previousYearButtonContent||void 0,onClick:this.previousYear,type:"button"},f("svg",{fill:"none",height:"24","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24",width:"24"},f("polyline",{points:"11 17 6 12 11 7"}),f("polyline",{points:"18 17 13 12 18 7"}))),this.showMonthStepper&&f("button",{"aria-label":this.labels.previousMonthButton,class:this.getClassName("previous-month-button"),disabled:this.disabled,innerHTML:this.previousMonthButtonContent||void 0,onClick:this.previousMonth,type:"button"},f("svg",{fill:"none",height:"24","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24",width:"24"},f("polyline",{points:"15 18 9 12 15 6"}))),f("span",{class:this.getClassName("current-month")},f("select",{"aria-label":this.labels.monthSelect,class:this.getClassName("month-select"),disabled:this.disabled,name:"month",onChange:this.onMonthSelect},xt(this.locale).map((e,n)=>f("option",{key:e,selected:this.currentDate.getMonth()===n,value:n+1},e))),f("input",{"aria-label":this.labels.yearSelect,class:this.getClassName("year-select"),disabled:this.disabled,max:9999,maxLength:4,min:1,name:"year",onChange:this.onYearSelect,type:"number",value:this.currentDate.getFullYear()})),this.showMonthStepper&&f("button",{"aria-label":this.labels.nextMonthButton,class:this.getClassName("next-month-button"),disabled:this.disabled,innerHTML:this.nextMonthButtonContent||void 0,onClick:this.nextMonth,type:"button"},f("svg",{fill:"none",height:"24","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24",width:"24"},f("polyline",{points:"9 18 15 12 9 6"}))),this.showYearStepper&&f("button",{"aria-label":this.labels.nextYearButton,class:this.getClassName("next-year-button"),disabled:this.disabled,innerHTML:this.nextYearButtonContent||void 0,onClick:this.nextYear,type:"button"},f("svg",{fill:"none",height:"24","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24",width:"24"},f("polyline",{points:"13 17 18 12 13 7"}),f("polyline",{points:"6 17 11 12 6 7"})))),f("div",{class:this.getClassName("body")},f("table",{class:this.getClassName("calendar"),onKeyDown:this.onKeyDown,role:"grid"},f("thead",{class:this.getClassName("calendar-header")},f("tr",{class:this.getClassName("weekday-row")},this.weekdays.map(e=>f("th",{abbr:e[1],class:this.getClassName("weekday"),key:e[0],scope:"col"},f("span",null,e[0]))))),f("tbody",null,this.getCalendarRows().map(e=>{const n=`row-${e[0].getMonth()}-${e[0].getDate()}`;return f("tr",{class:this.getClassName("calendar-row"),key:n},e.map(s=>{var i,r,o,a,l;const c=D(s,this.currentDate),u=s.getMonth()!==this.currentDate.getMonth(),d=Array.isArray(this.value)?D(s,this.value[0])||D(s,this.value[1]):D(s,this.value),h=this.isRangeValue?Et(s,{from:(i=this.value)===null||i===void 0?void 0:i[0],to:((r=this.value)===null||r===void 0?void 0:r[1])||this.hoveredDate||this.currentDate}):!1,p=!((o=this.value)===null||o===void 0)&&o[0]?[(a=this.value)===null||a===void 0?void 0:a[0],((l=this.value)===null||l===void 0?void 0:l[1])||this.hoveredDate].sort((Rt,Pt)=>Rt-Pt):[],y=this.range&&D(p[0],s),_=this.range&&D(p[1],s),F=D(s,new Date),L=this.disableDate(s),Nt=`cell-${s.getMonth()}-${s.getDate()}`,Ot={[this.getClassName("date")]:!0,[this.getClassName("date--current")]:c,[this.getClassName("date--disabled")]:L,[this.getClassName("date--overflowing")]:u,[this.getClassName("date--today")]:F,[this.getClassName("date--selected")]:d,[this.getClassName("date--in-range")]:h,[this.getClassName("date--start")]:y,[this.getClassName("date--end")]:_},Ft=d?"strong":F?"em":"span";return f("td",{"aria-disabled":String(L),"aria-selected":d?"true":void 0,class:Ot,"data-date":x(s),key:Nt,onClick:this.onClick,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,role:"gridcell",tabIndex:D(s,this.currentDate)&&!this.disabled?0:-1},f(Ft,{"aria-hidden":"true"},s.getDate()),f("span",{class:"visually-hidden"},Intl.DateTimeFormat(this.locale,{day:"numeric",month:"long"}).format(s)))}))})))),t&&f("div",{class:this.getClassName("footer")},this.showTodayButton&&f("button",{class:this.getClassName("today-button"),disabled:this.disabled,innerHTML:this.todayButtonContent||void 0,onClick:this.showToday,type:"button"},this.labels.todayButton),this.showClearButton&&f("button",{class:this.getClassName("clear-button"),disabled:this.disabled,innerHTML:this.clearButtonContent||void 0,onClick:this.clear,type:"button"},this.labels.clearButton))))}get el(){return this}static get watchers(){return{firstDayOfWeek:["watchFirstDayOfWeek"],locale:["watchLocale"],range:["watchRange"],startDate:["watchStartDate"],value:["watchValue"]}}static get style(){return Mt}},[2,"wc-datepicker",{clearButtonContent:[1,"clear-button-content"],disabled:[4],disableDate:[16],elementClassName:[1,"element-class-name"],firstDayOfWeek:[2,"first-day-of-week"],range:[4],labels:[16],locale:[1],nextMonthButtonContent:[1,"next-month-button-content"],nextYearButtonContent:[1,"next-year-button-content"],previousMonthButtonContent:[1,"previous-month-button-content"],previousYearButtonContent:[1,"previous-year-button-content"],showClearButton:[4,"show-clear-button"],showMonthStepper:[4,"show-month-stepper"],showTodayButton:[4,"show-today-button"],showYearStepper:[4,"show-year-stepper"],startDate:[1,"start-date"],todayButtonContent:[1,"today-button-content"],value:[1040],currentDate:[32],hoveredDate:[32],weekdays:[32]}]);var It={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_IS_DEVELOPMENT:"false",VITE_RAHUI_BOOKING_LOCAL_SERVER_URL:"http://localhost:3001",VITE_TEST_ROOT_ELEMENT:"false"};class Lt{constructor({apiKey:e,rootElementId:n,content:s}){g(this,"apiKey","");g(this,"rootElementId","");g(this,"widgetContainer",null);g(this,"form",null);g(this,"formId","rahui-booking-form");g(this,"datePickerId","date-picker");g(this,"timePickerHoursId","time-picker-hours");g(this,"timePickerMinutesId","time-picker-minutes");g(this,"datePickerHiddenInputId","hidden-date-input");g(this,"confirmationContainerElementId","confirmation-message-container");g(this,"confirmationBookingDatetimeElementId","confirmation-booking-datetime");g(this,"confirmationBookingCoversElementId","confirmation-booking-number-of-covers");g(this,"errorMessageElementId","error-message");g(this,"heading","");g(this,"buttonText","");this.apiKey=e,this.rootElementId=n||"",this.heading=(s==null?void 0:s.heading)||"Book a table",this.buttonText=(s==null?void 0:s.buttonText)||"Create booking",this.initialize(),this.injectStyles(),this.setupEventListenersForRequiredFields()}async initialize(){var i;let e,n;this.rootElementId.length?e=document.getElementById(this.rootElementId):(n=document.createElement("div"),document.body.appendChild(n)),this.widgetContainer=document.createElement("div"),this.widgetContainer.classList.add("widget__container"),this.createWidgetContent(),(i=e||n)==null||i.appendChild(this.widgetContainer),this.form=document.getElementById(this.formId),this.form&&this.form.addEventListener("submit",this.formSubmit.bind(this)),customElements.define("wc-datepicker",Bt);const s=document.getElementById(this.datePickerId);s&&(s.disableDate=function(r){const o=new Date,a=new Date(o.setHours(0,0,0));return new Date(r.setHours(15,0,0)).getTime()<a.getTime()},s.addEventListener("selectDate",r=>{const o=document.getElementById(this.datePickerHiddenInputId);o&&(o.value=r.detail),this.getOpeningHours(r.detail)})),this.getWidgetSettings(),this.getOpeningHours()}apiBaseUrl(){const{VITE_IS_DEVELOPMENT:e,VITE_RAHUI_BOOKING_LOCAL_SERVER_URL:n}=It;return e==="true"?n:"https://rahui-booking.com"}async formSubmit(e){e.preventDefault();const n=new FormData(e.target),s=Object.fromEntries(n.entries()),i=new Date(s["booking[date]"]),r=s["booking[time][hours]"],o=s["booking[time][minutes]"],l=new Date(i.setHours(parseInt(r),parseInt(o),0)).toUTCString(),c=String(s["booking[number_of_covers]"]),u=String(s["booking[notes]"]),d=String(s["customer[first_name]"]),h=String(s["customer[last_name]"]),p=String(s["customer[email]"]),y=String(s["customer[phone]"]),_={"widget-submission":!0,booking:{datetime:l,number_of_covers:c,notes:u},customer:{first_name:d,last_name:h,email:p,phone:y}};await this.forwardFormSubmissionToServer(_)}async getWidgetSettings(){const e=`${this.apiBaseUrl()}/api/widgets/settings`,n=await fetch(e,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},method:"GET"});if(n.status===200){const s=await n.json();this.applySettings(s)}else console.error({body:await n.json()})}applySettings(e){this.setMaxCoversPerBooking(e)}setMaxCoversPerBooking(e){const n=e.max_covers_per_booking,s=document.getElementById("number_of_covers_label"),i=document.getElementById("number_of_covers");n&&s&&i&&(s.textContent=s.textContent+` (max: ${n})`,i.max=String(n))}async getOpeningHours(e=void 0){const n=Intl.DateTimeFormat().resolvedOptions().timeZone,s=e&&n?`?date=${e}&timezone=${n}`:void 0,i=s?`${this.apiBaseUrl()}/api/widgets/opening_hours${s}`:`${this.apiBaseUrl()}/api/widgets/opening_hours`,r=await fetch(i,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},method:"GET"});if(r.status===200){const o=await r.json();this.applyOpeningHours(o)}else console.error({body:await r.json()})}applyOpeningHours(e){const n=document.getElementById(this.timePickerHoursId);if(n&&e){const{open_at:s,close_at:i}=e==null?void 0:e.opening_hours,r=Array.from(Array(23).keys()).map(a=>{const l=document.createElement("option");return l.value=String(a),l.innerHTML=a<10?String(a).padStart(2,"0"):String(a),l}),o=[];r.forEach(a=>{a.value>=s&&a.value<=i&&o.push(a)}),n.innerHTML="",n.append(...o)}}async forwardFormSubmissionToServer(e){const n=`${this.apiBaseUrl()}/api/widgets/create_booking`;if(n&&e){const s=await fetch(n,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},method:"POST",body:JSON.stringify(e)});if(this.hideErrorMessage(),s.status===201){const i=await s.json();this.hideForm(),this.showConfirmationMessage(i)}else console.error({body:await s.json()}),this.showErrorMessage()}}hideForm(){const e=document.getElementById(this.formId);e&&(e.style.visibility="hidden")}showConfirmationMessage(e){const n=document.getElementById(this.confirmationContainerElementId),s=document.getElementById(this.confirmationBookingDatetimeElementId),i=document.getElementById(this.confirmationBookingCoversElementId);if(!(!n||!e)){if(s){const r=new Date(e.datetime),o=Intl.DateTimeFormat().resolvedOptions().locale,a=new Intl.DateTimeFormat(o,{dateStyle:"full",timeStyle:"short"}).format(r);s.textContent=a}if(i){const r=String(e.number_of_covers),o=e.number_of_covers===1?`${r} Person | `:`${r} People | `;i.textContent=o}n.style.display="flex",n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}}hideErrorMessage(){const e=document.getElementById(this.errorMessageElementId);e&&(e.style.display="none")}showErrorMessage(){const e=document.getElementById(this.errorMessageElementId);e&&(e.style.display="block")}createWidgetContent(){this.widgetContainer.innerHTML=E({heading:this.heading,buttonText:this.buttonText,formId:this.formId,datePickerHiddenInputId:this.datePickerHiddenInputId,datePickerId:this.datePickerId,timePickerHoursId:this.timePickerHoursId,timePickerMinutesId:this.timePickerMinutesId})}injectStyles(){const e=document.createElement("style");e.innerHTML=k.replace(/^\s+|\n/gm,""),document.head.appendChild(e)}setupEventListenersForRequiredFields(){const e=document.getElementById("customer_first_name"),n=document.getElementById("customer_last_name");[e,n].forEach(s=>{const i=[e,n];this.handleToggleRequiredFields({relatedFields:i}),s&&s.addEventListener("change",()=>this.handleToggleRequiredFields({relatedFields:i}))})}getRequiredSymbolFor(e){const n=e.id+"_required_symbol";return document.getElementById(n)}toggleRequiredSymbolFor(e){const n=this.getRequiredSymbolFor(e);n&&(n.style.display="none")}handleToggleRequiredFields({relatedFields:e}){const[n,s]=e,i=e.every(o=>o.value.length>0),r=e.every(o=>o.value.length===0);(i||r)&&e.forEach(o=>{const a=this.getRequiredSymbolFor(o);a&&(a.style.display="inline"),o.required=!0}),n.value.length>0&&s.value.length===0&&(this.toggleRequiredSymbolFor(s),s.required=!1),s.value.length>0&&n.value.length===0&&(this.toggleRequiredSymbolFor(n),n.required=!1)}}window.RahuiWidget=Lt})();
