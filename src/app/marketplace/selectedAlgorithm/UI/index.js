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
  display: flex;
  flex-direction: row;
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
  &:active {
    background-image: linear-gradient(to bottom, #5797fb, #397ee9);
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

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

// Demo View

export const DemoWrapper = styled.div`
  margin-top: 30px;
`;

export const DemoText = styled.div`
  width: 42px;
  font-family: ${mainTheme.font};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: ${mainTheme.colors.pickledBluewood};
  margin-left: 36px;
  padding-bottom: 10px;
  margin-bottom: -1px;
  border-bottom: solid 3px ${mainTheme.colors.royalBlue};
`;

export const DemoContainer = styled.div`
  height: auto;
  border-top: solid 1px rgba(110, 141, 189, 0.2);
  padding: 28px 36px;
`;

export const DemoContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  height: 180px;
  border-radius: 3px;
  border: solid 1px #dae1ed;
  align-items: center;
  justify-content: center;
`;

export const UploadImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  height: 260px;
  align-items: center;
  justify-content: center;
`;

export const ImageIcon = styled.div`
  background-image: url("./icons/Icon-Images-Grey.svg");
  width: 48px;
  height: 48px;
  background-size: cover;
  background-position: center;
`;

export const UploadImageDescription = styled.div`
  margin: 14px 0 18px 0;
  font-family: ${mainTheme.font};
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.baliHai};
`;

export const UploadImageButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 36px;
  border-radius: 3px;
  border: solid 1px #e1e8f2;
  background-image: linear-gradient(to bottom, #ffffff, #f7f9fc);
  &:hover {
    cursor: pointer;
  }
`;

export const UploadImageText = styled.div`
  margin-top: 
  font-family: ${mainTheme.font};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.47;
  letter-spacing: 0.3px;
  color: ${mainTheme.colors.downriver};
`;
