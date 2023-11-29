
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
export default function LayoutLoRe()
{
    return(
        <Box sx={{bgcolor:'#1976d2'}}>
        <Container>
      <Grid container spacing={1}>
       <Grid item xs={6} sx={{ marginTop:'50px'}}>
        <Box>
       <img  width={'500px'} height={'150px'} src={'image/banner_dutu.png'}  alt="Logo"/>
       </Box>
       </Grid>
       <Grid item xs={6}>
           <Box sx={{marginTop:'60px',marginLeft:'30px',  bgcolor:'#ffffff',display: 'flex',borderRadius: '6px',width:'390px',height:'450px', flexDirection: 'column', paddingLeft:'20px', paddingRight:'20px', paddingTop:'20px'}}>
           
           <Typography variant="h6" sx={{paddingTop:'15px'}}>Đăng nhập</Typography>
           <form action="/action_page.php" style={{display: 'flex', flexDirection: 'column', marginTop:'13px'}}>
    
          <input
            type="text"
            id="username"
            placeholder="Email/Số điện thoại"
            style={{height:'35px', padding:'10px', width:'350px',borderRadius: '2px',border: '0.5px solid gray', }}
            
     
          />
          <input
            type="password"
            id="username"
            placeholder="Mật khẩu"
            style={{height:'35px', padding:'10px', width:'350px',borderRadius: '2px', border: '0.5px solid gray', marginTop:'20px'}}
            
     
          /> 

          <button style={{  marginTop:'20px', backgroundColor: '#1976d2',border: 'none', color: '#ffffff', padding: '7px 32px', textAlign: 'center', textDecoration: 'none', display:'inline-block', fontSize: '18px'}}>Đăng nhập</button>
          </form>
          <Link href="#" underline="none" sx={{fontSize:'14px', marginTop:'5px'}}>{'Quên mật khẩu'}</Link>
             <Typography sx={{color:'Gray', textAlign:'center', marginTop:'15px'}}>Hoặc đăng nhập bằng</Typography>

             <Box sx={{  display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
             <button style={{  marginTop:'15px',border:' 0.5px solid black', backgroundColor: 'White', color: 'Black', padding: '7px 32px', textDecoration: 'none', display:'flex',fontSize: '18px', width:'160px', alignItems: 'center',justifyContent: 'center',}}>
             <img  style={{paddingTop:'2px',marginRight:'10px'}}  width={'20px'} height={'20px'} src={'image/fb.png'}  alt="Logo"/>
                Facebook</button>
                <button style={{  marginTop:'15px',border:' 0.5px solid black', backgroundColor: 'White', color: 'Black', padding: '7px 32px', textDecoration: 'none', display:'flex',fontSize: '18px', width:'160px', marginLeft:'16px',alignItems: 'center',justifyContent: 'center',}}>
             <img  style={{paddingTop:'3px',marginRight:'7px'}}  width={'30px'} height={'30px'} src={'image/gg.png'}  alt="Logo"/>
                Google</button>      
             </Box>  
             <Box sx={{display:'flex', marginTop:'10px', alignItems: 'center', justifyContent: 'center',marginTop:'40px'}}>
             <Typography sx={{color:'Gray', textAlign:'center', fontSize:'15px'}}>Bạn mới biết tới DuTu?</Typography>
             <Link href="#" underline="none" sx={{fontSize:'14px', marginLeft:'4px'}}>{'Đăng ký'}</Link>

             </Box>
           </Box>
   
       
       </Grid>
      </Grid>
      </Container>

    </Box>
    );
}