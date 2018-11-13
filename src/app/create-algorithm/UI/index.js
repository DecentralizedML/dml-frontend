import styled from "styled-components";
import mainTheme from "../../themes/mainTheme";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  width: 1140px;
  /* height: 645px; */
  border-radius: 3px;
  box-shadow: 0 1px 6px 0 rgba(4, 37, 86, 0.04), 0 1px 0 0 rgba(4, 37, 86, 0.04);
  background-color: ${mainTheme.colors.white};
  margin: auto;
  margin-bottom: 50px;
`;

export const TitleHeaderContainer = styled.div`
  width: 1140px;
  height: 74px;
  margin: auto;
`;

export const TitleHeaderText = styled.div`
  padding: 26px 0 18px 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.67;
  letter-spacing: 0.3px;
  color: ${mainTheme.colors.baliHai};
`;
