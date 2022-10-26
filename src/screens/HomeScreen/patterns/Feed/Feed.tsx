import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/image/image";
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
      <Icon name="youtube" />
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