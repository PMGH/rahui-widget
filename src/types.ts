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

type WidgetConfigContent = {
  heading?: string;
  buttonText?: string;
};
export type WidgetConfig = {
  apiKey: string;
  rootElementId?: string;
  content?: WidgetConfigContent;
  localServerBaseUrl?: string;
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

export type WidgetContentProps = WidgetConfigContent & {
  formId: string;
  datePickerHiddenInputId: string;
  datePickerId: string;
  timePickerHoursId: string;
  timePickerMinutesId: string;
};

export type WidgetSettings = {
  button_text: string;
  heading_text: string;
  max_covers_per_booking: number;
  root_element_id: string;
};
export type OpeningHours = {
  opening_hours: {
    close_at: string;
    day: string;
    open_at: string;
  };
};

declare global {
  interface Window {
    RahuiWidget: any;
  }
}
window.RahuiWidget = window.RahuiWidget || {};
