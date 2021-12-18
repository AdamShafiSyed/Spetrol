import React from 'react'
import './styles.css'
import typography from './../../styles/typography';
import {ReactComponent as Facebook} from './../../assets/facebook.svg'
import {ReactComponent as Twitter} from './../../assets/twitter.svg'
import {ReactComponent as Insta} from './../../assets/instagram.svg'
import {ReactComponent as Linkedin} from './../../assets/linkedin.svg'
import {ReactComponent as Youtube} from './../../assets/youtube.svg'
import {ReactComponent as Medium} from './../../assets/medium.svg'
import {ReactComponent as Vimeo} from './../../assets/vimeo.svg'
import { NavLink, useLocation } from 'react-router-dom'



const Footer = () => {
    const location = useLocation();
    const footerData = [{
        name:'About',
        route:'/about'
    },
    {
        name:'Blogs',
        route:'/blogs'
    },
    {
        name:'Contact',
        route:'/contactus'
    },
    {
        name:'Terms & Conditions',
        route:'/terms'
    },
    {
        name:'Privacy Policy',
        route:'/policy'
    }]
    const socialMedia = [{
        name:'fb',
        id:0,
        Svg:Facebook,
        link:'https://www.facebook.com/profile.php?id=100072630456681'
    },
    {
        name:'twitter',
        id:1,
        Svg:Twitter,
        link:'https://twitter.com/Spetrol_in?t=9Ag3UXVyUI7P2Qr_BeX_Pg&s=09'
    },{
        name:'insta',
        id:2,
        Svg:Insta,
        link:'https://instagram.com/spetrol.in?utm_medium=copy_link'
    },{
        name:'linkedin',
        id:3,
        Svg:Linkedin,
        link:'https://www.linkedin.com/company/spetrol'
    },{
        name:'youtube',
        id:3,
        Svg: Youtube,
        link:'https://youtu.be/XRLIIG-ZKVA'
    },{
        name:'medium',
        id:3,
        Svg:Medium,
        link:'https://link.medium.com/Oh11YXQI1lb'
    },{
        name:'vimeo',
        id:3,
        Svg:Vimeo,
        link:'https://vimeo.com/651912536'
    }
]
    return (
        <div className="footer" style={{...location?.pathname === '/blogs' ? {background: '#fafafa'} : {background: "#fff"}}} >
            <div className="padding">
            <div className="footer-text" style={{marginBottom:'2.35vw'}}>
                {footerData.map((footer,index) => {
                return <NavLink key={index}
                            to={footer.route}
                            activeStyle={{ color:'#ca2128' }}
                            style={{...typography.p314PxM, cursor: 'pointer'}}
                            className="nav-link fontsize14px"
                             >
                            {footer.name}
                        </NavLink>
                
                // <a href={footer.route} style={{cursor: 'pointer'}} target="_self" key={index}>
                // <label className="footer-text-padding" style={{...typography.p314PxR,...{marginRight:32, color:"#444444",textAlign:"center", cursor: 'pointer'}}}>{footer.name}</label>
                // </a>
               })}
            </div>
           
              <div style={{marginBottom:"2.35vw",textAlign:"center", display: 'flex', justifyContent: 'space-evenly'}}>
              {socialMedia.map((media,index) => {
                const Svg = media.Svg;
                return  <a href={media.link} className='social_media_icons' target="_blank" rel="noopener noreferrer" key={`${index} ${media}`}>
                <Svg />
                </a>
              })}
              </div>
              <div className='fontsize14px' style={{...typography.p314PxR,...{textAlign:"center",color:"#ca2128"}}}>
              {'© 2021 Raams Moving Technologies, Inc.'.toUpperCase()}
              </div>
            </div>
            
        </div>
    )
}

export default Footer;
