import styled from "styled-components";
import mainTheme from "../../../themes/mainTheme";

export const SearchResultCount = styled.div`
  margin-left: 24px;
  margin-bottom: 24px;
  height: 30px;
  font-family: ${mainTheme.font};
  font-size: 18px;
  line-height: 1.67;
  letter-spacing: 0.3px;
  color: ${mainTheme.colors.BaliHai};
`;

export const SearchResultNumber = styled.span`
  font-weight: 600;
`;

export const Dropdown = styled.div`
  width: 181px;
  height: 36px;
  border-radius: 3px;
  border: solid 1px rgba(109, 140, 189, 0.25);
  overflow: hidden;
  background: no-repeat #ffffff;
  background-image: url("${props => props.icon}");
  background-position: center right;
`;

export const DropdownInner = styled.select`
  -webkit-appearance: none;
  border-radius: 0;
  -webkit-border-radius: 0;
  background: transparent;
  padding: 3px;
  font-size: 1.2em;
  height: 30px;
  width: 120%;
  overflow: hidden;
  outline: none;
  border: none;
`;
