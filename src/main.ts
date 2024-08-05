import { styles } from "./assets.js";
import { Datepicker, type Payload } from "./types";
import { defineCustomElements } from "wc-datepicker/dist/loader";

// Importing a theme is optional.
import "wc-datepicker/dist/themes/light.css";

class RahuiWidget {
  constructor() {
    this.initialize();
    this.injectStyles();
    this.setupEventListenersForRequiredFields();
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
     * Setup datetime picker using wc-datepicker
     * https://sqrrl.github.io/wc-datepicker/
     */
    defineCustomElements();
    const datepicker = document.getElementById(
      this.datetimePickerId
    ) as Datepicker;

    if (datepicker) {
      datepicker.disableDate = function (date: Date) {
        const now = new Date();
        const comparableDatetimeNow = new Date(now.setHours(0, 0, 0));
        const comparableDatetime = new Date(date.setHours(15, 0, 0));
        return comparableDatetime.getTime() < comparableDatetimeNow.getTime();
      };
    }
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
    const base_url = import.meta.env.VITE_RAHUI_BOOKING_SERVER_URL;
    const url = `${base_url}/widget-form-submission`;
    console.log("forwardFormSubmissionToServer:", { base_url, payload });
    if (url && payload) {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      console.log({ response });
    }
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
            <wc-datepicker first-day-of-week="1" id="${this.datetimePickerId}"></wc-datepicker>
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
              <div class="form__field__required">
                <label for="first_name">First name</label><span class="required-field-symbol" id="customer_first_name_required_symbol">*</span>
              </div>
              <input
                type="text"
                id="customer_first_name"
                name="first_name"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div class="form__field last-name">
              <div class="form__field__required">
                <label for="last_name">Last name</label><span class="required-field-symbol" id="customer_last_name_required_symbol">*</span>
              </div>
              <input
                type="text"
                id="customer_last_name"
                name="last_name"
                placeholder="Enter your last name"
                required
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

  setupEventListenersForRequiredFields() {
    const firstNameField = document.getElementById("customer_first_name");
    const lastNameField = document.getElementById("customer_last_name");
    [firstNameField, lastNameField].forEach((field) => {
      const relatedFields = [
        firstNameField,
        lastNameField,
      ] as HTMLInputElement[];
      this.handleToggleRequiredFields({ relatedFields });

      if (field) {
        field.addEventListener("change", () =>
          this.handleToggleRequiredFields({ relatedFields })
        );
      }
    });
  }

  getRequiredSymbolFor(field: HTMLElement) {
    const selector = field.id + "_required_symbol";
    return document.getElementById(selector);
  }

  toggleRequiredSymbolFor(field: HTMLElement) {
    const requiredSymbol = this.getRequiredSymbolFor(field);
    if (requiredSymbol) {
      requiredSymbol.style.display = "none";
    }
  }

  handleToggleRequiredFields({
    relatedFields,
  }: {
    relatedFields: HTMLInputElement[];
  }) {
    const [firstNameField, lastNameField] = relatedFields;
    const isFieldsFilled = relatedFields.every(
      (field) => field.value.length > 0
    );
    const isFieldsEmpty = relatedFields.every(
      (field) => field.value.length === 0
    );

    // 1. Both have values or neither have values
    if (isFieldsFilled || isFieldsEmpty) {
      relatedFields.forEach((field) => {
        const requiredSymbol = this.getRequiredSymbolFor(field);
        if (requiredSymbol) {
          requiredSymbol.style.display = "inline";
        }
        field.required = true;
      });
    }
    // 2. firstName has value and lastName empty
    if (firstNameField.value.length > 0 && lastNameField.value.length === 0) {
      this.toggleRequiredSymbolFor(lastNameField);
      lastNameField.required = false;
    }
    // 3. lastName has value and firstName empty
    if (lastNameField.value.length > 0 && firstNameField.value.length === 0) {
      this.toggleRequiredSymbolFor(firstNameField);
      firstNameField.required = false;
    }
  }
}

function initializeWidget() {
  return new RahuiWidget();
}

initializeWidget();
