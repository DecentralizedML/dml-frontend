import styled from "styled-components";
import mainTheme from "../../../themes/mainTheme";

// Container
export const LoadingContainer = styled.div`
  height: 100%;
`;

export const LoadingText = styled.div`
  font-family: ${mainTheme.font};
  font-size: 18px;
  line-height: 1.67;
  letter-spacing: 0.3px;
  color: ${mainTheme.colors.BaliHai};
  text-align: center;
  margin-top: 25%;
`;
