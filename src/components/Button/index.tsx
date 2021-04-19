import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  isLoading,
  children,
  ...rest
}: ButtonProps) => (
  <Container loading={isLoading ? 1 : 0} {...rest}>
    {children}
  </Container>
);

export default Button;
