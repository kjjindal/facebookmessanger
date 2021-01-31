import './App.css';
import React,{useEffect, useState} from 'react';
import { Input, InputLabel} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { FormControl} from '@material-ui/core';
import Message from './Message';
import {db} from './Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import {IconButton} from '@material-ui/core';

//useState is used as a variable 
//useEffecr is used as conditional code
function App() {

  const [input,setinput]=useState('');
  const [message,setmessage]=useState([]);
  const [username,setusername]=useState('');

  useEffect(()=>{
    db.collection('messengercollection').orderBy('timestamp','asc').onSnapshot(
    

      snapshot=>{
       
        setmessage(snapshot.docs.map(val=>
          
         ({id:val.id,message:val.data()})
        ))

      }
    )


  },[])

  useEffect(()=>{

    setusername(prompt('Enter Your name here for just Simple information'));


  },[])   
  // here first part is function 
  // second part is condition 
  // if condition array is empty means run once  the function inner code on every component load

  function addmessage(e){
    e.preventDefault();
    db.collection('messengercollection').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    // setmessage([...message,{username:username,message:input}])
    setinput('');

  }
  return (
    <>
<div className="App">
   <img src='https://pngimg.com/uploads/twitter/twitter_PNG35.png' alt="Fmessenger" />
    <h1> Facebook Messenger App   </h1>
    <h2> Welcome {username}  </h2>

    <form className="app__form">
    <FormControl className="app__formcontrol">
  <InputLabel htmlFor="my-input">Enter a message ...</InputLabel>
  <Input className="app__input" onChange={e=>setinput(e.target.value)} value={input}  />
  <IconButton className="app__iconbutton" onClick={addmessage} type="submit"  disabled={!input} >
<SendIcon   />
  </IconButton>
  

</FormControl>
    </form>

    <FlipMove >

    {
      message.map(({id,message})=>{
         return  <Message username={username} message={message}  key={id} />
      })
    }

    </FlipMove>
   
    </div>
    </>
    
  );
}

export default App;

