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
  className: string;
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
  user: User;
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
  dateOFBirth: Date;
  ssn: string;
  email: string;
  password: string;
};

declare type User = {
  $id: string;
  email: string;
  userId: string;
  dwollaCustomerUrl: string;
  dwollaCustomerId: string;
  firstName: string;
  lastName: string;
  name: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};

type RightSidebarProps = {
  user: User;
};

type SidebarContentProps = {
  type: "lg_sidebar" | "sm_sidebar";
  user: User;
};
