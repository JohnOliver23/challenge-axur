import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

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
      border-color: #c53030 !important;
      svg {
        color: #c53030 !important;
      }
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
    outline: none;
    font-weight: 400;
    font-size: 16px;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
    width: 30px;
    height: 30px;
  }
`;
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 1rem;
  svg {
    margin: 0;
    width: 20px !important;
    height: 20px !important;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
