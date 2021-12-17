import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import banner from './../../assets/QR.jpg'
import Cross from './../../assets/Path.png'
import {ReactComponent as Apple} from './../../assets/apple.svg'
import {ReactComponent as Google} from './../../assets/googlestore.svg'




const DialogBox = (props) => {
  const handleClose = () => {
    props.setOpenDialog(false)
}
const closeVideo = () => {
  props.setOpenVideo(false);
}
    return (
      <>
      {props.video &&
          <Dialog open={props.openVideo} onClose={closeVideo}  >
         <DialogTitle>
<div style={{display:"flex",justifyContent:"flex-end"}} onClick={closeVideo}>
<img className="" src={Cross} alt="" width={15} />
    </div> 
 </DialogTitle>
<DialogContent>
<video width="100%" height="auto"  autoPlay >
<source src='https://spetrolmedia.s3.us-east-2.amazonaws.com/HD.mp4' type="video/mp4"/>
</video>
</DialogContent>
          </Dialog>}
     {!props.video &&   <Dialog open={props.openDialog} onClose={handleClose}>
      <DialogTitle>
           <div style={{display:"flex",justifyContent:"space-between"}} onClick={handleClose}>
               <p>Download mobile app</p>
               <img className="" src={Cross} alt="" width={15} height={15} />
               </div> 
               <div className="border"></div>
            </DialogTitle>
        <DialogContent>
          <DialogContentText>
              <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
         <p style={{textAlign:"center",width:"80%"}}>Scan the QR code below with your mobile phone and it will redirect you to the specific download link</p> 
          <div className="">
            <img className="" src={banner} alt="Banner" width={300} height={300}/>
        </div>
        </div>
        <div style={{padding:16}}>
        <div className="border"></div>
        </div>
        <p style={{textAlign:"center  "}}>Or, download directly now</p>
        <div className="playstore-btns-dialog" style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                 <Google style={{marginRight:8}} />
                 <Apple  />
              </div>

          </DialogContentText>
        </DialogContent>
      </Dialog>}
      </>
    )
}

export default DialogBox
