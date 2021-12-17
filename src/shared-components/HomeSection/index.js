import React from 'react';
import typography from '../../styles/typography';
import './styles.css';
import Tilt from 'react-parallax-tilt';

const HomeSection = (props) => {

    return (
        <div className={(props.class) ? `home-root ${props.class}` : 'home-root' }>
              {
                    !props.showaftertext  && <div  className={(props.image_class) ? `home-image-right ${props.image_class}` : 'home-image-right' }>
                    <Tilt className="parallax-effect" perspective={500} style={{position: 'relative'}}>
                        <img  src={props.mapImg}   alt="" width="100%" className="map-img"/>
                        <img  src={props.visual}   alt="" width="100%" className="homeSection-image"/>
                    <div style={{position: 'absolute', top: '57.5%', right: '26.5%'}} className="circle-ripple"></div>
                    </Tilt>
                    </div>   
              }
            <div className={(props.content_class) ? `home-direction ${props.content_class}`: 'home-direction' }>
                {
                    (props.section === 'OrderFuelSection') ?
                    <p style={{...typography.h130Px, marginBottom: 0, lineHeight: '32px', letterSpacing: "-0.02em"}}>Order fuel <span style={{color: 'rgba(255, 255, 255, 0.7)'}}>anywhere, anytime</span></p>
                    :
                    (props.section === 'order-tracking') ? 
                    <p className="color-faded" style={{...typography.h130Px, marginBottom: 0, lineHeight: '32px', letterSpacing: "-0.02em"}}>Real-time <span className='color-black'>availability & pricing</span></p>
                    :
                    <p style={{...typography.h130Px, marginBottom: 0, lineHeight: '32px', letterSpacing: "-0.02em"}}>{props?.data?.mainTitle}</p>
                }

                 <p className={(props.section === 'order-tracking') ? 'section-caption color-black': 'section-caption'}>{props?.data?.mainCaption} </p>

                <div className="direction-row padding32">
                  <img className="image" src={props.brand1} alt="" style={{marginRight:16}}></img> 
                    <div>
                            <p style={{margin: 0}}>
                                <span className={(props.section === 'order-tracking') ? 'main-title color-black': 'main-title'}>{props?.data?.title1}
                                <span className={(props.section === 'order-tracking') ? 'main-caption color-grey': 'main-caption'}>{props?.data?.subTitle1}</span> 
                                </span> 
                            </p> 
                    </div>
                </div>

                <div className="direction-row padding32">
                    <img className="image" src={props.brand2} alt="" style={{marginRight:16}}></img>
                    <div>
                            <p style={{margin: 0}}>
                                <span className={(props.section === 'order-tracking') ? 'main-title color-black': 'main-title'}>{props?.data?.title2}
                                    <span className={(props.section === 'order-tracking') ? 'main-caption color-grey': 'main-caption'}>{props?.data?.subTitle2}</span>
                                </span>  
                            </p> 
                    </div>
                </div>

                <div className="direction-row padding32">
                    <img className="image" src={props.brand3} alt="" style={{marginRight:16}}></img>
                    <div>
                                <p style={{margin: 0}}>
                                    <span className={(props.section === 'order-tracking') ? 'main-title color-black': 'main-title'}>{props?.data?.title3}
                                        <span className={(props.section === 'order-tracking') ? 'main-caption color-grey': 'main-caption'}>{props?.data?.subTitle3}</span>
                                    </span>  
                                </p>
                            
                    </div>
                </div>
             </div>
                {
                    props.showaftertext &&  <div className={(props.section === 'OrderFuelSection' ? 'order_fuel_img' : "home-showaftertext")}>
                         <img  src={props.visual} width="100%" height="100%" alt="" />
                         <div style={{position: 'absolute', top: '38.2%', left: '49%'}} className="circle-ripple"></div>
                        {/* <img className="image_bg" src={props.bg} alt="background" />
                        <div className="image_banner">
                            <img  src={props.visual} width="100%" height="88%" alt="" />
                            <div style={{position: 'absolute', top: '38.2%', left: '49%'}} class="circle-ripple"></div>
                        </div>    */}
                    </div>
                }

        </div>
    )
}

export default HomeSection;
