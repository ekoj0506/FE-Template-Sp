import { Margin } from "@mui/icons-material";
import { Box, Typography,Button } from "@mui/material";
import Rating from '@mui/material/Rating';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function InfoProduct({dataProduct})
{
    return(
        <Box sx={{marginLeft:'30px',}}>
            <Typography sx={{paddingTop:'20px'}} variant="h6" gutterBottom>{dataProduct.name}</Typography>
            <Box sx={{display:'flex', }}>
            <Typography sx={{color:'#FF8C00'}}>2.5</Typography> 
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5}  readOnly/>
            <Typography sx={{marginLeft:'25px',opacity:'0.6'}}>|</Typography>
            <Box sx ={{display:'flex', marginLeft:'25px'}}>
                <Typography>35</Typography> 
                <Typography sx={{opacity:'0.6', paddingLeft:'3px'}}>đánh giá</Typography> 
           </Box>
           <Typography sx={{marginLeft:'25px', opacity:'0.6'}}>|</Typography>
           <Box sx ={{display:'flex', marginLeft:'25px'}}>
                <Typography>100</Typography> 
                <Typography sx={{opacity:'0.6', paddingLeft:'3px'}}>lượt mua</Typography> 
           </Box>
            </Box>
            <Box sx={{bgcolor:'#F5F5F5', marginTop:'20px',display:'flex',paddingTop: '10px', paddingLeft:'20px', marginRight:'20px'}}>
                <Typography sx={{  textDecoration: 'line-through', opacity:'0.75'}} variant="body1">₫199.999</Typography>
                <Typography variant="h4" sx={{paddingLeft:'20px', marginTop:'-4px', color:'#1976d2'}}>{`₫${dataProduct.price}`}</Typography>
            </Box>
            <Typography sx={{opacity:'0.7', marginTop:'20px'}}>Mã khuyến mãi</Typography>
            <Box sx={{display:'flex', marginTop:'20px'}}>
            <Typography sx={{opacity:'0.7', paddingRight:'20px'}}>Vận Chuyển</Typography>
            
                <Typography sx={{opacity:'0.7',paddingRight:'10px'}}><LocalShippingIcon sx={{opacity:'0.7'}}/> Vận chuyển tới </Typography>
                <Typography>Hải Châu, Đà Nẵng<ExpandMoreIcon/></Typography>
            </Box>
            <Box sx={{display:'flex', marginLeft:'139px'}}>
            <Typography sx={{opacity:'0.7', paddingRight:'10px'}}>Phí vận chuyển</Typography>
            
                <Typography sx={{paddingRight:'10px'}}> 25.500 <ExpandMoreIcon/></Typography>
    
            </Box>
            <Typography sx={{opacity:'0.7', marginTop:'20px'}}>Màu</Typography>
            <Box sx={{display:'flex'}}>
            <Typography sx={{opacity:'0.7', marginTop:'20px',marginRight:'55px'}}>Size</Typography>
            <Button variant="outlined" sx={{minWidth:'60px',minHeight:'30px',p:"0",height:'37px', marginTop:'15px',marginLeft:'10px'}}>38</Button>
            <Button variant="outlined" sx={{minWidth:'60px',minHeight:'30px',p:"0",height:'37px', marginTop:'15px',marginLeft:'10px'}}>39</Button>
            <Button variant="outlined" sx={{minWidth:'60px',minHeight:'30px',p:"0",height:'37px', marginTop:'15px',marginLeft:'10px'}}>40</Button>
            <Button variant="outlined" sx={{minWidth:'60px',minHeight:'30px',p:"0",height:'37px', marginTop:'15px',marginLeft:'10px'}}>41</Button>
            <Button variant="outlined" sx={{minWidth:'60px',minHeight:'30px',p:"0",height:'37px', marginTop:'15px',marginLeft:'10px'}}>42</Button>
            <Button variant="outlined" sx={{minWidth:'60px',minHeight:'30px',p:"0",height:'37px', marginTop:'15px',marginLeft:'10px'}}>43</Button>
            </Box>
            <Box sx={{display:'flex'}}>
            <Typography sx={{opacity:'0.8', marginTop:'30px'}}>Số lượng </Typography>
            <Box sx={{marginTop:'24px', marginLeft:'30px'}}>
            <button style={{border:'1.5px solid #eeeeee',padding:'6px 15px'}}>-</button>
            <input value='1' style={{borderTop:'1.5px solid #eeeeee',borderBottom:'0.1px solid #eeeeee', width:'48px',textAlign:'center',paddingTop:'6px',paddingBottom:'6px'}}></input>
            <button style={{border:'1.5px solid #eeeeee',padding:'6px 15px'}}>+</button>
            </Box>
            </Box>
            <Box sx={{marginTop:'35px',marginLeft:'90px'}}>
            <Button variant="outlined" sx={{height:'46px', width:'250px'}}><AddShoppingCartIcon/> Thêm vào giỏ hàng</Button>
            <Button variant='contained'sx={{height:'46px', width:'160px', marginLeft:'25px'}}>Mua ngay</Button>
            </Box>
        </Box>
    )
}