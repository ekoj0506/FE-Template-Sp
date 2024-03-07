import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import ChildProduct from '../components/ChildProduct';
import { useState ,useEffect} from 'react';
import { responseProductApi } from '../Apis/indexApi';

export default function SuggestProduct()
{    const list=[{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'},{xe:'xe'}]
     const [listProduct, setListProduct] =useState([]);
      useEffect(()=>{
      const fetchData= async ()=>{ 
        try{
       const reponse= await responseProductApi  
       setListProduct(reponse.data)

      }
      catch(error)
      {
            console.log('error')
      }
    }
    fetchData()
  },
      [])

     return(
        <><Box >
            <Box sx={{  bgcolor: '#FFFFFF', marginBottom:'10px'}}>
           <Typography variant="h6" sx={{marginTop:'8px', paddingTop:'10px',      textAlign:'center',}}>  Gợi ý hôm nay</Typography>
            <Button sx={{  border: '3px solid #336699', width:'100%', minWidth:'0px',padding:'0px', marginTop:'-10px', paddingBottop:'0px',marginBottom:'-20px' }} >                </Button>
    
            </Box>
            <Box sx={{  display: 'flex',flexWrap: 'wrap', marginLeft:'16px'}} >
            {listProduct.map(product=> <ChildProduct data={product}/>  )}
            </Box>
            <Box sx={{ justifyContent: 'center', textAlign:'center', paddingBottom:'500px'}}>
            <Button sx={{width:'250px'}} variant="outlined">Xem thêm</Button>
            </Box>
            </Box>
        </>
    )
}
