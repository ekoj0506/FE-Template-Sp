import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box } from '@mui/material';
import './Slider.css';
export default function Banner()
{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Box sx={{display: 'flex', height: '300px', marginTop:'10px', marginBottom:'80px'}}>
        <Box sx={{width:'60%', marginRight:'10px'  }}>
        <Slider {...settings}>
            <div style={{ zIndex: 2}}>
                <img src="https://i.pinimg.com/originals/ed/cd/32/edcd32b829a5c6e614a6d6383c562742.jpg" alt="Image 1"  />
            </div>
            <div style={{ zIndex: 2}}>
                <img src="https://i.pinimg.com/originals/ed/cd/32/edcd32b829a5c6e614a6d6383c562742.jpg" alt="Image 2" />
            </div>
            <div style={{ zIndex: 2}}>
                <img src="https://i.pinimg.com/originals/ed/cd/32/edcd32b829a5c6e614a6d6383c562742.jpg" alt="Image 3" />
            </div>
        </Slider>
        </Box>
        <Box sx={{width: '40%', height: '300px'}}>
        <img src="https://xuonginhanoi.vn/files/banner-web-thang-10-boclinic.jpg" alt="Image 1" height="50%" style={{marginBottom:'5px'}}  />
        <img src="https://xuonginhanoi.vn/files/banner-web-thang-10-boclinic.jpg" alt="Image 1"  />
        </Box>
        </Box>
    );
}

