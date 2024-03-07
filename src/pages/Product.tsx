
import Header from "../layouts/header/Header";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import InfoProduct from "../layouts/product/InfoProduct";
import ImgProduct from "../layouts/product/ImgProduct";
import MoreProduct from "../layouts/product/MoreProduct";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { responseProductDetailApi } from "../Apis/indexApi";
export default function Product()
{  

   const {idProduct}=useParams()
   const [dataProduct, setDataProduct]=useState({})
   
   useEffect(()=>{
    const fetchData = async (idProduct) => {
    const data = await responseProductDetailApi(idProduct)
    console.log('Data:', data)
    setDataProduct(data)
  }

  fetchData(idProduct)
  
},
   [])

    return(
    <>
      <Box sx={{ bgcolor: '#eeeeee' }}>
      <Container>
     <Header/>
     <Box sx={{display: 'flex', marginTop: '20px', bgcolor: '#FFFFFF',}}>
      <Box sx={{width: "35%", marginTop:'10px', marginLeft:'10px'}}>
          <ImgProduct dataProduct={dataProduct}/>
      </Box>
      <Box>
          <InfoProduct dataProduct={dataProduct}/>
      </Box>
     </Box>
     <MoreProduct/>
    </Container>
    </Box>

    </>)
}