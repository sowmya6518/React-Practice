import React from "react";

function ShowBox({status,children}){
      return(
            <div>
                  {status ? (<div className="box">{children}</div>) : (<p style={{color: 'red'}}>Content is hidden, turn the status to true</p>)}
            </div>
      );
}


export default ShowBox;