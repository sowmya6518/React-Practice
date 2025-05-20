import React from "react";
import { useState } from "react";

function MessageBox({onSendMsg}){

      const  [msg, setMsg] = useState('');

      const handleClick = () => {
            if (msg.trim() !== '') {
                  onSendMsg(msg);
                  setMsg('');
            }
      }
      return(
            <div style={{ marginTop: '20px' }}>


                  <h4>Send a Message</h4>
                  <input
                        type="text"
                        placeholder="Type a Message"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        /> 
                        <button onClick={handleClick}>Send</button>
            </div>
      );
}

export default MessageBox;