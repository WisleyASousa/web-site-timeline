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
          borderRadius: "25px",
          paddingVertical:'40px',
          paddingHorizontal: '32px',
          boxShadow: 'inset -20px -20px 10em rgba(0, 0, 0, 0.3)',
          
          position: 'relative',
			    top: '-3px',
			    left: '-3px',
          border: '#FFB088 solid 1px',
          

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
          flexDirection: { xs:'column', md:'row'},

          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        <Box
          styleSheet={{
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Button.Base
            href="https://github.com/WisleyASousa"
            styleSheet={{
              borderRadius: "100%",

              hover: {
                boxShadow: '0 0 0.5em #F35627',
                transform: 'scale(1.1)',
                

              },
            }}
            >
            <Image
              styleSheet={{
                width: { xs: '100px', md: '128px'},
                height: { xs: '100px', md: '128px'},
                borderRadius: "100%",
              
                
                
              }} 
              src="https://github.com/wisleyasousa.png"
              alt="Imagem de Perfil do Wisley A. Sousa"
              />
          </Button.Base>
            <Text tag="h1" variant="heading3">
                Wisley A. Sousa
            </Text>
          </Box>
        <Box     
          styleSheet={{
            justifyContent: 'space-evenly',
            gap: '16px',
          }}
        >
            <Button 
              fullWidth 
              colorVariant="primary" 
              size='xl' 
              href="/" 
              styleSheet={{
                hover: {
                  boxShadow: '0 0 0.5em #F35627',
                },
              }}
              >
              Newsletter
            </Button>
            <Button 
              fullWidth 
              colorVariant="neutral" 
              size='xl' 
              href="/" 
              styleSheet={{
                hover: {
                  boxShadow: '0 0 0.5em #F35627',
                },
                }}>
              Buy me a Coffee 🤍
            </Button>
        </Box>
      </Box>
        
{/* 
      hover: {
                boxShadow: '0 0 0.5em #F35627', */}
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