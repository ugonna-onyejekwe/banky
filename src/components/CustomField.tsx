import React, { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import DateField from "./DateField";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuEyeOff } from "react-icons/lu";

const CustomFormItem = ({
  label,
  placeholder,
  field,
  type,
}: CustomFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

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
          <div className="relative">
            <Input
              placeholder={placeholder}
              {...field}
              type={showPassword ? "text" : "password"}
              className="bg-white flex-1"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute top-[20px] text-[17px] right-3"
            >
              {!showPassword ? <MdOutlineRemoveRedEye /> : <LuEyeOff />}{" "}
            </span>
          </div>
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
