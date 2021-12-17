import React,{useEffect,useState} from 'react';
import  './styles.css';
import asset1  from './../../../assets/asset_1.svg';
import asset2  from './../../../assets/asset_2.svg';
import asset3  from './../../../assets/asset_3.svg';
import vehicle  from './../../../assets/vehicle.svg';
import machine_img1  from './../../../assets/machine_img1.svg';
import machine_img2  from './../../../assets/machine_img2.svg';
import typography from '../../../styles/typography';;
let interval;
const Section8 = () => {
    const [selectedAsset, setselectedAsset] = useState(0);
    const [progress, setProgress] = useState(0)
    useEffect(() => {
       interval =  setInterval(() => { 
            // if(selectedAsset === 0){
            //     setProgress(1000)
            //     setselectedAsset(1);
            // }else if(selectedAsset === 1){
            //     setselectedAsset(2);
            // }else{
            //     clearTimeout(interval);
            // }
         },4000);
        return () => {
            clearTimeout(interval);
        }
    },[selectedAsset])
    const data = [{
        title:'Select your asset',
        subtitle:'Be it machinery or gensets or vehicles, we will never let your assets run out of fuel.',
        id:0,
        image:asset1
    },{
        title:'Enter fuel amount',
        subtitle:'Don’t worry about the volume. You can even enter the full capacity of all your assets.',
        id:1,
        image:asset2
    },{
        title:'Order',
        subtitle:'You can place the order for immediate delivery or choose a delivery time slot that is most convenient for you.',
        id:2,
        image:asset3
    },


]
    const highlightcard = (index) => {
        clearTimeout(interval);
        setselectedAsset(index);
    }
    return (
        <div className="section8-top-margin"> 
        
                <div style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <p className="main-heading" style={{color: '#fff'}}> How it works</p>
                    {/* <p style={{...typography.p118Px,...{color:"#777777",marginTop:21}}}> Learn how you can order fuel in just a few minutes</p> */}
                </div>

          <div className="background-red">
           <div className="section8-action-cards">
               <div className="section8-card-style"> 
                    {data.map((asset,index) => {
                        return <div key={index} className={ selectedAsset === index ? 'highlightedBox' :`borderBox`}>
                            <div style={{padding:24, cursor: 'pointer'}} onClick={() => highlightcard(index)}>
                            <p style={{...typography.h420Px,...{color:selectedAsset === index ? '#9D2831': "#111", letterSpacing: "-0.01em", lineHeight: "26px", margin:0}}}>{asset.title}</p>
                            <p style={{...typography.p314Px,...{color:selectedAsset === index ? '#9D2831': "#777777",marginTop:12,marginBottom:0, lineHeight: '20px'}}}>{asset.subtitle}</p>
                            </div>
                        </div>
                    })}
                </div>
                    <div className="section8-cover-image">
                        {
                             (data[selectedAsset].id === 0) ? 
                             <div>
                                <img src={vehicle} className='vehicle_img' alt="vehicle_img" />
                                <img src={machine_img1} className='machine_img1' alt="machine_img1" />
                                <img src={machine_img2} className='machine_img2' alt="machine_img2" />
                            </div>
                            : ''
                        }
                        <img className="section8-image" width="85%" src={`${data[selectedAsset].image}`} alt="Banner" />
                    </div>
           </div>
          </div>
        </div>
    )
}

export default Section8;
