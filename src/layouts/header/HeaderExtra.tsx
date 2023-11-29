

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
export default function HeaderExtra(props)
{
    const navigate = useNavigate();
    const ToHome=()=>
    {
       navigate("/");
    };
    return(
        <>
        <Box sx={{ flexGrow: 1, bgcolor: '#ffffff',  position: 'relative'}}>
        <Container>
          <Toolbar sx={{position:'relative', paddingTop:'20px', paddingBottom:'20px', marginLeft:'50px'}}>
              <Link underline="none" href="/">
              <img  onClick={ToHome}  width={'130px'} height={'70px'} src={'image/dutu2.png'}  alt="Logo"/>
              </Link>
            <Box>
            <Typography variant="h5" sx={{ paddingLeft:'20px', paddingTop:'18px'}}>
                Đăng nhập      
      </Typography>
     
            </Box>
            <Link  href="#" underline="none" sx={{fontSize:'14px', marginLeft:'4px', float: 'right',position: 'absolute', right:'200px'}}>{'Bạn cần giúp đỡ?'}</Link>
     </Toolbar>
        
     </Container>
    </Box >


    </>
    );
}