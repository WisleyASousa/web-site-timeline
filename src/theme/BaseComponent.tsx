import React, { Component } from "react";
import styled from "styled-components";
import { StyleSheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface StyledBaseComponent {
  styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;
                // sendo chamada no arquivo Box.tsx
export const BaseComponent = (props) => {
  return (
      <StyledBaseComponent {...props} />
    )
}

BaseComponent.defaultProps = {
  styleSheet: {}, 
}