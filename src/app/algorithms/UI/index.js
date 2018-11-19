import styled from "styled-components";
import mainTheme from "../../themes/mainTheme";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyAlgorithmsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 32px auto;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 306px;
  height: 400px;
  border-radius: 2px;
  box-shadow: 0 1px 0 0 rgba(110, 141, 189, 0.1),
    0 2px 6px 0 rgba(4, 37, 86, 0.04);
  background-color: #ffffff;
  padding: 36px;
  margin: 0 30px;
`;

export const MainWrapper = styled.div`
  width: 650px;
  height: auto;
  margin: 0 30px;
`;

export const AvatarImage = styled.div`
  width: 84px;
  height: 84px;
  background-image: url("/Avatar.png");
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

export const UserName = styled.div`
  margin-top: 12px;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: 0.3px;
  color: ${mainTheme.colors.downriver};
`;

export const UserDescription = styled.div`
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.baliHai};
  text-align: center;
`;

export const Divider = styled.div`
  margin: 36px 0;
  width: 306px;
  height: 1px;
  background-color: rgba(110, 141, 189, 0.2);
`;

export const UserKPINumber = styled.div`
  height: 40px;
  font-size: 32px;
  font-weight: 500;
  color: ${mainTheme.colors.downriver};
`;

export const DMLWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 57px;
  height: 24px;
  border-radius: 2px;
  background-color: ${mainTheme.colors.royalBlue};
`;

export const DMLLogo = styled.div`
  width: 12px;
  height: 12px;
  background-image: url("./iconLogo.svg");
  background-position: center;
  background-size: contain;
`;

export const DMLText = styled.div`
  height: 16px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.5px;
  color: ${mainTheme.colors.white};
`;

export const KPITitle = styled.div`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${mainTheme.colors.baliHai};
`;

export const DMLLogoBlue = styled.div`
  width: 16px;
  height: 16px;
  background-image: url("./logos/Logo-Icon-Blue.svg");
  background-position: center;
  background-size: contain;
`;

// Main View:
export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 1 auto;
  min-width: 600px;
  height: 106px;
  padding: 18px 24px;
  margin: 18px 0px;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 0 1px 6px 0 rgba(4, 37, 86, 0.04), 0 1px 0 0 rgba(4, 37, 86, 0.04);
  background-color: #ffffff;
`;

export const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.67;
  letter-spacing: 0.2px;
  color: #0d2a56;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 82px;
  background-color: rgba(110, 141, 189, 0.2);
  margin: 0 30px;
`;

// Algorithm Status Styling
export const ContinueProgessButton = styled.div`
  margin-bottom: 4px;
  display: flex;
  width: 134px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2px 8px 3px 8px;
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(5, 29, 66, 0.12);
  background-image: linear-gradient(to bottom, #5797fb, #397ee9);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

export const UnderReviewLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${props => (props.label.length > 12 ? "157px" : "102px")};
  padding: 2px 8px 3px 8px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: #745b08;
  border-radius: 2px;
  background-color: #fffac9;
`;

export const ApprovedLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 76px;
  padding: 2px 8px 3px 8px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  border-radius: 2px;
  color: #008b41;
  background-color: #ddfce6;
`;

export const RejectedLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 72px;
  padding: 2px 8px 3px 8px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: #db0f38;
  border-radius: 2px;
  background-color: #ffedf1;
`;

export const AlgoPriceNumber = styled.div`
  margin-right: 4px;
  width: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #0d2957;
`;

export const PriceContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50px;
  height: 24px;
  border: solid 2px rgba(60, 129, 237, 0.5);
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-right: none;
  font-size: 16px;
  font-weight: 500;
  padding-right: 8px;
  margin-right: -2px;
  letter-spacing: 0.5px;
  color: #0d2957;
`;

export const EditButton = styled.div`
  position: absolute;
  top: -6px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 26px;
  border-radius: 3px;
  border: solid 1px #e1e8f2;
  background-image: linear-gradient(to bottom, #ffffff, #f7f9fc);
  margin-top: 18px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: #0d2957;
  user-select: none;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 2px 1px rgba(110, 141, 189, 0.1);
  }
`;
