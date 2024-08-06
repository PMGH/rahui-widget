import { WidgetContentProps } from "./types";

export const getWidgetContent = ({
  heading,
  formId,
  datePickerHiddenInputId,
  datePickerId,
  timePickerId,
}: WidgetContentProps) => `
  <header class="widget__header">
    <h3>${heading}</h3>
  </header>

  <div id="error-message">Sorry, something went wrong. Please try again.</div>

  <div id="confirmation-message-container">
    <div class="wrapper">
      <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
    </div>
    <h3 id="confirmation-message">Booking confirmed!</h3>
  </div>

  <form id="${formId}">
    <input type="hidden" id="widget-submission" name="widget-submission" value="true">
    <div class="form__field__group">
      <div class="form__field">
        <div class="form__field__required">
          <label for="booking[date]">Booking (date and time)</label><span class="required-field-symbol">*</span>
          <input type="hidden" id="${datePickerHiddenInputId}" name="booking[date]">
        </div>
        <wc-datepicker id="${datePickerId}" first-day-of-week="1" id="${datePickerId}"></wc-datepicker>
        <input type="time" id="${timePickerId}" name="booking[time]" required />
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
