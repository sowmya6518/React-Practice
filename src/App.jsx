import React from 'react';
import './App.css';
import { useState } from 'react';
// import Event from './Props';
// import Counter from './Counter';
// import Child from './Child';
// import Student from './Student';
// import Container from './Container';
// import UserStatus from './USerStatus';
// import ShowBox from './ShowBox';
// import ChildA from './ChildA';
// import ChildB from './ChildB';

import EmployeeDetails from './Components/EmployeeDetails';
import AddEmployeeForm from './Components/AddEmployeeForm';
import MessageBox from './Components/MessageBox';
import Container from './Components/Container';
import EmployeeList from './Components/EmployeeList';

function App() {
  const [ employees, setEmployees ] =useState([
    {id:1, name:'Sowmya', experience:'4.5 years', mobile:'6304291942'},
    {id:2, name:'Satya', experience:'1.8 years', mobile:'8500957777'},
    {id:3, name:'Prakash', experience:'3 years', mobile:'9177770707'},
    {id:4, name:'Madhu', experience:'5 years', mobile:'7386350441'},
  ])

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [msg, setMsg] = useState('');

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setMsg('');
  };

  const handleAddEmployee = (newEmployee) => {
    const id= employees.length + 1;
    setEmployees([...employees, {id, ...newEmployee }]);
  };

  const handleSendMsg = (msg) => {
    setMsg (msg);
  }


  const names = ['Satya', 'Sowmya', 'Prakash'];
  const numbers = [10,20,30,40,50];
  const students = [
    {id:1, name: 'Satya', qualification: 'B.Tech', occupation: 'IAS Officer', mobileNo: 8500957777},
    {id:2, name: 'Sowmya', qualification: 'B.Tech', occupation: 'Software Developer', mobileNo: 6304291942},
    {id:3, name: 'Prasanna', qualification: 'B.Tech', occupation: 'Python developer', mobileNo: 9177770707},
  ]
  const[messageFromChild, setMessageFromChild] = useState('');

  const isUserLoggedIn = false;
  const error = true;

  const showContent = true;

  const [message, setMessage] = useState('');
  const updatedMessage = (newMessage) => {
    setMessage(newMessage);
  };

  function handleChildMessage(data){
    console.log('Data from child:', data);
    setMessageFromChild(data);
  }

  return(
    
    <div className='App'>

      
        <h2>Employee Management App</h2>
        <AddEmployeeForm onAddEmployee={handleAddEmployee}/>

        <Container>
        <EmployeeList employees={employees} onEmployeeClick={handleEmployeeClick}/>
        </Container>

        {selectedEmployee &&  <EmployeeDetails employee={selectedEmployee}/>}

        <MessageBox onSendMsg={handleSendMsg}/>

        {msg && (
          <p style={{ color: 'green', marginTop: '10px' }}>Message from Child: {msg}</p>
        )}
      
       
    {/* <h1>I am the main page of this webpage</h1>
    <Event eventName = "Birthday" date="10/May/2025" place="Kajaguda" name="Sowmya Devapujala"/>
    <Event eventName = "Temple Visit" date="10/May/2025" place="ISKON" name="Radha Krishna"/>
    <Event eventName = "Lunch" date="10/May/2025" place="ASF" name="Prakash DSP"/>

    <Counter />

    <p>Message Received : {messageFromChild}</p>

    <Child sendMessage={handleChildMessage}/>

    {names.map((name, index) => (
      <h3 key={index}> Hello {name}!, I am coming from map & list.</h3>
    ))}

    {numbers.map((number, index) => (
      <p key={index}> My age is {number}.</p>
    ))}

    {students.map(student => (
      <Student key={student.id}
      name={student.name}
      qualification={student.qualification}
      occupation={student.occupation}
      mobileNo={student.mobileNo} />
    ))}

    <Container>
      <h2>I am using ChildProps</h2>
      <p>Here we can wrap the whole component and pass it as props.</p>
    </Container>

    <h3 style={{color:'yellow'}}>Conditional Rendering</h3>
    <UserStatus loggedIn={isUserLoggedIn} error={error}/>

    <ShowBox status={showContent}><p>This Content is shown only when status is True!</p></ShowBox>

    
    <ChildA onSend={updatedMessage}/>

   
    <ChildB receivedMessage={message}/> */}

    </div>

  );
}

export default App
