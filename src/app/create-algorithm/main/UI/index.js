import styled from "styled-components";
import mainTheme from "../../../themes/mainTheme";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 876px;
  height: auto;
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
  flex: 0 1 auto;
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
  margin: 30px 0 24px 0;
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
  background: url("${props => props.icon}") 0 0 no-repeat #ffffff;
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
  &:invalid {
    color: ${mainTheme.colors.baliHai};
  }
`;

export const DropdownSectionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DropdownSectionColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionsWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 42px;
  left: 0;
  z-index: 1000;
  width: 366px;
  border-radius: 3px;
  box-shadow: 0 2px 8px 0 rgba(110, 141, 189, 0.36);
  background-color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.2px;
  color: #0d2957;
  padding: 13px 20px;
`;

export const Checkbox = styled.input`
  border-color: ${mainTheme.colors.baliHai};
  box-shadow: none;
  margin-right: 12px;
`;

export const DataLabel = styled.label`
  margin: 4px 0px;
  width: 304px;
  height: 24px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.baliHai};
  -webkit-touch-callout: none;
  user-select: none;
  &:hover {
    color: ${mainTheme.colors.downriver};
    cursor: pointer;
  }
`;

export const DMLContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  width: 57px;
  height: 24px;
  margin: 12px;
  border-radius: 2px;
  background-color: #3c81ed;
`;

export const DMLLogo = styled.div`
  width: 12px;
  height: 12px;
  background-image: url("/iconLogo.svg");
  background-size: cover;
  background-position: center;
`;

export const DMLText = styled.div`
  height: 16px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.5px;
  color: #ffffff;
`;

export const NextButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 144px;
  height: 40px;
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(5, 29, 66, 0.12);
  background-image: linear-gradient(to bottom, #5797fb, #397ee9);
  margin-left: auto;
  margin-right: 0;
  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 4px 0 rgba(5, 29, 66, 0.36);
  }
`;

export const NextButtonText = styled.div`
  width: 74px;
  height: 24px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.07);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: ${mainTheme.colors.white};
`;

export const RightArrow = styled.div`
  width: 16px;
  height: 12px;
  background-image: url("/icons/Icon-Arrow Right-White.svg");
  background-size: cover;
  background-position: center;
  margin-left: 8px;
`;
