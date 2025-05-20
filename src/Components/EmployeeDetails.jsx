import React from "react";

function EmployeeDetails(){
      return(
            <div style={{border: '1px solid gray', padding: '10px', marginTop: '10px'}}>
                  <h3>Employee Details</h3>
                  <p><strong>Name:</strong>{employee.name}</p>
                  <p><strong>Experience:</strong>{employee.experience}</p>
                  <p><strong>Mobile No:</strong>{employee.mobile}</p>

            </div>
            
      );
}

export default EmployeeDetails;