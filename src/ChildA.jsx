import React from "react";

function ChildA({ onSend }){
      
      return(
            <div>
                  <h3>ChildA</h3>
            <button onClick={() => onSend("Hello from ChildA!")}>Send Message</button>
            </div>
            

      );
}

export default ChildA;