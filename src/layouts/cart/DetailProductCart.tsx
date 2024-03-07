import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function DetailProductCart({detail})
{
    return(
        <Box bgcolor='#FFFFFF' marginTop={2}>
            <Grid container spacing={1} sx={{paddingLeft:'35px',paddingBottom:'8px'}}>
            <Grid item xs={1.5} sx={{display:'flex', }}>
  <Checkbox {...label} defaultChecked />
  <img src={"https://cdn0132.cdn4s.com/media/san-pham/may-cua-xich-cam-tay-husqvarna-353-chinh-hang-thuy-dien.jpg"} alt={"Girl in a jacket"} width={"90px"} height={"90px"}/>
  </Grid>
  <Grid item xs={2.8}>
  <Typography variant="body1" sx={{paddingTop:'10px', paddingLeft:'0px', paddingRight:'10px',  overflow: 'hidden',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 2,
      textOverflow: 'ellipsis',
      fontSize:'15px'}}>Máy cưa xích chạy pin 18V - 21V không chổi than lam xích 12inch (chung chân pin Makita 18V)</Typography>
  </Grid>
  <Grid item xs={1.7} >
    <Typography sx={{opacity:'0.7', paddingTop:'20px', fontSize:'14.5px'}}>Phân Loại Hàng:</Typography>
    <Typography sx={{opacity:'0.8', alignItems: 'center', fontSize:'14.5px'}}>Bộ máy 2 pin</Typography>
  </Grid>
  <Grid item xs={1.5} sx={{display:'flex'}} >
    <Typography sx={{textDecoration: 'line-through', fontSize:'13.5px', opacity:'0.9',paddingTop:'35px'}}>₫150.000</Typography>
  <Typography sx={{paddingTop:'33.5px', fontSize:'15px', paddingLeft:'3px'}}>₫137.000</Typography>

  </Grid>
  <Grid item xs={1.5}>
  <Typography  sx={{paddingTop:'10px',textAlign:'center',paddingTop:'35px'}}>1</Typography>

  </Grid>
  <Grid item xs={1.5}>
  <Typography sx={{paddingTop:'33.5px', fontSize:'16px', paddingLeft:'3px', color:'#1976d2', textAlign:'center' }}>₫137.000</Typography>

  </Grid>
  <Grid item xs={1.5} >
  <Typography sx={{paddingTop:'10px', textAlign:'center',paddingRight:'20px', fontSize:'14px'}}>Xóa</Typography>
  <Typography sx={{paddingTop:'0px', textAlign:'center',paddingRight:'20px', fontSize:'14px', color:'#1976d2'}}>Tìm sản phẩm tương tự</Typography>
            </Grid>
            </Grid>
        </Box>
    )
}