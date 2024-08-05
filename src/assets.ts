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
  }
`;
