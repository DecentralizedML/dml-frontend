import styled from "styled-components";
import mainTheme from "../../../themes/mainTheme";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(62, 76, 99, 0.84);
  display: block;
`;

export const Card = styled.div`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  width: 720px;
  height: 571px;
  border-radius: 3px;
  box-shadow: 0 1px 6px 0 rgba(4, 37, 86, 0.04), 0 1px 0 0 rgba(4, 37, 86, 0.04);
  background-color: #ffffff;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.div`
  width: 50px;
  position: fixed;
  background: red;
  right: -10%;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  margin: 24px;
`;
