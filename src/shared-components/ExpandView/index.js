import React,{useState} from 'react'
import typography from '../../styles/typography'
import {ReactComponent as Down} from './../../assets/Chevron-Down.svg';
import {ReactComponent as Up} from './../../assets/Chevron-Up.svg';
import './styles.css'


const ExpandView = (props) => {
    const [arrow, setArrow] = useState(false)
    const [question, setsetQuestion] = useState(0)
    const onFAQClick = (index) => {
        setArrow(!arrow)
     setsetQuestion(index)
    }
    return (
        <div className="expandedView" style={{justifyContent:"space-around",flexDirection:"column",display:"flex",width:"85%"}}>
     {props.data.map((faq,index) => {
      return (   
      <div key={index} className="padding20" style={{flexDirection:"row", display:"flex",justifyContent:"space-around",padding: "20px 32px 20px 32px"}} onClick={() => onFAQClick(index)}>
    <div style={{width:"90%"}}>
      {
        (question === index) ? <div style={{...typography.p216PxM,...{color:"#CA2128", fontSize:'20px', cursor:'pointer',}}}>{faq.Q}</div>
                             : <div style={{...typography.p216PxM,...{color:"#111111", fontSize:'20px', cursor:'pointer',}}}>{faq.Q}</div>
      }
       {question === index &&   <p style={{...typography.p314PxR,...{color:"#777777", fontSize:'16px', marginTop:24,width:"90%"}}}>{faq.A}</p>}
     </div>
   <div style={{width:"10%", cursor:'pointer',}}>
       { question === index  ? <Up style={{stroke: '#CA2128'}}/> : <Down />}
      
   </div>
  </div>)
     })}    
  </div> 
    )
}

export default ExpandView;
