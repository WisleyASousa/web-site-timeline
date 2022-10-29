import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { ButtonSize, buttonSize } from "./buttonSize";
import { ColorVariant, colorVariantBy, Variant } from "./colorVariantBy";

interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;

}

export default function Button({ children, styleSheet, fullWidth, colorVariant, variant, size }: ButtonProps) {
  const theme = useTheme()
  return (
      <ButtonBase
        styleSheet={{
          alignSelf: 'flex-start',
          // [Color + Variant]
          ...colorVariantBy(theme, colorVariant, variant),

          // [Size]
          ...buttonSize[size], 

          // [FullWidth]
          ...(fullWidth && {
            alignSelf: 'initial',
          }),
          ...styleSheet,
        }}
      >
        {children}
      </ButtonBase>
    );
}

Button.defaultProps = {
  fullWidth: false,
  size: 'md',
  variant: 'contained',
  colorVariant: 'primary',
}

// a base de construção de um botao generico quanto o bontao de verdade
Button.Base = ButtonBase;