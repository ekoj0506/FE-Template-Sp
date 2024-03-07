import { useSelector, useDispatch } from "react-redux"
import { login, logout } from "../redux/auth/authSlice"
import { Link } from "@mui/material";
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
const TextTool = styled('div')(({ theme }) => ({
    textAlign: 'center',
    color: 'white',
    fontSize: '13px',
    fontFamily: 'system-ui',
    paddingBottom: '5px',
    paddingTop: '0px',
    
    letterSpacing: '0.03px',

    
  }));
export default function Account()
{
    const nameUser= useSelector((state)=>state.auth.nameUser)
    const dispatch =useDispatch()
    // dispatch(login({nameUser:'Dinh Nhu Duc222',token:'sadasdsa'}))
    return(
        <>
        {   !nameUser?
        
        <>
            <TextTool><Link  href="/login" underline="none" sx={{ color:'white'}} >{'Đăng nhập'}</Link></TextTool>
            <TextTool sx={{px:'5px'}}>|</TextTool>
            <TextTool sx={{paddingRight:'20px'}}><Link  href="/login" underline="none" sx={{ color:'white'}}>{'Đăng ký'}</Link></TextTool>
            </>
    :
    <>
     <TextTool sx={{paddingRight:'10px', display:'flex'}}><Avatar
  alt="Remy Sharp"
  src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/357702334_1738197413290559_5912056980303260606_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGQXzC6GM_R56AY5bOmayyEVRH5pwCxzNtVEfmnALHM22v7jZDh1-Pzo2xeNUHkqhx7A4blYvpaCXoLc6wJp71q&_nc_ohc=5mVQPvzKNnIAX8JxAbV&_nc_oc=AQngKPUK2Noy_B8m_UQ4pWXKyP1XehADwkCdm7LUGdj--Dg_bjxRZxsNq3kQI7-EGjv48nI9GU4SnE3c52AmZ99f&_nc_ht=scontent.fdad1-2.fna&oh=00_AfCpIFqnnbLCFf0j_Oew8_AaXfZXS-gCT7sxU5kp3Gmyyw&oe=658C9442"
  sx={{ width: 18, height: 18, marginRight:'4px', marginTop:'2px' }}
/><Link  href="/login" underline="none" sx={{ color:'white'}} >{nameUser}</Link></TextTool>
    </>
        }
      

        </>
    )
}