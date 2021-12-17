import React from 'react';
import './styles.css';
import visual from './../../../assets/Visual3.png';
import brand1 from './../../../assets/Brand_icon7.png'
import brand2 from './../../../assets/Brand_icon8.png'
import brand3 from './../../../assets/Brand_icon9.png'
import map from './../../../assets/map_interface.png'
import HomeSection from '../../../shared-components/HomeSection';

const Section4 = () => {
    const data={
        mainTitle:'Real-time availability & pricing',
        mainCaption:'Spetrol tracks order, schedules delivery, check fuel prices, & much more..',
        title1:'Track fuel prices. ',
        title2:'Real time order tracking. ',
        title3:'Schedule fuel delivery for later. ',
        subTitle1:'We provide daily updated fuel prices at your location.',
        subTitle2:'Know where your order is and the estimated delivery time.',
        subTitle3:'Place the order at your preferred time and have it delivered at your convenience.'
     }
    return (
        <div className="order-tracking-container ">
        <HomeSection
             visual={visual}  
             brand1={brand1} 
             brand2 = {brand2} 
             brand3={brand3} 
             data={data} 
             showaftertext={false}
             class={'order-tracking'}
             image_class={'img-section'}
             content_class={'content-section'}
             section={'order-tracking'}
             mapImg={map}
      />
      </div>
    )
}

export default Section4
