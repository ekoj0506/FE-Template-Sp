import { Box, Container, Typography, Button } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Bill()
{
    return(

        <Box sx={{bgcolor:'#FFFFFF'
        }}> 
        <Box sx={{  width: '100%',
      height: '8px', /* Độ dày của đường kẻ */
      backgroundColor: 'black', opacity:'1'}}></Box>
            <Box sx={{display:'flex', paddingLeft:'700px', }}>
            <Checkbox {...label} defaultChecked />
            <Typography sx={{paddingTop:'10px'}}>Xu Dutu</Typography>
            <Typography sx={{paddingLeft:'10px', paddingTop:'10px', opacity:'0.6'}}>Bạn chưa chọn sản phẩm</Typography>
              <Typography sx={{paddingLeft:'91px', paddingRight:'40px',paddingTop:'10px'}}>-đ0</Typography>
            </Box>
            <Box sx={{ width: '100%',
      borderTop: '1px dashed black'}}></Box>
      <Box sx={{display:'flex', paddingBottom:'10px'}}>
      <Checkbox {...label} defaultChecked />
      <Typography sx={{p:'10px'}}>Chọn tất cả</Typography>
      <Typography sx={{p:'10px'}}>Xóa</Typography>
      <Typography sx={{p:'10px'}}>Bỏ sản phẩm không hoạt động</Typography>
      <Typography sx={{paddingLeft:'230px', paddingTop:'10px', }}>Tổng thanh toán (0 Sản phẩm):</Typography>
      <Typography sx={{ paddingTop:'8px', paddingLeft:'5px',fontSize:'18px', color:'#1976d2'}}>đ</Typography> 
      <Typography sx={{ paddingTop:'5px', fontSize:'22px',  color:'#1976d2', paddingLeft:'2px'}} >0</Typography>
      <Button variant="contained" sx={{width:'180px', p:'0px', height:'40px', marginLeft:'10px', marginTop:'5px'}}>Mua hàng</Button>
      </Box>
        </Box>
    )
}