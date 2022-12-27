import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const Home = () => {

  const [roomId, setRoomId] = useState('')

  const [userName, setuserName] = useState('')

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id)
    console.log(id);


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
          />
          <input
            type = 'text' 
            className='inputBox'
            placeholder= "Username" 
            onChange={(e)=> setuserName(e.target.value)}
            value = {userName}
          />
          <button className='btn joinBtn'>Join</button>
          <span className='CreateInfo'>
            If you dont have an invite then create &nbsp;
            <a 
              onClick={createNewRoom} 
              href=' '
              className='createNewBtn'>
              new room
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