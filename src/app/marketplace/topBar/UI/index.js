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

export const DropdownContainer = styled.div`
  width: 181px;
  height: 36px;
  border-radius: 3px;
  border: solid 1px rgba(109, 140, 189, 0.25);
  overflow: hidden;
  background: no-repeat #ffffff;
  background-image: url("${props => props.icon}");
  background-position: 90% 50%;
`;

export const DropdownWrapper = styled.div`
  margin: 5px 14px 7px 14px;
`;

export const Dropdown = styled.select`
  font-family: ${mainTheme.font};
  -webkit-appearance: none;
  border-radius: 0;
  -webkit-border-radius: 0;
  background: transparent;
  overflow: hidden;
  outline: none;
  border: none;
  width: 60%;
  height: 24px;
  font-family: ${mainTheme.font};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.2px;
  margin-left: 2px;
  color: ${mainTheme.colors.downriver};
  &:hover {
    cursor: pointer;
  }
`;

// Apparently impossible to style options with CSS
// If we want this, we need to use a library:
// https://github.com/fraserxu/react-dropdown

export const Option = styled.option`
  font-family: ${mainTheme.font};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.2px;
  color: ${props =>
    props.placeholder ? mainTheme.colors.baliHai : mainTheme.colors.downriver};
`;

export const Description = styled.span`
  width: 53px;
  height: 24px;
  font-family: ${mainTheme.font};
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.BaliHai};
`;
