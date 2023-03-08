import * as React from "react";

export interface ButtonProps {}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type="button"
      style={{ color: "red", padding: 8, border: "1px solid blue" }}
      {...props}
    ></button>
  );
};
