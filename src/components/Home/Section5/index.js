import React ,{useState}from 'react'
import typography from './../../../styles/typography'
import {ReactComponent as Apple} from './../../../assets/apple.svg'
import {ReactComponent as Google} from './../../../assets/googlestore.svg'

import DialogBox from './../../../shared-components/DialogBox'

import './styles.css';


const Section5 = (props) => {
  const [openDialog, setOpenDialog] = useState(false)
    return (
        <div className="background" style={{background:"linear-gradient(180deg, #CA2128 0%, #AE2933 100%)"}} >
          <div className="footer-banner-container">
              <div className="banner-content">
              <p className="banner-title" style={{...typography.h136Px,...{color:'white', lineHeight: '40px'}}}>Start ordering fuel right
                from your mobile</p>
                <p  style={{...{color:'white',width:"80%"},...typography.p118Px}}>24/7 Fuel delivery to doorstep is just a click away.</p>
                  <div className="playstore-btns" >
                    <Google style={{marginRight:8}} />
                    <Apple  />
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
