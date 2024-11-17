import React from "react";
import { Button } from "./ui/button";

const SubmitButton = ({
  loading,
  text,
}: {
  loading: boolean;
  text: string;
}) => {
  return (
    <Button type="submit" disabled={loading}>
      {loading ? "Loading..." : text}
    </Button>
  );
};

export default SubmitButton;
