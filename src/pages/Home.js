import React from 'react'

const Home = () => {
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
          />
          <input
            type = 'text' 
            className='inputBox'
            placeholder= "Username" 
          />
          <button className='btn joinBtn'>Join</button>
          <span className='CreateInfo'>
            If you dont have an invite then create &nbsp;
            <a href=' 'className='createNewBtn'>new room</a>
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