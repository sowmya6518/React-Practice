import React from "react";

function UserStatus({loggedIn, error}){
      return(
           <div>
             <h2 style={{color: 'green'}}>
            {loggedIn? "WelcomeBack you are logged in successfully" : "Please Try again"}</h2>
            { error && <p style={{color:'red'}}>Error Occured</p>}
           </div>
      )
}


export default UserStatus;