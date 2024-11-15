type CustomFieldProps = {
  control: any;
  field?: any;
  label: string;
  name: string;
  placeholder?: string;
  type: "TEXT" | "NUMBER" | "PASSWORD" | "DATE";
};

type datePickerTypes = {
  date: any;
  setDate: (value: any) => void;
};
