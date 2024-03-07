import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
export default function ChildCategory(props)
{ const cate=props.data
    return(

<>

<Box sx={{width:'113px',marginTop:'2px', marginRight:'2px' ,height:'150px', display: 'flex',   bgcolor: '#FFFFFF' ,  alignItems:"center", flexDirection: 'column'}}>

<Avatar  sx={{width:'70px', height:'70px', bgcolor:'#eeeeee', marginTop:'15px'}} alt="Remy Sharp" src={cate.image}/>
<Typography sx={{ overflowWrap: 'break-word', textAlign:'center', paddingTop:'12px', fontSize:'15px'}}>{cate.categoryName}</Typography>
</Box>



</>



    );
}