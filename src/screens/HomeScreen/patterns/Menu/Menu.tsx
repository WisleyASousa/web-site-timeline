import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import ButtonBase from "@src/components/Button/ButtonBase";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Menu() {
  const theme = useTheme();
  const baseSize ='40px';
  return (
      <Box
        styleSheet={{
          width:"100%",
          position: "absolute",
          left: 0, right: 0, top: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: '16px',
          
          paddingHorizontal: '20px',
          color: theme.colors.neutral.x000,


        }}
      >
        <Button.Base
          styleSheet={{
            borderRadius: "100%",
            width: baseSize,
            height: baseSize,
            backgroundColor: theme.colors.primary.x500,
            justifyContent: 'center',
            alignItems:"center",
            boxShadow: '0 0 0.2em #F35627',
            hover: {
              backgroundColor: theme.colors.primary.x400,
            },
            focus: {
              backgroundColor: theme.colors.primary.x600,
            }

          }}
        >
          <Text>
            WS
          </Text>
          
        </Button.Base>
        <Button.Base
          styleSheet={{
            borderRadius: "100%",
            width: baseSize,
            height: baseSize,
            backgroundColor: theme.colors.neutral.x500,
            justifyContent: 'center',
            alignItems:"center",
            boxShadow: '0 0 0.2em #F35627',
            hover: {
              backgroundColor: theme.colors.primary.x400,
            },
            focus: {
              backgroundColor: theme.colors.primary.x600,
            }
          }}
        >
          <Icon name="menu" />
        </Button.Base>
        
      </Box>
    )
}