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
  width: 50%;
  height: auto;
  top: 50%;
  left: 50%;
  border-radius: 3px;
  box-shadow: 0 1px 6px 0 rgba(4, 37, 86, 0.04), 0 1px 0 0 rgba(4, 37, 86, 0.04);
  background-color: #ffffff;
  transform: translate(-50%, -50%);
`;

export const CloseIconContainer = styled.div`
  position: fixed;
  width: 100px;
  height: 80px;
  top: -30px;
  right: -100px;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  margin: 24px;
`;

export const CloseIcon = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  width: 18px;
  height: 18px;
  object-fit: contain;
  background-image: url("/icons/Icon-X-White.svg");
  background-size: cover;
  background-position: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 56px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: solid 1px #e1e8f2;
  border-bottom: none;
  box-sizing: border-box;
`;

export const PurchaseButton = styled.button`
  width: 132px;
  height: 40px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(5, 29, 66, 0.12);
  border: solid 1px rgba(66, 134, 240, 0.6);
  border-top: none;
  background-image: linear-gradient(to bottom, #5797fb, #397ee9);
  padding: 0;
  outline: none;
  font-family: ${mainTheme.font};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.5px;
  text-align: center;
  color: ${mainTheme.colors.white};
  &:hover {
    box-shadow: 0 1px 6px 0 rgba(5, 29, 66, 0.24);
    cursor: pointer;
  }
`;

export const PriceValue = styled.div`
  width: 9px;
  height: 32px;
  font-family: ${mainTheme.font};
  font-size: 24px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: 0.3px;
  text-align: right;
  color: ${mainTheme.colors.downriver};
`;

export const DMLLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 45%;
  height: 50%;
  border-radius: 2px;
  border: solid 2px #b1ccf8;
  margin-left: 15px;
  box-sizing: border-box;
`;

export const DMLLogo = styled.div`
  width: 12px;
  height: 12px;
  object-fit: contain;
  background-image: url("/logos/Logo-Icon-Blue.svg");
  background-size: cover;
  background-position: center;
`;

export const DMLText = styled.span`
  font-family: ${mainTheme.font};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.5px;
  text-align: center;
  color: ${mainTheme.colors.downriver};
`;
