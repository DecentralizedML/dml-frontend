import styled from "styled-components";

// CardTitle
export const CardTitle = styled.div`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: #0d2957;
`;

// CardText
export const CardText = styled.div`
  font-family: Barlow;
  font-size: 15px;
  line-height: 1.47;
  letter-spacing: 0.2px;
  color: #6c80a0;
`;

// Author
export const AuthorName = styled.div`
  padding: 0 8px;
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.2px;
  color: #0d2957;
`;

// Footer
export const NumberValue = styled.p`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #8194b2;
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
  background-color: #ffffff;
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
  background: #3c81ed;
  border: solid 2px #3c81ed;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  &:hover {
    cursor: pointer;
    background: #5797fb;
    border: solid 2px #5797fb;
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
  font-family: Barlow;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.41;
  text-align: center;
  color: #0d2957;
`;

export const DMLLogo = styled.img`
  width: 12px;
  height: 12px;
  object-fit: contain;
  padding-right: 5px;
`;

export const DMLText = styled.div`
  height: 16px;
  font-family: Barlow;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.5px;
  color: #ffffff;
`;
