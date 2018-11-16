import styled from "styled-components";
import mainTheme from "../../../themes/mainTheme";

export const Sidebar = styled.div`
  width: 264px;
  height: auto;
  box-shadow: inset -1px 0 0 0 rgba(110, 141, 189, 0.1);
  background-color: rgba(110, 141, 189, 0.04);
  padding: 24px;
`;

export const StepRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 28px;
  &:hover {
    cursor: ${props => props.readyToSubmit && "pointer"};
  }
`;

export const DividerRow = styled.div`
  width: 2px;
  height: 12px;
  border-radius: 1px;
  background-color: ${mainTheme.colors.baliHai};
  margin: 3px 0px 3px 13px;
  opacity: 0.2;
`;

export const StepNumberWrapperInactive = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid rgba(129, 148, 178, 0.2);
`;

export const StepNumberWrapperActive = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${mainTheme.colors.royalBlue};
`;

export const StepNumberWrapperDone = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid rgba(60, 129, 237, 0.4);
`;

export const StepDoneTick = styled.div`
  width: 16px;
  height: 12px;
  background-image: url("/icons/Icon-Check-Blue.svg");
  background-size: cover;
  background-position: center;
`;

export const StepNumber = styled.div`
  height: 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.14;
  color: ${props =>
    props.active ? mainTheme.colors.white : mainTheme.colors.baliHai};
`;

export const StepTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.2px;
  margin-left: 16px;
  color: ${props =>
    props.active ? mainTheme.colors.downriver : mainTheme.colors.baliHai};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(110, 141, 189, 0.2);
  margin-top: 24px;
  margin-bottom: 18px;
`;

export const SaveProgressText = styled.div`
  height: 42px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.baliHai};
`;

export const SaveProgressButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 36px;
  border-radius: 3px;
  border: solid 1px #e1e8f2;
  background-image: linear-gradient(to bottom, #ffffff, #f7f9fc);
  margin-top: 18px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 2px 1px rgba(110, 141, 189, 0.1);
  }
`;

export const SaveProgressButtonText = styled.div`
  width: 98px;
  height: 22px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.47;
  letter-spacing: 0.3px;
  -webkit-touch-callout: none;
  user-select: none;
  color: ${mainTheme.colors.downriver};
`;

export const DeleteAlgorithmButton = styled.div`
  width: 105px;
  height: 21px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: #f50031;
  margin-top: 18px;
  -webkit-touch-callout: none;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;
