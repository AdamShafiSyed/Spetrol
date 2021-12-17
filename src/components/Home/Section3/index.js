import React from 'react';
import './styles.css';
import visual from './../../../assets/Visual2.png';
import brand1 from './../../../assets/Brand_icon4.png'
import brand2 from './../../../assets/Brand_icon5.png'
import brand3 from './../../../assets/Brand_icon6.png'
import HomeSection from './../../../shared-components/HomeSection'

const Section3 = () => {
    const data={
        mainTitle:'Multiple payment options',
        mainCaption:'We have multiple payment options for you to choose from. We have made a variety of payment options available at checkout.',
        title1:'Pay directly from your bank',
        title2:'Secure end-end transactions',
        title3:'Get refunds directly in your bank',
        subTitle1:'Now pay directly from your bank account right at the checkout.',
        subTitle2:'All our transactions are secure and safe.',
        subTitle3:'Cancelled the order? Your will get a refund directly in your bank account.'
     }
    return (
        <>
            <HomeSection 
                visual={visual}
                brand1={brand1}
                brand2 = {brand2} 
                brand3={brand3} 
                data={data} 
                showaftertext={true}/>
        </>
    )
}

export default Section3
