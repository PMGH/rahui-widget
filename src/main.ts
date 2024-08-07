import { styles } from "./assets.js";
import { getWidgetContent } from "./content.js";
import {
  Booking,
  Datepicker,
  OpeningHours,
  WidgetConfig,
  WidgetSettings,
  type Payload,
} from "./types";
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

    this.getWidgetSettings();
    this.getOpeningHours();
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

  async getWidgetSettings() {
    const {
      VITE_IS_PRODUCTION,
      VITE_RAHUI_BOOKING_LOCAL_SERVER_URL,
      VITE_RAHUI_BOOKING_PRODUCTION_SERVER_URL,
      VITE_RAHUI_BOOKING_WIDGET_SETTINGS_PATH,
    } = import.meta.env;

    const base_url =
      VITE_IS_PRODUCTION === "true"
        ? VITE_RAHUI_BOOKING_PRODUCTION_SERVER_URL
        : VITE_RAHUI_BOOKING_LOCAL_SERVER_URL;
    const url = `${base_url}/${VITE_RAHUI_BOOKING_WIDGET_SETTINGS_PATH}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      method: "GET",
    });

    if (response.status === 200) {
      const settings = (await response.json()) as WidgetSettings;
      console.log({ settings });
      this.applySettings(settings);
    } else {
      console.error({ body: await response.json() });
    }
  }

  applySettings(settings: WidgetSettings) {
    this.setMaxCoversPerBooking(settings);
  }

  setMaxCoversPerBooking(settings: WidgetSettings) {
    const maxCoversPerBooking = settings.max_covers_per_booking;
    const numberOfCoversLabel = document.getElementById(
      "number_of_covers_label"
    );
    const numberOfCoversInput = document.getElementById(
      "number_of_covers"
    ) as HTMLInputElement;
    if (maxCoversPerBooking && numberOfCoversLabel && numberOfCoversInput) {
      numberOfCoversLabel.textContent =
        numberOfCoversLabel.textContent + ` (max: ${maxCoversPerBooking})`;
      numberOfCoversInput.max = maxCoversPerBooking.toString();
    }
  }

  async getOpeningHours() {
    const {
      VITE_IS_PRODUCTION,
      VITE_RAHUI_BOOKING_LOCAL_SERVER_URL,
      VITE_RAHUI_BOOKING_PRODUCTION_SERVER_URL,
      VITE_RAHUI_BOOKING_WIDGET_OPENING_HOURS_PATH,
    } = import.meta.env;

    const base_url =
      VITE_IS_PRODUCTION === "true"
        ? VITE_RAHUI_BOOKING_PRODUCTION_SERVER_URL
        : VITE_RAHUI_BOOKING_LOCAL_SERVER_URL;
    const url = `${base_url}/${VITE_RAHUI_BOOKING_WIDGET_OPENING_HOURS_PATH}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      method: "GET",
    });

    if (response.status === 200) {
      const openingHours = (await response.json()) as OpeningHours;
      console.log({ openingHours });
      // this.applyOpeningHours(openingHours);
    } else {
      console.error({ body: await response.json() });
    }
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
    this.widgetContainer.innerHTML = getWidgetContent({
      heading: this.heading,
      formId: this.formId,
      datePickerHiddenInputId: this.datePickerHiddenInputId,
      datePickerId: this.datePickerId,
      timePickerId: this.timePickerId,
    });
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
