import Box from "@src/components/Box/Box";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import Menu from "./patterns/Menu/Menu";

export default function HomeScreen() {

        // usando o tema.
  const theme =useTheme();

  return (
      //inserindo um box na pagina, colocando a tag main por estar em volta de tudo
    <Box 
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x100,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
      </Feed>
      <Footer />
      {/* <Menu />
      <Feed>
        <Feed.Header />
        <Text tag='h2' variant="display1">
          Últimas Atualizações
        </Text>
        <Feed.Posts />
      </Feed>
      <Footer /> */}
    </Box>
    )
}
