// import React from 'react';
// import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';

// interface SliderProps {
//   images: string[];
// }

// const SliderComponent: React.FC<SliderProps> = ({ images }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...settings}>
//       {images.map((image, index) => (
//         <div key={index}>
//           <img src={image} alt={`Image ${index + 1}`} />
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default SliderComponent;