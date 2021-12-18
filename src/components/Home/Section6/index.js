import React from 'react'
import typography from './../../../styles/typography';
import ExpandView from './../../../shared-components/ExpandView'
import './styles.css'

const Section6 = () => {
    return (
        <>
        <div className="qtns-container" style={{justifyContent:"center",alignItems:"center",flexDirection:"column",display:"flex"}}>
            <div className="section6-margin fontsize36px" style={{...typography.h136Px,...{paddingBottom:'3%'}}}>
            Frequently asked questions
            </div>
            <ExpandView data={[
                {
                    'Q': 'How safe it is to order diesel at your doorstep?',
                    'A': 'We deliver diesel in tankers equipped with IoT and tamper-proof electronic locks protected by cutting-edge geo - fencing technology. Our diesel tankers meet all safety standards as well as statutory approvals, licences, and requirements from PESO (Petroleum and Explosive Safety Organisation), Weights and Measures, Taxation, and other organisations.'
                },
                {
                    'Q': 'Is doorstep delivery expensive?',
                    'A': 'We charge the same price for diesel that you would pay at a gas station. However, we do charge a nominal convenience fee for delivering it to your doorstep at any time and location.'
                },
                {
                    'Q': 'Where do you source your diesel from?',
                    'A': 'We source diesel directly from BPCL Depots.'
                },
                {
                    'Q': 'How can I pay for fuel?',
                    'A': 'We accept payment through NEFT, IMPS, RTGS, Cheque, UPI, Debit card, Credit card, Wallets & Cash on Delivery.'
                },
                {
                    'Q': 'How do I know how much oil was supplied?',
                    'A': 'Your oil and fuel delivery will be monitored by the tanker’s meter and you will receive a printed reading showing you the precise amount dispensed.'
                }
            ]}/>

        </div>
        </>
    )
}

export default Section6
