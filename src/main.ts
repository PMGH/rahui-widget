import { getWidgetContent } from "./content.js";
import {
  Booking,
  Datepicker,
  OpeningHours,
  WidgetConfig,
  WidgetSettings,
  type Payload,
} from "./types";
import { WcDatepicker } from "wc-datepicker/dist/components/wc-datepicker";

import "./styles/global.scss";
import "wc-datepicker/dist/themes/light.css";

class RahuiWidget {
  apiKey = "";
  apiBaseUrl = "";
  defaultRequestHeaders: {};
  widgetContainer = null as unknown as HTMLDivElement;
  form = null as unknown as HTMLElement | null;

  // Widget DOM Element IDs
  formId = "rahui-booking-form";
  datePickerId = "date-picker";
  timePickerHoursId = "time-picker-hours";
  timePickerMinutesId = "time-picker-minutes";
  datePickerHiddenInputId = "hidden-date-input";
  confirmationContainerElementId = "confirmation-message-container";
  confirmationBookingDatetimeElementId = "confirmation-booking-datetime";
  confirmationBookingCoversElementId = "confirmation-booking-number-of-covers";
  errorMessageElementId = "error-message";

  // Development
  rootElementIdOverride;
  localServerBaseUrl;

  // User Defined Widget Settings
  rootElementId = "";
  widgetPreview = false;
  heading = "";
  buttonText = "";
  maxCoversPerBooking: number | undefined;

  constructor({
    apiKey,
    localServerBaseUrl,
    rootElementIdOverride,
    widgetPreview,
  }: WidgetConfig) {
    this.rootElementId;
    this.apiKey = apiKey;
    this.apiBaseUrl = localServerBaseUrl || "https://www.rahui-booking.com";
    this.defaultRequestHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    };
    this.localServerBaseUrl = localServerBaseUrl;
    this.rootElementIdOverride = rootElementIdOverride;
    this.widgetPreview = widgetPreview || false;
    this.heading = "Book a table";
    this.buttonText = "Create booking";

