import styled from "styled-components";

// Styled Component
export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 16px;
  justify-content: center;
`;

export const Left = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 0 0 auto;
`;

export const Right = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 auto;
  max-width: 804px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
`;
