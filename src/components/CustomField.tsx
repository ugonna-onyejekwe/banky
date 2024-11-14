import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const CustomFormItem = ({
  label,
  placeholder,
  field,
  type,
}: CustomFieldProps) => {
  if (type === "TEXT") {
    return (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} className="bg-white" />
        </FormControl>

        <FormMessage />
      </FormItem>
    );
  } else if (type === "PASSWORD") {
    return (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            type="password"
            className="bg-white"
          />
        </FormControl>

        <FormMessage />
      </FormItem>
    );
  }
};

const CustomField = (props: CustomFieldProps) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => <CustomFormItem {...props} field={field} />}
    />
  );
};

export default CustomField;
