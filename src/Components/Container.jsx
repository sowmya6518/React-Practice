import React from "react";

function Container(props){
      return(
            <div style={{border: '2px dashed blue', padding: '15px', margin: '15px 0' }}>
                  {props.children}
            </div>
      );
}


export default Container;