import styled from "styled-components";
import mainTheme from "../../../themes/mainTheme";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 876px;
  height: auto;
  padding: 36px;
`;

export const Headline = styled.div`
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

export const SubHeadlineError = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  float: right;
  color: #ff1745;
`;

export const TitleText = styled.div`
  height: 24px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.downriver};
  margin-bottom: 5px;
`;

export const DescriptionText = styled.div`
  height: 21px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.baliHai};
`;

export const DescriptionLink = styled.span`
  width: 114px;
  height: 22px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.47;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.royalBlue};
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
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
  opacity: ${props => (props.disabled ? "0.5" : "1")};
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
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  &:hover {
    cursor: ${props => (props.disabled ? "default" : "pointer")};
  }
  &:invalid {
    color: ${mainTheme.colors.baliHai};
  }
`;

export const SectionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 366px;
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
export const NavigationFooter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const NavigationButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 144px;
  height: 40px;
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(5, 29, 66, 0.12);
  background-image: ${props =>
    props.type === "back"
      ? "linear-gradient(to bottom, #ffffff, #f7f9fc)"
      : "linear-gradient(to bottom, #5797fb, #397ee9)"};
  margin-left: auto;
  margin-right: 0;
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  &:hover {
    cursor: ${props => (props.disabled ? "default" : "pointer")};
    box-shadow: 0 1px 4px 0 rgba(5, 29, 66, 0.36);
  }
`;

export const NavigationButtonText = styled.div`
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.07);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: ${props =>
    props.type === "back"
      ? mainTheme.colors.downriver
      : mainTheme.colors.white};
  -webkit-touch-callout: none;
  user-select: none;
`;

export const WhiteTick = styled.div`
  width: 16px;
  height: 12px;
  background-image: url("/icons/Icon-Check-White.svg");
  background-size: cover;
  background-position: center;
  margin-left: 8px;
`;

export const RightArrow = styled.div`
  width: 16px;
  height: 12px;
  background-image: url("/icons/Icon-Arrow Right-White.svg");
  background-size: cover;
  background-position: center;
  margin-left: 8px;
`;

export const LeftArrow = styled.div`
  width: 16px;
  height: 12px;
  background-image: url("/icons/Icon-Arrow Left-Grey.svg");
  background-size: cover;
  background-position: center;
  margin-right: 8px;
`;

export const UploadAlgorithmWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 220px;
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 1px rgba(110, 141, 189, 0.2);
  margin-top: 18px;
`;

export const UploadIcon = styled.div`
  margin-top: 42px;
  background-image: url("/icons/Icon-56px-Upload.svg");
  background-size: cover;
  background-position: center;
  width: 55.5px;
  height: 44px;
`;

export const UploadTypeDescription = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.3px;
  color: ${mainTheme.colors.baliHai};
`;

export const IconBox = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(110, 141, 189, 0.4);
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export const FailureIcon = styled.div`
  background-image: url("/icons/Icon-X-Red.svg");
  width: 24px;
  height: 24px;
  background-position: center;
  background-size: cover;
`;

export const ErrorBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: #f7f9fc;
  border-top: solid 1px rgba(110, 141, 189, 0.2);
  padding: 18px 20px;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.2px;
  margin-top: 4px;
  color: #8194b2;
`;

export const CodeEditorHeader = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 15px 20px 17px 20px;
  width: 100%;
  height: 54px;
  box-shadow: 0 1px 4px 0 rgba(23, 34, 51, 0.4);
  background-color: #37455a;
  margin-top: 18px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const CodeEditorHeaderText = styled.div`
  height: 22px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.47;
  letter-spacing: 0.2px;
  color: #adbcd4;
`;

export const CodeEditorDivider = styled.div`
  width: 1px;
  height: 24px;
  opacity: 0.6;
  background-color: #8194b2;
  margin: 0 18px;
`;
