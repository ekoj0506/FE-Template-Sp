
import Header from "../layouts/header/Header";
import Container from '@mui/material/Container';
import Category from "../layouts/category/Category";
import Box from "@mui/material/Box";
import SuggestProduct from "../layouts/SuggestProduct";
import Banner from "../layouts/Banner";

export default function Home()
{
    return(
    <>
      <Box sx={{ bgcolor: '#eeeeee' }}>
      <Container>
     <Header/>
     <Banner/>
    <Category/>
    <SuggestProduct/>
    </Container>
    </Box>

    </>)
}