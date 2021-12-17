import React from 'react'
import { Dropdown } from 'react-bootstrap';


const CustomDropdown = () => {
    return (
    <div style={{width:"100%"}}>
        <Dropdown className="drop-down-root">
          <Dropdown.Toggle  id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

         <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
         </Dropdown.Menu>
         </Dropdown>    
    </div>
    )
}

export default CustomDropdown;
