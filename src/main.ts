import { styles } from "./assets.js";

class RahuiWidget {
  constructor() {
    this.initialize();
    this.injectStyles();
  }

  open = false;
  widgetContainer = null as unknown as HTMLDivElement;
  formId = "rahui-booking-form";
  form = null as unknown as HTMLElement | null;

  async initialize() {
    /**
     * Create and append a div element to the document body
     */
    const container = document.createElement("div");
    document.body.appendChild(container);

    /**
     * Create a container for the widget and add the following classes:- `widget__container`
     */
    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__container");

    /**
     * Invoke the `createWidget()` method
     */
    this.createWidgetContent();

    /**
     * Append the widget's content to the container
     */
    container.appendChild(this.widgetContainer);

    /**
     * Add event listener to use custom form submission
     */
    this.form = document.getElementById(this.formId);
    this.form && this.form.addEventListener("submit", this.formSubmit);
  }

  formSubmit(e: any) {
    e.preventDefault();
    console.log("Submitted form", e);
  }

  createWidgetContent() {
    this.widgetContainer.innerHTML = `
      <header class="widget__header">
        <h3>Book a table</h3>
      </header>
      <form id="${this.formId}">
        <div class="form__field">
          <label for="first_name">First name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Enter your first name"
          />
        </div>
        <div class="form__field">
          <label for="last_name">Last name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Enter your last name"
          />
        </div>
        <div class="form__field">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
          />
        </div>
        <div class="form__field">
          <label for="phone">Phone number</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>
        <div class="form__field form__field__required">
          <div class="form__field__required">
            <label for="number_of_covers">Guests</label><span class="required-field-symbol">*</span>
          </div>
          <input
            type="number"
            id="number_of_covers"
            name="number_of_covers"
            placeholder="1"
            required
          />
        </div>
        <div class="form__field">
          <label for="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Enter any additional notes"
            rows="6"
          ></textarea>
        </div>
        <button type="submit">Create Booking</button>
      </form>
    `;
  }

  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
    document.head.appendChild(styleTag);
  }
}

function initializeWidget() {
  return new RahuiWidget();
}

initializeWidget();
