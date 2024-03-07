import { Button, Box, Typography, Container } from "@mui/material";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
export default function Chat()
{    
    const [showChat, setShowChat]=useState(false)
    const onclickChat=()=>
    {
        setShowChat(!showChat)
    }
    return(
        <Container>
        <Box sx={{
            position:  'fixed',
          bottom: 0,
          right:10,
        }
        }>
            {showChat?
            (
                <Box sx={{width:'320px',borderRadius:'10px', bgcolor:'white'}}>
                    <Box sx={{display:'flex'}}>
                     <Typography sx={{bgcolor:'#1976d2', color:'white',py:'5px',paddingLeft:'20px',borderTopLeftRadius: '10px',
 }}>Chatbot</Typography>
         <Typography sx={{bgcolor:'#1976d2', color:'white',paddingTop:'7.5px',
          borderTopRightRadius: '10px', fontSize:'13px',paddingLeft:'3px', width:'100%'}}></Typography>
           </Box>

                 <Box sx={{height:'350px',width:'100%',bgcolor:'#eeeeee',borderLeft:'2px solid white', borderTop:'0.2px solid white',borderRight:'2px solid white'}}>
                    <Box sx={{ display:'flex',justifyContent:'center',marginTop:'10px'}}>
                    <Typography sx={{color:'black', bgcolor:'white', px:'10px',py:'3px', borderRadius:'6px', fontSize:'13px',opacity:'0.5'}}>24 Th12 2022</Typography>
                    </Box>
                     <Typography sx={{width:'240px',fontSize:'13px', m:'10px',p:'10px', bgcolor:'white',borderRadius:'10px', color:'black'}}>Kính chào quý khách, tôi là CSKH DUTU. Mình thấy đơn hàng của bạn đã được ký nhận. Nếu
                         hài lòng với sản phẩm, mong bạn sẽ đánh 5 sao để khen ngợi và ủng hộ shop. Hy vọng sản phẩm của shop sẽ mang lại cho bạn niềm vui và hạnh phúc :Các bước đánh giá: Nhấp vào "Tôi" ở góc dưới bên phải - Đánh giá - tìm đơn hàng- đánh giá và chọn ★★★★★ - Chọn</Typography>
                         <Typography sx={{width:'240px',fontSize:'13px',p:'10px',mr:'10px', bgcolor:'#FDF5E6',borderRadius:'10px', color:'black',position: 'absolute',
  right: '0'}}>Oke Shop</Typography>
                 </Box>
                 <Box sx={{display:'flex'}}>
                 <input type="text" style={{border:'none', outline: 'none',width:'280px', paddingLeft:'10px',paddingBottom:'7px',paddingTop:'3px',fontSize:'14px'}} placeholder="Nhập nội dung tin nhắn" />
                 <SendIcon sx={{bgcolor:'white',p:'0px',opacity:'0.5', paddingTop:'3px'}}/>
                 </Box>
                </Box>
            ):<Button variant="contained" sx={{width:'125px', height:'46px'}} onClick={onclickChat}><QuestionAnswerIcon/><Typography sx={{fontSize:'17px', paddingLeft:'5px'}}>Chat</Typography> </Button>
        }
        
        </Box>
        </Container>
    )
}