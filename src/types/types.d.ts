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

type Account = {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  mask: string;
  institutionId: string;
  name: string;
  type: string;
  subtype: string;
  appwriteItemId: string;
  shareableId: string;
};

type DoughnutChartProps = {
  accounts: Account[];
};

type MobilseSideBarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

type signInProps = {
  email: string;
  password: string;
};

type signUpProps = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  dateOFBirth: string;
  ssn: string;
  email: string;
  password: string;
};
