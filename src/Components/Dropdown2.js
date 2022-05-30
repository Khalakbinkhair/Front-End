import {useState} from 'react'
function Dropdown2() {
const[isActive, setIsActive]=useState(false);


return(

<div className="Dropdown">



<div className="dropdown-btn" onClick={(e) =>
setIsActive(!isActive)}>
 <div className="ok"><a href="#" className="btn btn-outline-secondary" style={{ color: "black" }} >Library Info</a> 
    
   <span className='fas fa-caret-down'></span> 
    
    </div></div> 
    {isActive && (
<div className="dropdown-content">
<div className="dropdown-item">
</div>
<div className="dropdown-item">
<a href="Borrow">Borrow History</a>
</div>
<div className="dropdown-item">
<a href="Financial">Financial</a>
</div>

</div>
)}

</div>


);



}

export default Dropdown2;