import React, { forwardRef } from "react";
import NextLink from 'next/link';
import Text from "../Text/Text";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'negative';
  colorVariantEnable?: boolean;
}

const Link = React.forwardRef(({ href, colorVariant, children, colorVariantEnable, styleSheet,...props }: LinkProps, ref) => {
  const theme = useTheme();
                      //  confirmando se o Href começa com HTTP
  const isExternalLink = href.startsWith('http');
  const currentColorSet = {
    // definido a cor padrão
    color: theme.colors[colorVariant].x500,
    hover: {
      color: theme.colors[colorVariant].x200,
    },
    focus: {
      color: theme.colors[colorVariant].x800,
    }
  }

  const linkProps = {
    tag: 'a',
    ref,
    children,
    styleSheet: {
      textDecoration: 'none',
      ...colorVariantEnable && {
        color: currentColorSet.color,
      },
      ...styleSheet,
      hover:{
        ...styleSheet?.hover,
        ...colorVariantEnable && {
          color: currentColorSet.focus.color,
        }
      },
      focus:{
        ...styleSheet?.focus,
        ...colorVariantEnable && {
          color: currentColorSet.focus.color,
        }
      },
      

    },
    ...props,
    href,
  }


  if (isExternalLink) return (
    <Text 
      { ...{
        target: '_blank',
        ...linkProps,
      
      }} 
    />
  )

   
  return (
    <NextLink href={href} passHref>
      <Text  {...linkProps} />
    </NextLink>
    )
})
Link.defaultProps = {
  colorVariant: 'primary',
  colorVariantEnable: true,
}


export default Link;