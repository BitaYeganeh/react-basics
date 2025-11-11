
import styles from './Form.module.css';

const Form = ({formData, setFormData, handleClick }) =>{

const handleChange = (e) => {
setFormData((prevState) => {
    return {...prevState, [e.target.name]: e.target.value}
});
   
};

const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
    setFormData({
        name:"",
        title:"",
        age:"",
    }); //Optional resetting of the form.
};

return (

  <div className={styles.formContainer}>
   <form onSubmit={handleSubmit}>
   
       <label htmlFor="name">Name:</label>
       <input 

         id="name" 
         name="name" 
         value={formData.name}
         onChange={handleChange} 
        
        />

        <label htmlFor="title">Title:</label>
        <input 
        
         id="title" 
         name="title" 
         value={formData.title}
         onChange={handleChange} 
        
        />
        
        <label htmlFor="age">Age:</label>
        <input 

         id="age" 
         name="age" 
         value={formData.age}
         onChange={handleChange} 
        
        />
 {/* ADD EMPLOYEE BUTTON*/}
        <button 
        type="submit"
        className='button'
        >Add Employee</button>
        {/* ALTERNATIVELY YOU CAN USE JUST BUTTON WITHOUT SUBMIT TYPE*/}
        {/* <button type="button" onclick={handleClick}>
        Add employee
        </button>*/}

         {/* RESET FORM BUTTON*/}

       <button className={styles.resetbutton}
       type="button"
       onClick={()=>
       setFormData({
        name:"",
        title:"",
        age:"",
       })
       }
       >
       Reset Form
       </button>

    </form>
    <div className={styles.formSummary}>
       
        <p>Your name : {formData.name}</p>
        <p>Your title : {formData.title}</p>
        <p>Your age : {formData.age}</p>
        </div>
  </div>
);
}
export default Form;