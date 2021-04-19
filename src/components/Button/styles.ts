import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';
interface ContainerProps {
  loading?: number;
}
const spin = keyframes`
  to {
    transform: rotate(359deg);
  }
`;

const grow = keyframes`
  to {
        width: 15px;
        height: 15px;
        margin-top: -8px;
        right: 13px;
    }
`;

export const Container = styled.button<ContainerProps>`
  cursor: pointer;
  background: #f8f9fa;
  height: 40px;
  border-radius: 10px;
  border: 0;
  width: 150px;
  font-weight: 400;
  transition: background-color 0.2s;
  margin: 0px;
  font: normal 14px/12px Roboto;
  color: #333;
  /* Important part */
  position: relative;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.1, '#f8f9fa')};
  }
  &:focus {
    outline: none;
  }
  &[disabled] {
    cursor: not-allowed;
    background: #cdcdcd;
    color: #8e8787;
    border: none;
  }
  ${props =>
    props.loading &&
    css`
      background: ${shade(0.1, '#f8f9fa')};
      opacity: 0.6;
      padding-right: 40px;
      cursor: not-allowed!important;

    :after {
      content: '';
      position: absolute;
      border-radius: 100%;
      right: 6px;
      top: 40%;
      width: 0;
      height: 0;
      border: 4px solid rgba(255, 255, 255, 0.5);
      border-left-color: white;
      border-top-color: white;
      animation: ${spin} 0.6s infinite linear, ${grow} 0.3s forwards ease-out!important;
    `}
`;
