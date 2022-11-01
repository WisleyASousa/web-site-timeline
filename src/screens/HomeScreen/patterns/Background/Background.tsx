import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";

export default function Background() {
  const imageUrl = 'https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'

  return (
      <Box 
        styleSheet={{
          width: '100%',
          height: '400px',
          backgroundImage:`url("${imageUrl}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          borderRadius: "0 0 25px 25px",
          


        }}
      />
    )
}