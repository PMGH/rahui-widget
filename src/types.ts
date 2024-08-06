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
