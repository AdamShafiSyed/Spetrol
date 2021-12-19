import React from 'react';
import './styles.css';
import visual from './../../../assets/order_fuel_section_img1.png';
import bg from './../../../assets/img_bg.png';
import brand1 from './../../../assets/order_fuel_icon_1.png'
import brand2 from './../../../assets/order_fuel_icon_2.png'
import typography from './../../../styles/typography';
import colors from './../../../styles/colors';

import brand3 from './../../../assets/order_fuel_icon_3.png';
import HomeSection from './../../../shared-components/HomeSection';

const Section2 = () => {
   const data={
       mainTitle:'Order fuel anywhere, anytime',
       mainCaption:'Why go to the gas station when fuel can be delivered right to your doorstep?',
       title1:'Saves time, money and manpower. ',
       title2:'Reduced risk of fraud and spills. ',
       title3:'Track Fuel usage. ',
       subTitle1:'Avoid the traffic and inconveniences of driving long distances to get fuel. Save money on large-sale storage.',
       subTitle2:'Zero-spill guarantee. Tankers are equipped with IoT and tamper-proof electronic locks protected by cutting-edge geofence technology.',
       subTitle3:'Unique dashboard to track current and previous orders, fuel usage, gasoline prices, and expenditures.'
    }
    return (
        <>
        <div className="title section2-title">
            <div className='fontsize62px lineheight62px' style={{...typography.h136Px,...{textAlign:"center", fontSize:62}}}>A better way to order fuel</div>
            <p className="section2-subtext fontsize18px" style={{...typography.p118Px,...{color:colors.grey1}}}>Get to know about the top features <span style={{color: "#CA2128",fontWeight: 800, fontStyle:'italic'}}>Spetrol</span> has to offer you.</p>
        </div>
        <div className="order-fuel-container">
        <HomeSection 
            visual={visual}  
            brand1={brand1} 
            brand2 = {brand2}  
            section={'OrderFuelSection'} 
            brand3={brand3} 
            data={data} 
            showaftertext={true} 
            class={'fuel-anywhere-section'}
            bg={bg}
         />
        </div>
        </>
    )
}

export default Section2
