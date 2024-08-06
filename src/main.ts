import { styles } from "./assets.js";
import { Booking, Datepicker, WidgetConfig, type Payload } from "./types";
import { defineCustomElements } from "wc-datepicker/dist/loader";

// Importing a theme is optional.
import "wc-datepicker/dist/themes/light.css";

class RahuiWidget {
  apiKey = "";
  widgetContainer = null as unknown as HTMLDivElement;
  form = null as unknown as HTMLElement | null;
  formId = "rahui-booking-form";
  datePickerId = "date-picker";
  timePickerId = "time-picker";
  datePickerHiddenInputId = "hidden-date-input";
  confirmationContainerElementId = "confirmation-message-container";
  errorMessageElementId = "error-message";

  // Widget content
  heading = "Book a table";

  constructor({ apiKey }: WidgetConfig) {
    this.apiKey = apiKey;
    this.initialize();
    this.injectStyles();
    this.setupEventListenersForRequiredFields();
  }

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
    const datepicker = document.getElementById(this.datePickerId) as Datepicker;
    if (datepicker) {
      // Disable dates before today
      datepicker.disableDate = function (date: Date) {
        const now = new Date();
        const comparableDatetimeNow = new Date(now.setHours(0, 0, 0));
        const comparableDatetime = new Date(date.setHours(15, 0, 0));
        return comparableDatetime.getTime() < comparableDatetimeNow.getTime();
      };
      // Set selected date as hidden input value
      datepicker.addEventListener("selectDate", (event: any) => {
        const datePickerHiddenInput = document.getElementById(
          this.datePickerHiddenInputId
        ) as HTMLInputElement;
        if (datePickerHiddenInput) {
          datePickerHiddenInput.value = event.detail;
        }
      });
    }
  }

  async formSubmit(e: any) {
    e.preventDefault();
    const data = new FormData(e.target);
    const parsedData = Object.fromEntries(data.entries());

    // Booking
    const date = new Date(parsedData["booking[date]"] as string);
    const time = parsedData["booking[time]"] as string;
    const [hours, minutes] = time.split(":");
    const datetime = new Date(
      date.setHours(parseInt(hours), parseInt(minutes), 0)
    );
    const datetimeUTC = datetime.toUTCString();
    const numberOfCovers = parsedData["booking[number_of_covers]"].toString();
    const notes = parsedData["booking[notes]"].toString();

    // Customer
    const firstName = parsedData["customer[first_name]"].toString();
    const lastName = parsedData["customer[last_name]"].toString();
    const email = parsedData["customer[email]"].toString();
    const phone = parsedData["customer[phone]"].toString();

    const payload: Payload = {
      "widget-submission": true,
      booking: {
        datetime: datetimeUTC,
        number_of_covers: numberOfCovers,
        notes,
      },
      customer: {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
      },
    };

    await this.forwardFormSubmissionToServer(payload);
  }

  async forwardFormSubmissionToServer(payload: Payload) {
    const {
      VITE_IS_PRODUCTION,
      VITE_RAHUI_BOOKING_LOCAL_SERVER_URL,
      VITE_RAHUI_BOOKING_PRODUCTION_SERVER_URL,
      VITE_RAHUI_BOOKING_WIDGET_CREATE_BOOKING_PATH,
    } = import.meta.env;

    const base_url =
      VITE_IS_PRODUCTION === "true"
        ? VITE_RAHUI_BOOKING_PRODUCTION_SERVER_URL
        : VITE_RAHUI_BOOKING_LOCAL_SERVER_URL;
    const url = `${base_url}/${VITE_RAHUI_BOOKING_WIDGET_CREATE_BOOKING_PATH}`;
    console.log("forwardFormSubmissionToServer:", { url, payload });

    if (url && payload) {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        method: "POST",
        body: JSON.stringify(payload),
      });
      this.hideErrorMessage();
      if (response.status === 201) {
        const booking = (await response.json()) as Booking;
        this.hideForm();
        this.showConfirmationMessage(booking);
      } else {
        console.error({ body: await response.json() });
        this.showErrorMessage();
      }
    }
  }

  hideForm() {
    const form = document.getElementById(this.formId);
    if (!form) return;

    form.style.visibility = "hidden";
  }

  showConfirmationMessage(_booking: Booking) {
    const confirmationElement = document.getElementById(
      this.confirmationContainerElementId
    );
    if (!confirmationElement) return;

    confirmationElement.style.display = "flex";
    confirmationElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }

  hideErrorMessage() {
    const errorMessageElement = document.getElementById(
      this.errorMessageElementId
    );
    if (!errorMessageElement) return;

    errorMessageElement.style.display = "none";
  }

  showErrorMessage() {
    const errorMessageElement = document.getElementById(
      this.errorMessageElementId
    );
    if (!errorMessageElement) return;

    errorMessageElement.style.display = "block";
  }

  createWidgetContent() {
    this.widgetContainer.innerHTML = `
      <header class="widget__header">
        <h3>${this.heading}</h3>
      </header>

      <div id="error-message">Sorry, something went wrong. Please try again.</div>

      <div id="confirmation-message-container">
        <div class="wrapper">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
        </div>
        <h3 id="confirmation-message">Booking confirmed!</h3>
      </div>

      <form id="${this.formId}">
        <input type="hidden" id="widget-submission" name="widget-submission" value="true">
        <div class="form__field__group">
          <div class="form__field">
            <div class="form__field__required">
              <label for="booking[date]">Booking (date and time)</label><span class="required-field-symbol">*</span>
              <input type="hidden" id="${this.datePickerHiddenInputId}" name="booking[date]">
            </div>
            <wc-datepicker id="${this.datePickerId}" first-day-of-week="1" id="${this.datePickerId}"></wc-datepicker>
            <input type="time" id="${this.timePickerId}" name="booking[time]" required />
          </div>
          <div class="form__field form__field__required number-of-covers">
            <div class="form__field__required">
              <label for="booking[number_of_covers]">Guests</label><span class="required-field-symbol">*</span>
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

function initializeWidget(config: WidgetConfig) {
  return new RahuiWidget(config);
}

initializeWidget({
  apiKey: "b7511851-0a8b-4ee4-b14c-09e33d453cfd",
});
