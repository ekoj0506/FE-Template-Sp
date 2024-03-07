import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
export default function ChildProduct(props)
{   
    const product=props.data
    const navigate=useNavigate()
    const onclickToProduct =()=>
    {
        navigate(`/product/${product._id}`)
    }
    return(
        
        <>
        <Box onClick={onclickToProduct} sx={{  flex: '0 0 calc(16.666% - 15px)',marginTop:'0px',marginBottom:'15px', marginRight:'15px' ,bgcolor: '#FFFFFF',
        transition: 'background-color 0.3s',
    cursor: 'pointer', // Thiết lập con trỏ thành bàn tay khi hover
    '&:hover': {
      border:'1px solid #1976d2', marginTop:'-2px'
    },}}>
         <Box sx={{ display: 'flex', flexDirection: 'column', }}>
       
         <img src={product.image[0]} alt={"Girl in a jacket"} width={"800px"} height={"900px"}/>
        <Typography sx={{  textAlign:'center', paddingTop:'5px', 
        display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      WebkitLineClamp: 2,
      textOverflow: 'ellipsis', fontSize:'15px'}}>{product.title}</Typography>
        <Box sx={{display:'flex'}}>
        <Typography sx={{   paddingTop:'15px', paddingBottom:'10px', color:'#1976d2', paddingLeft:'5px'}}>{  `₫${product.price}`}</Typography>
        <Typography sx={{   paddingTop:'15px', paddingBottom:'10px', fontSize:'14px', opacity:'0.8', paddingLeft:'23px'}}>{`Đã bán ${product.numofpus}`}</Typography>
        
        </Box>
        </Box>
            </Box>
        </>
    )
}