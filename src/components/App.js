
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  function submitForm(e) {
    e.preventDefault()
    if (!(username && password)) {
      setErrorMessage('Both username and password are required.')
    }
    else setErrorMessage('')
  }
  return (
    <div>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <p id="errorMessage">{errorMessage}</p>
          <button onClick={submitForm}>Login</button>
        </form>
    </div>
  )
}

export default App
