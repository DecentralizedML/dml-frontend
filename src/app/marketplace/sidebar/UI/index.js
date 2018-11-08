import styled from "styled-components";
import mainTheme from "../../../themes/mainTheme";

// Container
export const SidebarContainer = styled.div`
  margin: 0;
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
  box-sizing: border-box
    ${props =>
      props.active && "border-left: solid 3px " + mainTheme.colors.royalBlue};
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
  box-sizing: border-box
    ${props =>
      props.active && "border-left: solid 3px " + mainTheme.colors.royalBlue};
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

// Styles are empty after I refactored it - still left it in case we need to add styling later
export const CardContainer = styled.div``;

export const OpacityHeadline = styled.div`
  font-family: ${mainTheme.font};
  width: 133px;
  height: 16px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.23;
  letter-spacing: 0.5px;
  color: ${mainTheme.colors.BaliHai};
  margin: 32px 0 18px 0;
`;

export const CategoryIcon = styled.div`
  width: 44px;
  height: 44px;
  background-image: url("${props =>
    props.active ? props.iconActive : props.icon}");
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
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome and Opera */
`;

export const CategoryText = styled.div`
  font-family: ${mainTheme.font};
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.BaliHai};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-touch-callout: none; /* iOS Safari */
  user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome and Opera */
`;

export const TagCard = styled.div`
  height: 24px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 2px;
  padding: 2px 8px;
  box-shadow: 0 1px 0 0 rgba(110, 141, 189, 0.1);
  background-color: ${mainTheme.colors.white};
  &:hover {
    cursor: pointer;
  }
`;

export const TagTitle = styled.div`
  height: 21px;
  font-family: ${mainTheme.font};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.BaliHai};
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 306px;
  height: 40px;
  border-radius: 3px;
  border: solid 1px #dae1ed;
  background-color: ${mainTheme.colors.white};
`;

export const SearchInput = styled.input`
  flex: 1 0 auto;
  font-family: ${mainTheme.font};
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 0.2px;
  color: ${mainTheme.colors.BaliHai};
  border: none;
  outline: none;
  padding: 7px 16px 9px 16px;
  &::placeholder {
    color: ${mainTheme.colors.BaliHai};
  }
`;

export const SearchIcon = styled.div`
  width: 16px;
  height: 16px;
  background-image: url("${props => props.icon}");
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  margin-right: 16px;
  margin-left: auto;
`;

export const CategoryTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  margin-left: 16px;
`;
