import React from 'react'
import './styles.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import phone_icon from './../../assets/phone_icon.png'
import email_icon from './../../assets/email_icon.png'
toast.configure()
const Contact = () => {

    let firstName = React.useRef(null);
    let lastName = React.useRef(null);
    let email = React.useRef(null);
    let phone = React.useRef(null);
    let subject = React.useRef(null);
    let message = React.useRef(null);
    const OnSelect = (val) => {
     subject.current = val;
    }
    const handleSubmit = e => {
        e.preventDefault();
        
        const data = {
            FirstName: firstName?.current?.value,
            LastName: lastName?.current?.value,
            Email: email?.current?.value,
            Phone: phone?.current?.value,
            Message: message?.current?.value,
            Subject: subject?.current?.value
        }
        console.log('data', JSON.stringify(data));
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('https://staging.spetrol.in/auth/contact', requestOptions)
            .then(response => response.json())
            .then(data =>{
                if(!data.success){
                    toast.error("Something went wrong. Please try again later"); 
                }else{
                    firstName.current.value = null;
                     lastName.current.value = null;
                     email.current.value = null;
                     phone.current.value= null;
                     subject.current.value = null;
                     message.current.value = null;
                    toast.success("Data Saved Successfully.Our Support Team will contact you ASAP!");
                }
       
            })
            .catch((error) => {
                toast.error("Something went wrong. Please try again later"); 
            });
      };
    
    
    return (
        <div className="container-fluid">
            <div className="contact-container">
            <div className="sidebar">
                <div className="contact-info">
                    <h6 className="contact-title">Contact Information</h6>
                    <p className="contact-desc">Have a question ? Not sure if we deliver at your area ? Get in touch send us a message. Fill out the form below.</p>
                </div>
                <div className="contact-details">
                    <p className="phone">
                        <img className='phone_icon' src={phone_icon} style={{paddingRight: 10}} alt="phone_icon" />
                        Phone: +91 1234567890
                    </p>
                    <p className="email">
                        <img className='email_icon' src={email_icon} style={{paddingRight: 10}} alt="phone_icon" />
                        Email: info@spetrol.com
                        </p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
            <h6 className="msg-title">Send us a message</h6>
                <div className="row">
                    <div className="form-group col-lg-6">
                        <label className="form-label">First name</label>
                        <input type="text" className="form-control" ref={firstName} />
                    </div>
                    <div className="form-group col-lg-6">
                        <label className="form-label">Last name</label>
                        <input type="text" className="form-control" ref={lastName} />
                    </div>      
                </div>
                <div className="row">
                    <div className="form-group col-lg-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" ref={email} />
                    </div>
                    <div className="form-group col-lg-6">
                        <label className="form-label">Phone</label>
                        <input type="number" className="form-control" ref={phone} />
                    </div>      
                </div>
                <div className="row">
                    <div className="form-group col-lg-12">
                        <label className="form-label">Subject</label>
                       <div style={{borderRadius:20}}><Dropdown options={['payment','service','other']} onChange={(value) => OnSelect(value)} value={'Service Avaliability'} placeholder="Select an option"  /></div> 

                        {/* <input type="text" className="form-control" ref={subject} /> */}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-lg-12">
                        <label className="form-label">Message</label>
                        <textarea type="text" rows="5" ref={message} maxLength="500" className="form-control" ></textarea>
                        <p className="placeholder">Max.500 characters</p>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                   <button className="btn btn-danger" type="submit">Submit</button>
                </div>
            </form>
            </div>
            {/* <FAQSection /> */}
        </div>
    )
}

export default Contact;
