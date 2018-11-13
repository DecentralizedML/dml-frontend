import styled from "styled-components";
import mainTheme from "../../../themes/mainTheme";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 876px;
  height: 737px;
  padding: 36px;
`;

export const Headline = styled.div`
  width: 180px;
  height: 28px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.56;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.downriver};
`;

export const SubHeadline = styled.div`
  width: 756px;
  height: 16px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.5px;
  color: ${mainTheme.colors.baliHai};
  text-transform: uppercase;
  margin-bottom: 8px;
  margin-top: 18px;
`;

export const DescriptionText = styled.div`
  width: 414px;
  height: 21px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.baliHai};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(110, 141, 189, 0.2);
`;

export const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 1px rgba(109, 140, 189, 0.25);
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.2px;
  padding: 7px 16px 9px 16px;
  color: ${mainTheme.colors.downriver};
  &::placeholder {
    color: ${mainTheme.colors.baliHai};
  }
`;

export const DropdownContainer = styled.div`
  width: 366px;
  height: 40px;
  border-radius: 3px;
  border: solid 1px rgba(109, 140, 189, 0.25);
  overflow: hidden;
  background: no-repeat #ffffff;
  background-image: url("${props => props.icon}");
  background-position: 95% 50%;
`;

export const DropdownWrapper = styled.div`
  padding: 7px 16px 9px 16px;
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
  width: 100%;
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

export const Option = styled.option`
  font-family: ${mainTheme.font};
  color: ${mainTheme.colors.downriver};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.2px;
`;
