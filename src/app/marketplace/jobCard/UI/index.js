import styled from "styled-components";
import mainTheme from "../../../themes/mainTheme";

// CardComponent
export const Card = styled.div`
  height: auto;
  width: 372px;
  border-radius: 2px;
  margin: 15px;
  box-shadow: 0 1px 6px 0 rgba(4, 37, 86, 0.04), 0 1px 0 0 rgba(4, 37, 86, 0.04);
  background-color: ${mainTheme.colors.white};
`;

export const CardContainer = styled.div`
  margin: 24px;
`;

// CardTitle
export const CardTitle = styled.div`
  font-family: ${mainTheme.font};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.cardTitle};
`;

// CardText
export const CardText = styled.div`
  font-family: ${mainTheme.font};
  font-size: 15px;
  line-height: 1.47;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.cardText};
`;

// Author
export const AuthorName = styled.div`
  padding: 0 8px;
  font-family: ${mainTheme.font};
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.cardTitle};
`;

// Footer
export const NumberValue = styled.p`
  font-family: ${mainTheme.font};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: ${mainTheme.colors.cardNumberValues};
  margin: 0;
  padding-left: 6px;
`;

export const DownloadIcon = styled.img`
  width: 14px;
  height: 14px;
  object-fit: contain;
`;

export const Star = styled.img`
  width: 14px;
  height: 14px;
  margin: 0 1px;
  object-fit: contain;
`;

export const RewardRectangle = styled.div`
  width: 30%;
  height: 26px;
  background-color: ${mainTheme.colors.white};
  border: solid 2px #b1ccf8;
  border-right: none;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;

export const DMLRectangle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 26px;
  background: ${mainTheme.colors.mainBlue};
  border: solid 2px ${mainTheme.colors.mainBlue};
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  &:hover {
    cursor: pointer;
    background: ${mainTheme.colors.secondaryBlue};
    border: solid 2px ${mainTheme.colors.secondaryBlue};
  }
`;

export const DMLOutline = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  width: 100%;
  height: 26px;
`;

export const RewardValue = styled.div`
  font-family: ${mainTheme.font};
  font-size: 17px;
  font-weight: 600;
  line-height: 1.41;
  text-align: center;
  color: ${mainTheme.colors.cardTitle};
`;

export const DMLLogo = styled.img`
  width: 12px;
  height: 12px;
  object-fit: contain;
  padding-right: 5px;
`;

export const DMLText = styled.div`
  height: 16px;
  font-family: ${mainTheme.font};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.5px;
  color: ${mainTheme.colors.white};
`;
