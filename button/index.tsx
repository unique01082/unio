import * as React from "react";
import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd";

export interface ButtonProps extends AntdButtonProps {}

export const Button: React.FC<ButtonProps> = (props) => (
  <AntdButton {...props}></AntdButton>
);

Button.defaultProps = {
  type: "ghost",
  style: { margin: 16 },
};
