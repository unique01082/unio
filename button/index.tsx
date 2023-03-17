import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import * as React from 'react';

export interface ButtonProps extends Omit<AntdButtonProps, 'onClick'> {
  onClick?: AntdButtonProps['onClick'];
}

export const Button: React.FC<ButtonProps> = (props) => <AntdButton {...props}></AntdButton>;

Button.defaultProps = {
  style: { margin: 16 },
};
