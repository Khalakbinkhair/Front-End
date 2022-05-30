import {useState} from 'react'
function Dropdown() {
const[isActive, setIsActive]=useState(false);


return(

<div className="Dropdown">



<div className="dropdown-btn" onClick={(e) =>
setIsActive(!isActive)}>
 <div className="ok"><a href="#" className="btn btn-outline-secondary" style={{ color: "black" }}>Academics</a> 
    
   <span className='fas fa-caret-down'></span> 
    
    </div></div> 
    {isActive && (
<div className="dropdown-content">
<div className="dropdown-item">
<a href="Academic"  >Academic Calender</a>
</div>
<div className="dropdown-item">
<a href="Registration">Registration</a>
</div>
<div className="dropdown-item">
<a href="Offered">Offered Courses</a>
</div>
<div className="dropdown-item">
<a href="Financials">Financials</a>
</div>
</div>
)}

</div>


);



}

export default Dropdown;