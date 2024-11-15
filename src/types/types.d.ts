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

type headerContentProps = {
  headerText: string;
  subHeadertext?: string;
  subText: string;
};

type profileImageProps = {
  name: string;
  image?: string;
};
