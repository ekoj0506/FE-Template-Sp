
import Header from "../layouts/header/Header";
import Container from '@mui/material/Container';
import Category from "../layouts/category/Category";
import Box from "@mui/material/Box";
export default function Home()
{
    return(
    <>
      <Box sx={{ bgcolor: '#eeeeee' }}>
      <Container>
     <Header/>
    <Category/>
    </Container>
    </Box>

    </>)
}