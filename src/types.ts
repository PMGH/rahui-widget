export type Payload = {
  "widget-submission": boolean;
  booking: {
    datetime: string;
    number_of_covers: string;
    notes: string;
  };
  customer: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  };
};

export type Datepicker = HTMLElement & {
  disableDate: (date: Date) => boolean;
};

export type WidgetConfig = {
  apiKey: string;
};

export type Booking = {
  created_at: string;
  customer_id: string;
  datetime: string;
  id: string;
  notes: string;
  number_of_covers: number;
  updated_at: string;
  url: string;
  user_id: null;
};

export type WidgetContentProps = {
  heading: string;
  formId: string;
  datePickerHiddenInputId: string;
  datePickerId: string;
  timePickerId: string;
};

export type WidgetSettings = any;
