import React from 'react'
import './styles.css'
import  Spetrol1 from './../../../assets/choose_spetrol1.svg'
import  Spetrol2 from './../../../assets/choose_spetrol2.svg'
import  Spetrol3 from './../../../assets/choose_spetrol3.svg'
import typography from '../../../styles/typography'

const Section7 = () => {
    let whyChooseSpetrol = [
        {
            title: 'Real time order tracking',
            description: 'While we aim for quality in our operations and delivery, we maintain total transparency through live order tracking until the fuel reaches you.',
            image: Spetrol1
        },
        {
            title: 'Quality and Safety',
            description: 'We procure diesel directly from the oil depots of OMCs. We deliver in state-of-the-art tanks that have been pre-approved by the Ministry of Petroleum and Natural Gas as well as the Petroleum and Explosives Safety Organisation (PESO)',
            image: Spetrol2
        },
        {
            title: 'Highly informative dashboard',
            description: 'Personalised, user-friendly, and highly informative dashboard on to track current & previous orders, fuel usage, gasoline prices, expenditures and multiple payment options.',
            image: Spetrol3
        }
    ]
    return (
        <div className="why_choose_container" style={{backgroundColor: '#FAFAFA'}}>
            <div className="section7-main center">
            <p className='fontsize36px lineheight40px' style={{...typography.h136Px, lineHeight: '40px', margin: 0}}>Why choose Spetrol</p>
            {/* <p style={{...typography.p118PxR,...{color:"#777777",marginTop:12}}}>Here’s why you should choose us</p> */}
            </div>
            <div className="section7-cards">
                {
                    whyChooseSpetrol.map((section,index) => {
                       return <div key={index} className="card why_choose_spetrol_section_card shadow bg-white rounded" >
                       <div className="card-body padding20">
                           <h4 className="card-title fontsize24px marginBottom20" style={{color: 'rgb(202, 33, 40)', fontSize:'24px'}}>{section.title}</h4>
                           <p className="card-text fontsize16px" style={{fontSize: '16px'}}>{section.description}</p>
                       </div>
                       <img className="card-img-top" src={section.image} alt="Card cap" />
                   </div>
                       
                    //    <div className="section7-cards-style">
                    //     <p style={{...typography.p118PxB,...{marginTop:32, marginRight: 16}}}>{section.title}</p>
                    //     <p style={{...typography.p216PxR,...{marginTop:12,lineHeight: '24px', marginRight: 16,color:"#444444"}}}>{section.description}</p>
                    //     <div className="text-center">
                    //       <img width="100%" height="100%" src={section.image} alt='section_image' />
                    //     </div>

                    // </div>
                    })
                }
                    {/* <div className="section7-cards-style">
                        <p style={{...typography.p118PxB,...{marginTop:32, marginRight: 16}}}>Real time order tracking</p>
                        <p style={{...typography.p216PxR,...{marginTop:12,lineHeight: '24px', marginRight: 16,color:"#444444"}}}>While we aim for quality in our operations and delivery, we maintain total transparency through live order tracking until the fuel reaches you.</p>
                        <div className="text-center"><Spetrol1 /></div>
                    </div>
                <div className="section7-cards-style">
                    <div className="text-center"><Spetrol2 /></div>
                    <p style={{...typography.p118PxB,...{marginTop:32, marginRight: 16}}}>Quality and Safety</p>
                    <p style={{...typography.p216PxR,...{marginTop:12, lineHeight: '24px', marginRight: 16,color:"#444444"}}}>We procure diesel directly from the oil depots of OMCs. We deliver in state-of-the-art tanks that have been pre-approved by the Ministry of Petroleum and Natural Gas as well as the Petroleum and Explosives Safety Organisation (PESO)</p>
                </div>
                <div className="section7-cards-style">
                    <div className="text-center"><Spetrol3 /></div>
                    <p style={{...typography.p118PxB,...{marginTop:32, marginRight: 16}}}>Highly informative dashboard</p>
                    <p style={{...typography.p216PxR,...{marginTop:12, lineHeight: '24px', marginRight: 16,color:"#444444"}}}>Personalised, user-friendly, and highly informative dashboard on to track current & previous orders, fuel usage, gasoline prices, expenditures and multiple payment options.</p>
                </div> */}
            </div>
        </div>
    )
}

export default Section7;
