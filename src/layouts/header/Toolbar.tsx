
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useNavigate } from "react-router-dom";
import Link from '@mui/material/Link';
const TextTool = styled('div')(({ theme }) => ({
    textAlign: 'center',
    color: 'white',
    fontSize: '13px',
    fontFamily: 'system-ui',
    paddingBottom: '5px',
    paddingTop: '0px',
    
    letterSpacing: '0.03px',

    
  }));
export default function Toolbar() {
const HandleClickLogin=()=>
{
  useNavigate('/login');
};
return (
<>
     <Box sx={{backgroundColor: '#1976d2',paddingTop:'0px',paddingBottom:'10px',position: 'relative', }}>
<Grid container spacing={1} >

  <Grid item xs={4} display={'flex'}>
        <TextTool sx={{paddingLeft:'20px'}}> Kênh Người Bán  </TextTool>
  
  <TextTool sx={{paddingLeft:'20px'}} >Tải Ứng Dụng</TextTool>
  </Grid>
  <Grid item xs={2}>
  
  </Grid>
  <Grid item xs={6} display={'flex'} sx={{position: 'absolute', right:'0'}}>
 
  <TextTool sx={{paddingRight:'20px', display:'flex'}}>
    <NotificationsIcon sx={{ fontSize: '18px',  paddingRight:'1px' }}/> Thông báo</TextTool>
    <TextTool sx={{display: 'flex', paddingRight:'20px'}}>
    <QuestionMarkIcon sx={{ fontSize: '14px',  paddingRight:'1px', paddingTop:'2px' }}/> Hỗ trợ</TextTool>
  <TextTool sx={{display: 'flex', paddingRight:'20px'}}>
    
  <LanguageIcon sx={{ fontSize: 15, paddingTop: '2px', paddingRight:'1px' }}/>Tiếng Việt
  <ExpandMoreIcon sx={{ fontSize: 20, paddingRight:'1px' }}/>
  </TextTool>
  
 
  <TextTool onClick={HandleClickLogin}><Link  href="login" underline="none" sx={{ color:'white'}} >{'Đăng nhập'}</Link></TextTool>
  <TextTool sx={{px:'5px'}}>|</TextTool>
  <TextTool sx={{paddingRight:'20px'}}><Link  href="/login" underline="none" sx={{ color:'white'}}>{'Đăng ký'}</Link></TextTool>
  
  </Grid>
</Grid>

</Box>  
</>
);


}
