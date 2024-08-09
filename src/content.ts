import { WidgetContentProps } from "./types";

export const getWidgetContent = ({
  heading,
  buttonText,
  formId,
  datePickerHiddenInputId,
  datePickerId,
  timePickerHoursId,
  timePickerMinutesId,
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
    <div id="confirmation-booking-container">
      <span id="confirmation-booking-number-of-covers"></span>
      <span id="confirmation-booking-datetime"></span>
    </div>
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
        <div class="time-select-container">
          <select id="${timePickerHoursId}" name="booking[time][hours]" required class="time-select" data-time="hours">
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
          <select id="${timePickerMinutesId}" name="booking[time][minutes]" required class="time-select" data-time="minutes">
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

    <button type="submit">${buttonText}</button>
  </form>
`;
