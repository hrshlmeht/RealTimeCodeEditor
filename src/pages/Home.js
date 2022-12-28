import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate =useNavigate();
  const [roomId, setRoomId] = useState('')

  const [userName, setuserName] = useState('')

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id)
    toast.success('Created a new room')

  };


  const joinRoom = () => {
    if (!roomId || !userName){
      toast.error('Room Id and username is required');
      return 
    }

    //redirect
    navigate(`/Editor/${roomId}`, {
      state :{
         userName,
      }
    }) 
  }

  const handleInputEnter = (e) => {
      console.log('Event' ,e.code);
      if (e.code === 'Enter') {
        joinRoom();
      } 

  }
  return (
    <div className='homePageWrapper'>
      <div className='formPageWrapper'>
        <img src='/code-sync.png' alt = 'code-sync-logo'/>
        <h4 className='mainLabel'>Paste invitation room ID</h4>
        <div className='inputGroup'>
          <input
            type = 'text' 
            className='inputBox'
            placeholder= "Room ID"
            onChange={(e)=> setRoomId(e.target.value)}
            value = {roomId} 
            onKeyUp = {handleInputEnter}

          />
          <input
            type = 'text' 
            className='inputBox'
            placeholder= "Username" 
            onChange={(e)=> setuserName(e.target.value)}
            value = {userName}
          />
          <button className='btn joinBtn' onClick = {joinRoom}> Join</button>
          <span className='CreateInfo'>
            Dont have an invite? &nbsp;
            <a 
              onClick={createNewRoom} 
              href=' '
              className='createNewBtn'>
              Click here to create a new room
            </a>
          </span>  
        </div>
      </div>
      <footer>
        <h4>Built as a try{' '} 
          <a href='https://github.com/hrshlmeht'>by Harshal</a>
        </h4>
      </footer>
    </div>
  )
}

export default Home