import React, { useState } from "react";
import './index.css';

export const messageUs = props => {
    const [id, setId] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [room, setRoom] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!nameInput) {
        return alert("Name can't be empty");
      }
      setId(name);
      socket.emit("join", name, room);
    };

    return id !== '' ? (
		 <div>Hello</div>
  ) : (
    <div style={{ textAlign: "center", margin: "30vh auto", width: "70%" }}>
      <form onSubmit={event => handleSubmit(event)}>
        <input
          id="name"
          onChange={e => setNameInput(e.target.value.trim())}
          required
          placeholder="What is your name .."
        />
        <br />
        <input
          id="room"
          onChange={e => setRoom(e.target.value.trim())}
          placeholder="What is your room .."
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// <---------------Hardcoded underneath-------------->
{/* <div className="inputfield">
			<label>Start Typing</label>
				<input type="form-control" placeholder="Message Here" />
 			</div>
			<div className="body2">
				<h2>Chat Messages</h2>
				<div className="message1">
					<img src="/w3images/bandmember.jpg" alt="Avatar" style={{ width: "100%" }} />
					<p>Hello. How are you today?</p>
					<span className="time-right">11:00</span>
				</div>
				<div className="container darker">
					<img src="/w3images/avatar_g2.jpg" alt="Avatar" className="right" style={{ width: "100%" }} />
					<p>Hey! I{"'"}m fine. Thanks for asking!</p>
					<span className="time-left">11:01</span>
				</div>
				<div className="message1">
					<img src="/w3images/bandmember.jpg" alt="Avatar" style={{ width: "100%" }} />
					<p>Sweet! So, what do you wanna do today?</p>
					<span className="time-right">11:02</span>
				</div>
				<div className="container darker">
					<img src="/w3images/avatar_g2.jpg" alt="Avatar" className="right" style={{ width: "100%" }} />
					<p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
					<span className="time-left">11:05</span>
				</div>
				<div className="message1">
					<img src="/w3images/bandmember.jpg" alt="Avatar" style={{ width: "100%" }} />
					<p>Hello. How are you today?</p>
					<span className="time-right">11:00</span>
				</div>
				<div className="container darker">
					<img src="/w3images/avatar_g2.jpg" alt="Avatar" className="right" style={{ width: "100%" }} />
					<p>Hey! I{"'"}m fine. Thanks for asking!</p>
					<span className="time-left">11:01</span>
				</div>
				<div className="message1">
					<img src="/w3images/bandmember.jpg" alt="Avatar" style={{ width: "100%" }} />
					<p>Sweet! So, what do you wanna do today?</p>
					<span className="time-right">11:02</span>
				</div>
				<div className="container darker">
					<img src="/w3images/avatar_g2.jpg" alt="Avatar" className="right" style={{ width: "100%" }} />
					<p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
					<span className="time-left">11:05</span>
				</div>
			</div>  */}
    
    











