
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import Account from '../../components/Account';
import Img from "../public/image/dutu.png"
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#e3f2fd',
  '&:hover': {
    backgroundColor: '#e3f2fd',
  },
  marginRight: theme.spacing(6),
  marginLeft: theme.spacing(6),

  width: '100%',
  minWidth: '20%',

 
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: '17px',
    transition: theme.transitions.create('width'),
    alignItems: 'center',
    

  },
}));

export default function PrimarySearchAppBar() {
   const navigate=useNavigate();
  
  const toHome=()=>{
    
  navigate('/');
  }
  const toCart=()=>
  {
    navigate('/cart')

  }
  console.log('dddddd')
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{position:'relative'}}>
             <Button onClick={toHome}>
            <img  width={'140px'} height={'70px'} src={'/image/dutu.png'}  alt="Logo"/>
            </Button>
      
          <Search sx={{marginTop:'-7px'}}>
   
            <StyledInputBase
              sx={{width:'87%', minWidth:'20%',}}
              placeholder="Tìm kiếm sản phẩm...."
              inputProps={{ 'aria-label': 'search' }}
            />
             <Button sx={{px:'18px', marginBottom:'2px', width:'12%' }} variant="contained">
              <SearchIcon/>
             </Button>
          </Search>
          <Box sx={{  position: 'absolute', left: '2000px' }} />
          <Box  onClick={toCart} sx={{ display: { xs: 'none', md: 'flex'  } }} >
             <Link sx={{color:'white'}} href='/cart'>
           <ShoppingCartIcon  sx={{marginRight: '16px', }} />
           </Link>

          </Box>
          
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}