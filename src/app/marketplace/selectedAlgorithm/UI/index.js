import styled from "styled-components";
import mainTheme from "../../../themes/mainTheme";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  width: 720px;
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
  margin: 28px 36px;
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
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  height: 180px;
  border-radius: 3px;
  border: solid 1px #dae1ed;
  align-items: center;
  justify-content: center;
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  height: 260px;
  align-items: center;
  justify-content: center;
`;

export const ImageIcon = styled.div`
  background-image: url("/icons/Icon-Images-Grey.svg");
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
  text-align: center;
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
  font-family: ${mainTheme.font};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.47;
  letter-spacing: 0.3px;
  color: ${mainTheme.colors.downriver};
  -webkit-touch-callout: none;
  user-select: none;
`;

// Text Input Component

export const InputText = styled.textarea`
  align-self: flex-start;
  box-sizing: border-box;
  width: 409px;
  height: 258px;
  padding: 7px 16px;
  font-family: ${mainTheme.font};
  border-radius: 3px;
  font-size: 15px;
  background-color: #ffffff;
  line-height: 1.6;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.downriver};
  outline: none;
  border: none;
  resize: none;
  word-break: break-word;
  &:placeholder {
    color: ${mainTheme.colors.baliHai};
  }
`;

export const SentimentResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 258px;
  background-color: #f7f9fc;
  border-left: solid 1px #dae1ed;
`;

export const SentimentResultText = styled.div`
  font-family: ${mainTheme.font};
  font-size: 15px;
  line-height: 1.47;
  letter-spacing: 0.2px;
  color: #6c80a0;
  margin: 12px;
`;

export const SentimentResultBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 144px;
  height: 50px;
  border-radius: 3px;
  border: solid 1px rgba(109, 140, 189, 0.25);
  background-color: #e1e8f2;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.3px;
  color: ${mainTheme.colors.baliHai};
`;

// Uploaded Image View
export const UploadedContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 650px;
  height: 250px;
  border: solid 1px #e1e8f2;
  background-color: #f9fbfd;
  border-radius: 2px;
`;

export const UploadedPhotoContainer = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 399px;
  height: 250px;
`;

export const LoadingIcon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url("/icons/Loading-Grid.svg");
  background-size: cover;
  background-position: center;
`;

export const LoadingText = styled.div`
  padding-left: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: ${mainTheme.colors.cardNumberValues};
`;

export const SignificanceNumber = styled.div`
  width: 60px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.85;
  letter-spacing: 0.2px;
  color: #0d2957;
`;

export const SignificanceBarContainer = styled.div`
  width: 252px;
  height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 2px;
  margin: 2px;
  background-color: #edf0f5;
`;

export const SignificanceBar = styled.div`
  width: ${props => props.percentage * 252}px;
  height: 22px;
  border-radius: 2px;
  background-color: #83b2ff;
`;

export const Category = styled.div`
  width: 245px;
  position: absolute;
  z-index: 10;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.85;
  letter-spacing: 0.2px;
  text-align: right;
  color: #0d2957;
`;
