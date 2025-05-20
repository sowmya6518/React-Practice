import React from "react";

function ChildB({ receivedMessage}){
      
      return(
            
            <div>
                  <h3>Child B</h3>
                  <p> Message Received: {receivedMessage} </p>
            </div>
      );
}

export default ChildB;