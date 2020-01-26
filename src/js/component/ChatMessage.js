import { BrowserHistory } from 'react-history'
import History from 'react-history/BrowserHistory'
import React, { PropTypes } from 'react'
import { Push } from 'react-history/Actions'
import Prompt from 'react-history/Prompt'

const App = React.createClass({
  render() {
const Link = React.createClass({
  propTypes: {
    to: PropTypes.string.isRequired
  },
 
  getInitialState() {
    return { wasClicked: false }
  },
 
  render() {
    const { to, ...props } = this.props
 
    // If the <Link> was clicked, update the URL!
    if (this.state.wasClicked)
      return <Push path={to}/>
 
    return (
      <span {...props} onClick={() => this.setState({ wasClicked: true })}/>
    )
  }
})
const Form = React.createClass({
  getInitialState() {
    return { inputText: '' }
  },
 
  handleChange(event) {
    this.setState({ inputText: event.target.value })
  },
 
  render() {
    const { inputText } = this.state
 
    return (
      <form>
        <Prompt
          message="Are you sure you want to leave before submitting the form?"
          when={inputText}
        />
        <input
          type="text"
          defaultValue={inputText}
          onChange={this.handleChange}
        />
      </form>
    )
  }
})
    return (
      <History>
        {({ history, action, location }) => (
          <p>The current URL is {location.pathname}{location.search}{location.hash}. You arrived at this URL via a {action} action.</p>
        )}
      </History>
      
      <BrowserHistory
  basename=""               // The base URL of the app (see below)
  forceRefresh={false}      // Set true to force full page refreshes
  keyLength={6}             // The length of location.key
  // A function to use to confirm navigation with the user (see below)
  getUserConfirmation={(message, callback) => callback(window.confirm(message))}
/>
 
<MemoryHistory
  initialEntries={[ '/' ]}  // The initial URLs in the history stack
  initialIndex={0}          // The starting index in the history stack
  keyLength={6}             // The length of location.key
  // A function to use to confirm navigation with the user. Required
  // if you return string prompts from transition hooks (see below)
  getUserConfirmation={null}
/>
 
<HashHistory
  basename=""               // The base URL of the app (see below)
  hashType="slash"          // The hash type to use (see below)
  // A function to use to confirm navigation with the user (see below)
  getUserConfirmation={(message, callback) => callback(window.confirm(message))}
/>

<History>
  {({ history, action, location }) => (
    <div>
      <p>The current URL is {location.pathname}{location.search}{location.hash}.</p>
      <p>You arrived at this URL via a {action} action.</p>
    </div>
  )}
</History>


    )
  }
  
})











































// <------------------------------>

// import React, { Component } from "react";


// function ChatMessage(){
// const ChatMessage = () => {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			username: ""
// 		};
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	const [handleChange, setHandleChange] = useState("");
// 	handleChange(e) {
// 		this.setState({ username: e.target.value });
// 	}
// 	handleSubmit(e) {
// 		e.preventDefault();
// 		this.props.onSubmit(this.state.username);
// 	}

// 	return (
// 		<div className="form-container">
// 			<h1>Let's Talk</h1>
// 			<form onSubmit={this.handleSubmit} className="form">
// 				<label htmlFor="email">What is your email?</label>
// 				<input type="email" name="username" onChange={this.handleChange} className="input" />
// 				<button className="submit">Submit</button>
// 			</form>
// 		</div>
// 	);
// };

// export default Signup;
