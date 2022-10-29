import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import ButtonBase from "@src/components/Button/ButtonBase";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/image/image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import React from "react";


interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }){
  return(
      <Box>
        <Text>
          Feed Base
        </Text>
        {children}
      </Box>
    )
}

Feed.Header = () => {
  return (
    <Box>
      <Button>
        Olá Pessoas!
      </Button>
      <Button.Base
        href="https://github.com/WisleyASousa">
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
      </Button.Base>
      <Link colorVariant="accent" href="https://youtube.com">
        <Icon name="youtube" />
      </Link>

      
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" />
      <Text>
        Feed Header
      </Text>
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