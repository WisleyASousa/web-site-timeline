import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import ButtonBase from "@src/components/Button/ButtonBase";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/image/image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";


interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }){
  const theme = useTheme();

  return(
      <Box
        styleSheet={{
          width: '100%',
          backgroundColor: theme.colors.neutral.x000,
          marginTop: '-228px',
          maxWidth: '683px',
          borderRadius: "8px",
          paddingVertical:'40px',
          paddingHorizontal: '32px',

        }}
      >
        {children}
      </Box>
    )
}

Feed.Header = () => {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        marginBottom: '24px',
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        <Image
          styleSheet={{
            width: "128px",
            height: "128px",
            borderRadius: "100%",
            border: "2px solid black"
            
          }} 
          src="https://github.com/wisleyasousa.png"
          alt="Imagem de Perfil do Wisley A. Sousa"
        />
        <Box
          
          styleSheet={{
            justifyContent: 'space-between',
            
            
          }}
        >
          <Button fullWidth colorVariant="primary" size='xl' href="/">
            Newsletter
          </Button>
          <Button fullWidth colorVariant="neutral" size='xl' href="/">
            Buy me a Coffee 🤍
          </Button>
        </Box>
      </Box>
      <Button.Base
        href="https://github.com/WisleyASousa">
        
        <Text tag="h1" variant="heading4">
          Wisley A. Sousa
        </Text>
      </Button.Base>
      {/* <Link colorVariant="accent" href="https://youtube.com">
        <Icon name="youtube" />
      </Link>

      
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" /> */}
     
  </Box>
    )
}

Feed.Posts = () => {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
  </Box>
    )
}