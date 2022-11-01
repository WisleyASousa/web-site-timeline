import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer() {
  const theme = useTheme()

  return (
      <Box
        styleSheet={{
          height: '120px',
          backgroundColor: theme.colors.neutral.x600,
          color: theme.colors.neutral.x000,
          width: "100%",
          paddingHorizontal:'24px',
          paddingVertical:'24px',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'inset -7px -7px 40px rgba(0, 0, 0, 1)',
          textAlign: 'center',
          position: 'fixed',
          bottom: '0',
          borderRadius: "25px 25px 0 0",


        }}
      >
        <Box
          styleSheet={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: '1rem',
            justifyContent: 'center',
            textAlign: 'center',



          }}
        >
          <Box
            styleSheet={{
              width: '80px',
              height: '0px',
              border: "1px solid #BCBCBC",
              backgroundColor: '#BCBCBC',
              boxShadow: '0 0 0.2em #F35627',



            }}
          >
          </Box>
          <Text
            variant="body3"
          >
            Feito com 🤍 por Wisley A. Sousa - 2022 - 🤟
          </Text>
          <Box
            styleSheet={{
              width: '80px',
              height: '0px',
              border: "1px solid #BCBCBC",
              backgroundColor: '#BCBCBC',
              boxShadow: '0 0 0.2em #F35627',


            }}
          >
          </Box>
        </Box>
      </Box>
    )
}
