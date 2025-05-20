import React, {useState} from "react"; 

function AddEmployeeForm({onAddEmployee}){

      const [name, setName] = useState('');
      const [employeeExperience, setEmployeeExperience] = useState('');
      const [mobile, setMobile] =useState('');
      const [error, setError] = useState('');
      
      const handleSubmit = (e) => {
            e.preventDefault();
            if (!name || !employeeExperience || !mobile) {
                  setError('All fields are manadatory.');
                  return;
            }

            const mobileRegex = /^[0-9]{10}$/;
            if (!mobileRegex.test(mobile)) {
                  setError('Mobile number must be 10 digits.');
                  return;
            }
              
            onAddEmployee({ name, experience: employeeExperience, mobile });
                 
                  //clear form and error
                  setName('');
                  setEmployeeExperience('');
                  setMobile('');
                  setError('');
            }
      

      return(
           
                  <form onSubmit={handleSubmit}>
                        <h3>Add New Employee</h3>
                        <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        /> {''}

                        <input
                        type="text"
                        placeholder="Experience"
                        value={employeeExperience}
                        onChange={(e) => setEmployeeExperience(e.target.value)}
                        /> {''}

                        <input
                        type="text"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        /> {''}

                        <button type="submit">Add Employee</button>

                        {error && <p style={{ color: 'red' }}> {error} </p>}

                  </form>

      );
}

export default AddEmployeeForm;