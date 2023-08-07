import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselDatos } from './MainCarouselDatos';
import { responsiveFontSizes } from '@mui/material';



const MainCarousel = () => {

    
    const items = mainCarouselDatos.map((item)=> <img className='cursor-pointer ' role='presentation' src={item.image} alt=""/>)

    return (
    
    <AliceCarousel
    items={items}
    autoPlay
    autoPlayInterval={2000}
    infinite
   responsive={responsiveFontSizes}
    />
    );
}
export default MainCarousel