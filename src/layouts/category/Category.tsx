import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChildCategory from './ChildCategory';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import { responseCategoryApi } from '../../Apis/indexApi';

export default function Category()
{
      const [listCategory, setListCategory]=useState(null);
      useEffect(()=>{
      const fetchData= async ()=>{ 
        try{
       const reponse= await responseCategoryApi
       setListCategory(reponse.data)

      }
      catch(error)
      {
            console.log('error')
      }
    }
    fetchData()
  },
      [])
    console.log(listCategory)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [oppa, setOppa] =useState(0);
    const [check, setCheck] = useState(false);
    const handleScroll = (direction) => {
      const scrollAmount = 575; // Điều chỉnh độ dài cuộn
      if ((direction === 'left')&&(check)) {
        setScrollPosition((prevPosition) => prevPosition + scrollAmount);
        setCheck(false);
      } else if ((direction === 'right')&&(check==false)) {
        setScrollPosition((prevPosition) => prevPosition - scrollAmount);
        setCheck(true);
      }
    };
  return(
    <>
    <Box sx={{ width: '100%', marginTop: '20px',position: 'relative'}}onMouseEnter={() => setOppa(0.6)}
      onMouseLeave={() => setOppa(0.2)}>
    <Button sx={{opacity: `${oppa}`, position: 'absolute',top: '80px',left: '-23px', minWidth:'6px',zIndex:'2'}} variant="contained" onClick={() => handleScroll('left')}>{'<'}</Button>
    <Button sx={{opacity: `${oppa}`, position: 'absolute',top: '80px',right: '-23px', minWidth:'6px',zIndex:'2'}} variant="contained" onClick={() => handleScroll('right')}>{'>'}</Button>
<Typography variant="button" display="block" sx={{paddingLeft:'10px', paddingTop:'10px',   bgcolor: '#FFFFFF', }}>Danh Mục </Typography>
<Box sx={{ display:'flex', position: 'relative',overflowX: 'hidden',zIndex:'1' }} >


<Box sx={{ display: 'flex', flexDirection: 'row', marginLeft: `${scrollPosition}px` }}>
{listCategory && listCategory.length > 0 && (
  listCategory.map((cate) => (
    <ChildCategory data={cate} key={cate.id} />
  ))
)}

</Box>


</Box>
   </Box>
    </>
  );

}
