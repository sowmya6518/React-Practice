import React from "react";

function EmployeeList({ employees, onEmployeeClick }){
      return(
            <div>
                  <h3>Employee List</h3>
                  {employees.length === 0 ? (
                        <p>No Employees available.</p>
                  ) : (
                        <ul>
                              {employees.map((employee) => (
                                    <li 
                                    key={employee.id} 
                                    onClick={() => onEmployeeClick(employee)} 
                                    style = {{ curdor : 'pointer'}}>
                                    {employee.name} - {employee.experience} - { employee.mobile}
                                    </li>
                              ))}
                        </ul>
                  )}
            </div>
      );
}

export default EmployeeList;