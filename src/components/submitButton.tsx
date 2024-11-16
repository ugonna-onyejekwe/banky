import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const SubmitButton = ({
  loading,
  text,
}: {
  loading: boolean;
  text: string;
}) => {
  return <Button disabled={loading}>{loading ? "Loading..." : text}</Button>;
};

export default SubmitButton;
