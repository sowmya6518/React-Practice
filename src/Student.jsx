import React from "react";

function Student ({name, qualification, occupation, mobileNo}){

      return(
            <h3>Hello, I am {name}, and my education qualification is {qualification} and I am working as {occupation}. Please do contact me at {mobileNo}</h3>
      );
}
export default Student;