
import styled from "styled-components";
import { ThemeTypographyVariants } from "@src/theme/theme"
import { useRipple } from "react-use-ripple";
import Text from "../Text/Text";
import React from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useRouter } from "next/router";

// [ordem de redenrização(Composição atual)]:
// - Button: tag
// - Text: tag
// - BaseCompanent: tag
// - StyledComponents

const StyledButton = styled(Text)<any>``;

interface ButtonBase {
  href?: string;
  children: React.ReactNode;
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({
  href,
  children,
  textVariant,
  styleSheet,
  ...props
}: ButtonBase) {
  const router = useRouter();
    // colocando efeito no button
  const ref = React.useRef();
  useRipple(ref, {
    animationLength: 500, 
    rippleColor: 'rgba(255, 255, 255, 0.7)',
  });
  
  // confirmando se é um link
  const isLink = Boolean(href);
  const Tag = isLink ? 'a' : 'button';

  return (
    <StyledButton
      href={href}
      ref={ref}
      tag={Tag}
      styleSheet={{
        backgroundColor: 'transparent',
        color: 'inherit',
        border:'0',
        outline: '0',
        cursor: 'pointer',
        textDecoration: 'none',
        ...styleSheet
      }}
      onClick={(event) => {
        isLink && event.preventDefault();
        isLink && router.push(href);
        !isLink && props.onClick && props.onClick(event);
      }}
      {...props}
    >
      {children}
    </StyledButton>
    );
}