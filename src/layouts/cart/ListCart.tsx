import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Detail from "./Detail";
import DetailProductCart from "./DetailProductCart";
import Bill from "./Bill";
import { StickyContainer, Sticky } from 'react-sticky';
import ReactDOM from 'react-dom';
import { responseCartApi } from "../../Apis/indexApi";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



export default function ListCart()
{

    
        const [isSticky, setIsSticky] = useState(true);
        const [dataCart, setDataCart]=useState([])
   
   useEffect(()=>{
    const fetchData = async() => {
    const data =await responseCartApi
    console.log('Data:', data.data)
    setDataCart(data.data.listCart)
  }

  fetchData()
  
},
   [])
   console.log('ttttttttttttttttt',dataCart)
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
           const element = document.getElementById('bill');
          const windowHeight = window.innerHeight;
          const contentHeight = ReactDOM.findDOMNode(element).getBoundingClientRect();
          console.log(scrollPosition)
          console.log(contentHeight)
          console.log(windowHeight)
          // Kích hoạt ghim khi cuộn đến phần tử và không ghim khi cuộn lên trên
          setIsSticky(contentHeight.top+70 > windowHeight);
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
        console.log('dsadsa')
          // Hủy đăng ký sự kiện khi component bị unmount
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
    return(
        <>
        <Box sx={{marginTop:'20px', bgcolor:'#FFFFFF',borderRadius:1, marginBottom:'10px'}}>
        <Grid container spacing={1} sx={{paddingLeft:'35px',paddingBottom:'8px'}}>
  <Grid item xs={6} sx={{display:'flex', }}>
  <Checkbox {...label} defaultChecked />
    <Typography sx={{paddingTop:'10px'}}>Sản phẩm</Typography>
  </Grid>
  <Grid>
    
  </Grid>
  <Grid item xs={1.5} >
  <Typography sx={{paddingTop:'10px', opacity:'0.7'}}>Đơn Giá</Typography>

  </Grid>
  <Grid item xs={1.5}>
  <Typography  sx={{paddingTop:'10px', opacity:'0.7', textAlign:'center'}}>Số lượng</Typography>

  </Grid>
  <Grid item xs={1.5}>
  <Typography  sx={{paddingTop:'10px', opacity:'0.7', textAlign:'center'}}>Số Tiền</Typography>

  </Grid>
  <Grid item xs={1.5} >
  <Typography sx={{paddingTop:'10px', opacity:'0.7', textAlign:'center', paddingRight:'20px'}}>Thao tác</Typography>

  </Grid>
</Grid>
</Box>
{   dataCart? dataCart.map((detail)=>( <DetailProductCart detail={detail} />)):  (<></>) 
}
 <DetailProductCart/>
<DetailProductCart/>
<DetailProductCart/>
<DetailProductCart/><DetailProductCart/><DetailProductCart/><DetailProductCart/><DetailProductCart/><DetailProductCart/><DetailProductCart/> 
<Box id="bill"></Box>
<Box  sx={{ 
          position: isSticky ? 'fixed' : 'static',
          bottom: 0,
 
          backgroundColor: 'lightgray',

          textAlign: 'center',
        }}><Bill/></Box>
    

</>
    )
}