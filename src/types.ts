export type Payload = {
  "widget-submission": string;
  datetime: string;
  email: string;
  first_name: string;
  last_name: string;
  notes: string;
  number_of_covers: string;
  phone: string;
};

export type Datepicker = HTMLElement & {
  disableDate: (date: Date) => boolean;
};
