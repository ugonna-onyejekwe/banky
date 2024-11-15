import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import DateField from "./DateField";

const CustomFormItem = ({
  label,
  placeholder,
  field,
  type,
}: CustomFieldProps) => {
  if (type === "TEXT") {
    return (
      <FormItem className="flex-1  w-full">
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} className="bg-white " />
        </FormControl>

        <FormMessage />
      </FormItem>
    );
  } else if (type === "PASSWORD") {
    return (
      <FormItem className="flex-1 w-full">
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            type="password"
            className="bg-white flex-1"
          />
        </FormControl>

        <FormMessage />
      </FormItem>
    );
  } else if (type === "NUMBER") {
    return (
      <FormItem className="flex-1 w-full">
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            type="number"
            className="bg-white flex-1"
          />
        </FormControl>

        <FormMessage />
      </FormItem>
    );
  } else if (type === "DATE") {
    return (
      <FormItem className="flex-1 w-full">
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <DateField date={field.value} setDate={field.onChange} />
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
