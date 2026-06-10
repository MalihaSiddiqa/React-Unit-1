import "../styles/form.css";
import React,{useState} from "react";
//form function
function Form() {
    const [formData,setFormData]=useState({
        name:"",
        feedback:""
    });
    const [arr,setArr]=useState([]);


//handle change function.
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    //Handle submit function
    function handleSubmit(e) {
        e.preventDefault()
        setArr([...arr, formData]);
        setFormData({name:"",feedback:""});
    }
return(
    //inputs..
    <div className="container">
       <form className="form" onSubmit={handleSubmit}>
    
        <input type="text"
             name="name"
             placeholder="Enter your name.."
             value={formData.name} 
             onChange={handleChange} 
             required/>
             
            <textarea name="feedback" placeholder="Enter your feedback here..." required></textarea>
        
            <button type="submit">Submit</button>
        </form>
        <div>
            <br></br>
          {arr.map((item,index)=>
        <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.feedback}</p>
</div>
        )}
        </div>
    </div>
);
}
export default Form;