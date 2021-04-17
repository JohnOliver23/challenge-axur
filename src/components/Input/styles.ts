import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-bottom: 1px solid #bdbdbd;

  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #6b8067;
      border-color: #6b8067;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #6b8067;
    `}
  input {
    font-family: Roboto;
    font-style: normal;
    flex: 1;
    background: transparent;
    border: 0;
    color: #6b8067;
    text-align: center;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    &::placeholder {
      text-align: center;
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
    width: 30px;
    height: 30px;
  }
`;
