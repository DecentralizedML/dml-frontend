import styled from "styled-components";
import mainTheme from "../../../themes/mainTheme";

// Container
export const SidebarContainer = styled.div`
  margin: 32px 0;
`;

export const SidebarRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 16px;
`;

// CardComponents
export const TopCard = styled.div`
  width: 306px;
  height: 80px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin: 1px 0;
  background-color: ${mainTheme.colors.white};
  &:hover {
    cursor: pointer;
  }
`;

export const BottomCard = styled.div`
  width: 306px;
  height: 80px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  margin: 1px 0;
  box-shadow: 0 1px 0 0 rgba(110, 141, 189, 0.1),
    0 2px 6px 0 rgba(4, 37, 86, 0.04);
  background-color: ${mainTheme.colors.white};
  &:hover {
    cursor: pointer;
  }
`;

export const CardContainer = styled.div`
  margin: 24px 0;
`;

export const OpacityHeadline = styled.div`
  font-family: ${mainTheme.font};
  width: 133px;
  height: 16px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.23;
  letter-spacing: 0.5px;
  color: ${mainTheme.colors.BaliHai};
`;

export const CategoryIcon = styled.div`
  width: 44px;
  height: 44px;
  background-image: url("${props => props.icon}");
  background-size: cover;
  background-position: center;
`;

export const CategoryTitle = styled.div`
  font-family: ${mainTheme.font};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: ${mainTheme.colors.downriver};
`;

export const CategoryText = styled.div`
  font-family: ${mainTheme.font};
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.BaliHai};
`;
