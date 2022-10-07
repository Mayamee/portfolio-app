import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props._direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || "0"};
  & > * {
    flex-basis: ${(props) =>
      `${
        (props["number-cols"] && 100 / props["number-cols"] + "%") || "auto"
      }`};
  }
`;

export const Expander = styled.div`
  flex-grow: 1;
`;
