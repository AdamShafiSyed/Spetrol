import React from 'react'
import './styles.css'
import typography from '../../styles/typography';
import globalStyles from './../../styles/globalStyles';
import {ReactComponent as Twitter} from './../../assets/twitter.svg'
import {ReactComponent as Linkedin} from './../../assets/linkedin.svg'
import Section5 from '../../components/Home/Section5';
import banner from './../../assets/iphone_black.svg'
import RamBudime from './../../assets/Ram-Budime.jpg'
import Shrishti from './../../assets/Srishti.JPG'
import Vikram from './../../assets/vikram_crop.jpg'
import Sirisha from './../../assets/sirisha_crop.jpg'
import Srikanth from './../../assets/srikanth.jpg'
import Neeharika from './../../assets/neeharika_crop.jpg'
import About1 from './../../assets/aboutus_1.jpeg'
import About2 from './../../assets/aboutus_2.jpeg'
import About3 from './../../assets/aboutus_3.jpeg'


const About = () => {
    const socialMedia = [
    {
        name:'twitter',
        id:1,
        Svg:Twitter,
        link:'https://twitter.com/Spetrol_in?t=9Ag3UXVyUI7P2Qr_BeX_Pg&s=09'
    },{
        name:'linkedin',
        id:3,
        Svg:Linkedin,
        link:'https://www.linkedin.com/company/spetrol'
    }];

    const teamMembers = [
        {
            name: 'Ram Budime',
            role: 'Founder & CEO',
            imgURL: RamBudime,
            twitterURL: 'https://twitter.com/?lang=en',
            InstaURL: 'https://www.instagram.com/?hl=en'
        },
        {
            name: 'Neharika Reddy',
            role: 'Co-founder & CLO',
            imgURL: Neeharika,
            twitterURL: 'https://twitter.com/?lang=en',
            InstaURL: 'https://www.instagram.com/?hl=en'
        },
        {
            name: 'Paavan Srikanth Reddy',
            role: 'Chief Financial officer',
            imgURL: Srikanth,
            twitterURL: 'https://twitter.com/?lang=en',
            InstaURL: 'https://www.instagram.com/?hl=en'
        },
        {
            name: 'Sirisha Challagundla',
            role: 'Chief Process and Knowledge officer',
            imgURL: Sirisha,
            twitterURL: 'https://twitter.com/?lang=en',
            InstaURL: 'https://www.instagram.com/?hl=en'
        },
        {
            name: 'Vikram Kalta',
            role: 'Chief Technical officer',
            imgURL: Vikram,
            twitterURL: 'https://twitter.com/?lang=en',
            InstaURL: 'https://www.instagram.com/?hl=en'
        },
        {
            name: 'Kiran Golla',
            role: 'Chief Marketing officer',
            imgURL: 'https://prepsec.org/wp-content/uploads/2017/09/unknown-person-icon-Image-from.png',
            twitterURL: 'https://twitter.com/?lang=en',
            InstaURL: 'https://www.instagram.com/?hl=en'
        },
        {
            name: 'Sristi Shetty',
            role: 'Copywriting',
            imgURL: Shrishti,
            twitterURL: 'https://twitter.com/?lang=en',
            InstaURL: 'https://www.instagram.com/?hl=en'
        }   
    ]
    return (
        <div>
            {/* Header */}
            <div className="container-header">
                <div className="marginBottom80">
                   <p className="header-title" style={{...typography.h148Px}}>Ordering fuel online has never been <span style={{...globalStyles.spetrolColor,...typography.h148Px}}>easier!</span></p>
                    <p className="header-desc" style={{...typography.p216PxR}}>
                        We are India’s fast fuel delivery service with fully automated fuel
                         delivery business that delivers fuel to your location in a safe,
                          dependable, and efficient manner. Founded by a team of highly inspired
                           visionaries and technocrats with commendable expertise in the field
                            of on-site refueling and control of spill proof petrodiesel ( HSD )
                             for tier 1 cities and evolving to expand further.
                    </p>
                    <p className="header-desc" style={{...typography.p216PxR}}>
                    Industries, commercial buildings, Telecom towers, agriculture machinery, other businesses, etc. are dependent on power generators which constantly consume a heavy amount of diesel. </p>
                    <p className="header-desc" style={{...typography.p216PxR}}>There are prescribed guidelines for handling transport and storage of Diesel. Still, fuel procurement is done in a hazardous manner. Fuel is carried in plastic containers, barrels, and canisters that are risky. This is where The Spetrol steps in.</p>
                    <p className="header-desc" style={{...typography.p216PxR}}>Spetrol is an online application to book fuel delivery for vehicles as well as Industrial & Agricultural machinery across rural and urban India. Our IOT-enabled transportation system minimises travel costs, logistic costs & delivery time and is equipped to deliver cleaner energies in the coming years.</p>
                </div>

                {/* Header images */}

                <div className="images-container">
                   <img className="header-imageOne" src={About3} alt="brand_img" />
                    <div className="images-sub-container">
                        <img className="header-imageTwo" src={About2} alt="brand_img" />
                        <img className="header-imageThree" src={About1} alt="brand_img" />
                    </div>
                </div>
            </div>

            {/* Motive */}

            <div className="page-content">
                <p className="page-content-desc">
                Our motive stands to promote the use of environmentally acceptable alternative fuels and to provide completely automated On-Site refueling. We are devoted to providing outstanding customer service and accountability of every drop of gasoline delivered to our clients as India's first and only organised fully automated on location Refueller.
                </p>
            </div>

            {/* About Team */}

            <div className="team-container">
                
                <div className="marginTop96">
                    <h1 className="team-container-title fontsize36px" style={{...typography.h136Px}} >Meet our team</h1>
                    <p  className="team-container-desc fontsize18px" style={{...typography.p118Px}}>Meet our exceptionally talented and highly ambitious team of Spetrol</p>
                </div>
                
            <div className="team-images-container">
                {teamMembers.map((people, index) => {
                   return<div key={index} className="person-card">
                    <div className="text-center  person-img-div">
                        <img className="person-img" src={people.imgURL} alt={people.name} />
                    </div>
                    <div className="text-center marginTop15 person-details">
                        <p className="person-name fontsize18px" style={{...typography.p118Px}}>{people.name}</p>
                        <p className='person-role fontsize18px' style={{...typography.p118Px}}>{people.role}</p>
                        <div className="media-icons marginTop10">
                            {socialMedia.map((media, index) => {
                                const Svg = media.Svg;
                                return  <a key={index} href={media.link} target="_blank" rel="noopener noreferrer">
                                <Svg className="marginRight10" />
                                        </a>
                            })}
                        </div>
                    </div>
                    </div>
                })}
            </div>
            </div>
            <div>
                <Section5 img={banner}></Section5>
            </div>
        </div>
    )
}

export default About;
