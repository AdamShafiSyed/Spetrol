import React ,{useState}from 'react'
import typography from './../../../styles/typography'
import {ReactComponent as Apple} from './../../../assets/apple.svg'
import {ReactComponent as Google} from './../../../assets/googlestore.svg'

import DialogBox from './../../../shared-components/DialogBox'

import './styles.css';


const Section5 = (props) => {
  const [openDialog, setOpenDialog] = useState(false)
  const openDialogBox = () => {
    setOpenDialog(true)
}
    return (
        <div className="background" style={{background:"linear-gradient(180deg, #CA2128 0%, #AE2933 100%)"}} >
          <div className="footer-banner-container">
              <div className="banner-content">
              <p className="banner-title fontsize36px lineheight40px marginBottom16"  style={{...typography.h136Px,...{color:'white', lineHeight: '40px'}}}>Start ordering fuel right
                from your mobile device.</p>
                <p className='fontsize18px marginBottom16'  style={{...{color:'white',width:"80%"},...typography.p118Px}}>24/7 Fuel delivery to doorstep is just a click away.</p>
                  <div className="playstore-btns" >
                    <Google className='playstr-btn marginRight8' onClick={() => openDialogBox()}  style={{cursor: 'pointer'}} />
                    <Apple className='applestr-btn'onClick={() => openDialogBox()}  style={{cursor: 'pointer'}}  />
                  </div>
                  <div>
                      <button className="download-btn btn" onClick={() => setOpenDialog(true)} >Download Now</button>
                  </div>
                </div>
              <div className="iphone-cover-image">
                <img className="iphone-image" src={props.img} alt="Banner" />
              </div>
        </div>
        {openDialog && <DialogBox  openDialog={openDialog}   setOpenDialog={setOpenDialog}  />}
        </div>
    )
}

export default Section5
