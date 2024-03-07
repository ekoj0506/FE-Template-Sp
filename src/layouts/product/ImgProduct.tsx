import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

interface SliderProps {
  asNavFor?: Slider | null;
  slidesToShow?: number;
  swipeToSlide?: boolean;
  focusOnSelect?: boolean;
  children?: React.ReactNode;
}

const ImgProduct: React.FC = ({dataProduct}) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settings1: Settings = {
    asNavFor: nav2,
    ref: slider1,
  };

  const settings2: Settings = {
    asNavFor: nav1,
    ref: slider2,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    
  };

  return (
    <div>
      <Slider {...settings1}>
      <div>
           <img     src={dataProduct.images}      alt="img 1" />
        </div>
        <div>
           <img     src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llrsyep4pfj301"      alt="img 1" />
        </div>
        <div>
           <img     src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llrsyep4s8nze7"      alt="img 1" />
        </div>
        <div>
           <img     src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llrsyep4tn8fbc"      alt="img 1" />
        </div>
        <div>
           <img     src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llrsyep4mme7ea"      alt="img 1" />
        </div>
        <div>
           <img     src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llrsyep4qu3jae"      alt="img 1" />
        </div>
      </Slider>
      <Slider {...settings2} >
       
      <div>
        <Box sx={{width:'100px', margin:'10px'}}>
           <img     src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llrsyep4o0yn79"      alt="img 1" />
           </Box>
        </div>
        <div>
        <Box sx={{width:'100px', margin:'10px'}}>
           <img     src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llrsyep4pfj301"      alt="img 1" />
           </Box>
        </div>
        <div>
        <Box sx={{width:'100px', margin:'10px'}}>
           <img     src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llrsyep4s8nze7"      alt="img 1" />   </Box>
        </div>
        <div>
        <Box sx={{width:'100px', margin:'10px'}}>
           <img     src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llrsyep4tn8fbc"      alt="img 1" />  </Box>
        </div>
        <div>
        <Box sx={{width:'100px', margin:'10px'}}>
           <img     src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llrsyep4mme7ea"      alt="img 1" />  </Box>
        </div>
        <div>
        <Box sx={{width:'100px', margin:'10px'}}>
           <img     src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llrsyep4qu3jae"      alt="img 1" />  </Box>
        </div>
      </Slider>
    </div>
  );
};

export default ImgProduct;