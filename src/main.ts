import flatpickr from "flatpickr";
import { styles } from "./assets.js";
import { type Payload } from "./types";

class RahuiWidget {
  constructor() {
    this.initialize();
    this.injectStyles();
  }

  widgetContainer = null as unknown as HTMLDivElement;
  formId = "rahui-booking-form";
  form = null as unknown as HTMLElement | null;
  datetimePickerId = "datetime-picker";

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
    this.form &&
      this.form.addEventListener("submit", this.formSubmit.bind(this));

    /**
     * Setup datetime picker using flatpickr
     */
    flatpickr(`#${this.datetimePickerId}`, {
      enableTime: true,
      time_24hr: true,
      minDate: "today",
      dateFormat: "Y-m-d H:i",
    });
  }

  async formSubmit(e: any) {
    e.preventDefault();
    const data = new FormData(e.target);
    const parsedData = Object.fromEntries(data.entries()) as Payload;
    const datetime = new Date(parsedData.datetime as string);
    const datetimeUTC = datetime.toUTCString();
    console.log({ parsedData });

    const payload: Payload = {
      ...parsedData,
      datetime: datetimeUTC,
    };
    await this.forwardFormSubmissionToServer(payload);
  }

  async forwardFormSubmissionToServer(payload: Payload) {
    console.log("forwardFormSubmissionToServer:", { payload });
  }

  createWidgetContent() {
    this.widgetContainer.innerHTML = `
      <header class="widget__header">
        <h3>Book a table</h3>
      </header>
      <form id="${this.formId}">
        <input type="hidden" id="widget-submission" name="widget-submission" value="true">
        <div class="form__field__group">
          <div class="form__field">
            <div class="form__field__required">
              <label for="datetime">Booking (date and time)</label><span class="required-field-symbol">*</span>
            </div>
            <input id="${this.datetimePickerId}" name="datetime" placeholder="Select date and time" required>
          </div>
          <div class="form__field form__field__required number-of-covers">
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
        </div>
        <section class="customer-details">
          <div class="form__field__group">
            <div class="form__field">
              <label for="first_name">First name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Enter your first name"
              />
            </div>
            <div class="form__field last-name">
              <label for="last_name">Last name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div class="form__field">
            <div class="form__field__required">
              <label for="email">Email</label><span class="required-field-symbol">*</span>
            </div>
            <p class="info muted">We send the booking confirmation to this email address</p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>
          <div class="form__field">
            <label for="phone">Phone number</label>
            <p class="info muted">We may use this to contact you about your booking</p>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>
        </section>
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
