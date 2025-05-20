import React from "react";

function Event(props){
      return(
            <div>
                  <h3>Events Schedule</h3>
                  <h2>Event : {props.eventName}</h2>
                  <p>*We are Kindly inviting you on this great event on {props.date}* at {props.place} and inviting by {props.name}</p>
            </div>
      );
}


export default Event;