    this.initialize();
  }

  async initialize() {
    await this.getWidgetSettings();
  }

  setupWidget() {
    let rootElement;
    let container;

    // Create widget container, populate it and append it to the rootElement
    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__container");
    this.createWidgetContent();

    if (Boolean(this.rootElementId.length)) {
      rootElement = document.getElementById(this.rootElementId);
    } else {
      container = document.createElement("div");
      document.body.appendChild(container);
    }
    (rootElement || container)?.appendChild(this.widgetContainer);

    // Customise form submission
    this.form = document.getElementById(this.formId);
    this.form &&
      this.form.addEventListener("submit", this.formSubmit.bind(this));

    /**
     * Setup date picker using wc-datepicker
     * https://sqrrl.github.io/wc-datepicker/
     */
    customElements.get("wc-datepicker") ||
      customElements.define("wc-datepicker", WcDatepicker);
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
        this.getOpeningHours(event.detail);
      });
    }
    this.getOpeningHours();
    this.setupEventListenersForRequiredFields();
  }

  async getWidgetSettings() {
    const url = `${this.apiBaseUrl}/api/widgets/settings`;

    const response = await fetch(url, {
      headers: this.defaultRequestHeaders,
      method: "GET",
    });

    if (response.status === 200) {
      const settings = (await response.json()) as WidgetSettings;
      this.applySettings(settings);
      this.setupWidget();
    } else {
      console.error({ body: await response.json() });
    }
  }

  applySettings(settings: WidgetSettings) {
    const {
      button_text,
      heading_text,
      max_covers_per_booking,
      root_element_id,
    } = settings;
    this.buttonText = button_text || this.buttonText;
    this.heading = heading_text || this.heading;
    this.rootElementId =
      this.rootElementIdOverride || root_element_id || this.rootElementId;
    this.maxCoversPerBooking = max_covers_per_booking;
  }

  async getOpeningHours(date = undefined) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const query =
      date && timezone ? `?date=${date}&timezone=${timezone}` : undefined;
    const url = query
      ? `${this.apiBaseUrl}/api/widgets/opening_hours${query}`
      : `${this.apiBaseUrl}/api/widgets/opening_hours`;

    const response = await fetch(url, {
      headers: this.defaultRequestHeaders,
      method: "GET",
    });

    if (response.status === 200) {
      const openingHours = (await response.json()) as OpeningHours;
      this.applyOpeningHours(openingHours);
    } else {
      console.error({ body: await response.json() });
    }
  }

  applyOpeningHours(openingHours: OpeningHours) {
    const hoursSelect = document.getElementById(this.timePickerHoursId);
    if (hoursSelect && openingHours) {
      const { open_at, close_at } = openingHours?.opening_hours;
      const options = Array.from(Array(23).keys()).map((index) => {
        const option = document.createElement("option");
        option.value = String(index);
        option.innerHTML =
          index < 10 ? String(index).padStart(2, "0") : String(index);
        return option;
      });
      const validOptions: HTMLOptionElement[] = [];
      options.forEach((option) => {
        if (option.value >= open_at && option.value <= close_at) {
          validOptions.push(option);
        }
      });
      hoursSelect.innerHTML = "";
      hoursSelect.append(...validOptions);
    }
  }

  async formSubmit(e: any) {
    e.preventDefault();
    const data = new FormData(e.target);
    const parsedData = Object.fromEntries(data.entries());

    // Booking
    const date = new Date(parsedData["booking[date]"] as string);
    const hours = parsedData["booking[time][hours]"] as string;
    const minutes = parsedData["booking[time][minutes]"] as string;
    const datetime = new Date(
      date.setHours(parseInt(hours), parseInt(minutes), 0)
    );
    const datetimeUTC = datetime.toUTCString();
    const numberOfCovers = String(parsedData["booking[number_of_covers]"]);
    const notes = String(parsedData["booking[notes]"]);

    // Customer
    const firstName = String(parsedData["customer[first_name]"]);
    const lastName = String(parsedData["customer[last_name]"]);
    const email = String(parsedData["customer[email]"]);
    const phone = String(parsedData["customer[phone]"]);

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
    const url = `${this.apiBaseUrl}/api/widgets/create_booking`;

    if (url && payload) {
      const response = await fetch(url, {
        headers: this.defaultRequestHeaders,
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

  showConfirmationMessage(booking: Booking) {
    const confirmationElement = document.getElementById(
      this.confirmationContainerElementId
    );
    const confirmationBookingDatetimeElement = document.getElementById(
      this.confirmationBookingDatetimeElementId
    );
    const confirmationBookingCoversElement = document.getElementById(
      this.confirmationBookingCoversElementId
    );
    if (!confirmationElement || !booking) return;

    if (confirmationBookingDatetimeElement) {
      const date = new Date(booking.datetime);
      const locale = Intl.DateTimeFormat().resolvedOptions().locale;
      const datetime = new Intl.DateTimeFormat(locale, {
        dateStyle: "full",
        timeStyle: "short",
      }).format(date);
      confirmationBookingDatetimeElement.textContent = datetime;
    }

    if (confirmationBookingCoversElement) {
      const numberOfCovers = String(booking.number_of_covers);
      const numberOfCoversMessage =
        booking.number_of_covers === 1
          ? `${numberOfCovers} Person | `
          : `${numberOfCovers} People | `;
      confirmationBookingCoversElement.textContent = numberOfCoversMessage;
    }

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
      buttonText: this.buttonText,
      formId: this.formId,
      maxCoversPerBooking: this.maxCoversPerBooking,
      datePickerHiddenInputId: this.datePickerHiddenInputId,
      datePickerId: this.datePickerId,
      timePickerHoursId: this.timePickerHoursId,
      timePickerMinutesId: this.timePickerMinutesId,
      widgetPreview: this.widgetPreview,
    });
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

if (Boolean(import.meta.env.DEV)) {
  const testRootElementId = "test-root-element";
  const isRootElementTest = import.meta.env.VITE_TEST_ROOT_ELEMENT === "true";
  if (isRootElementTest) {
    const testRootElement = document.createElement("div");
    testRootElement.id = testRootElementId;
    document.body.appendChild(testRootElement);
  }

  new RahuiWidget({
    apiKey: "b7511851-0a8b-4ee4-b14c-09e33d453cfd",
    localServerBaseUrl: "http://localhost:3001",
  });
}

window.RahuiWidget = RahuiWidget;
