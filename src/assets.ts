export const styles = `
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
`;
