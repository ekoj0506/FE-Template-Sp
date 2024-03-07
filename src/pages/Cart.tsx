
import Header from "../layouts/header/Header";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Banner from "../layouts/Banner";
import ListCart from "../layouts/cart/ListCart";

export default function Cart()
{
    return(
    <>
      <Box sx={{ bgcolor: '#eeeeee' }}>
      <Container>
     <Header/>
     <ListCart/>
    </Container>
    </Box>

    </>)
}