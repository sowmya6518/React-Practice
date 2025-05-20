import React from "react";

function Baby(props){

      function ChildToParent(){
            props.message("I am coming from Child")
      }
      return (

            
            <div>
                  <h3>I am {props.name}</h3>
            </div>

      );
}

export default Baby;