import banner from './../../../assets/Banner_image.png';
// import logo from './Logotype.svg';
import React,{useState,useEffect} from 'react';
import    './styles.scss'
import DialogBox from './../../../shared-components/DialogBox'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HD from './../../../assets/spetrol-1.8.mov'

toast.configure()

function Section1() {

   const listenScrollEvent = e => {
    //  if(document.querySelector('#videobg')){
    //   if (window.scrollY > 50) {
    //     document.querySelector('#videobg').style.position = 'absolute';
    // } else {
    //     document.querySelector('#videobg').style.position = 'fixed';
    // }
    //  }
       
      }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
        return () => {
            
        }
    }, [])
    const [openDialog, setOpenDialog] = useState(false)
    // const [openVideo,setOpenVideo] = useState(false)
    const openDialogBox = () => {
        setOpenDialog(true)
    }
    // const playVideo = () => {
    //     console.log('ejbfk')
    //     setOpenVideo(true)
    // }
  return (
    <div className="background-container">
        <video autoPlay={true} poster={banner} id="videobg" loop={true} muted>
          <source  src={HD} type="video/mp4" />
          Your browser does not support the video tag. I suggest you upgrade your
          browser.
        </video>
        <div className="content">
          {/* <a href={'https://youtu.be/XRLIIG-ZKVA'} className="circle-ripple" target="_blank" rel="noreferrer"> <PlayIcon width={14} height={18} style={{marginLeft:3}} /></a> */}
          <div className="description-video">
              {/* <p className='section1-title'>
              Spetrol Fuel
              </p> */}
              <button type="button" className="notified_btn" onClick={() => openDialogBox()}>Download App</button>
        </div>
        </div>
        
    {openDialog && <DialogBox  openDialog={openDialog}   setOpenDialog={setOpenDialog}  />}
</div>


  );
}

export default Section1;
