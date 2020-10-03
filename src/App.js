import React, { useState, useEffect } from 'react';
import './App.css';
import { Input, Button, } from '@material-ui/core';
import Messages from './Components/Messages'
import db from './Components/firebase';
import firebase from "firebase"
function App() {
  const [input, setinput] = useState('')
  const [message, setMessage] = useState([{ username: 'rahul', message: 'hi' }])
  const [username, setusername] = useState('')
  const submitHandler = (event) => {
    event.preventDefault()
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessage([...message, { username: username, message: input }])
    setinput('')
  }

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  useEffect(() => {
    setusername(prompt('Please enter Your name'))
  }, [])
  return (
    <div className="App">
      <h1>hello world</h1>
      <form >

        <Input value={input} onChange={e => setinput(e.target.value)} placeholder="Type a message" />

        <Button disabled={!input} type='submit' onClick={submitHandler} variant="contained" color="primary" >Click</Button>
      </form>
      {
        message.map(mess => (
          <Messages username={username} message={mess} />
        ))
      }
    </div>
  );
}

export default App;
