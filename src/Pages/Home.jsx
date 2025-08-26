import React, { useState } from 'react'
import LeftSide from '../components/LeftSide'
import ChatContainer from '../components/ChatContainer'
import RightSide from '../components/RightSide'

const Home = () => {
  const [selectedUser , setSelectedUser]=useState(false)
  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
        <div className={`backdrop-blur-2xl grid grid-cols-1 border-2 rounded-2xl overflow-hidden 
        h-[100%] relative border-gray-600 ${selectedUser ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]" : "md:grid-cols-2"}`}>
          <LeftSide/>
          <ChatContainer/>
          <RightSide/>
        </div>
    </div>
  )
}

export default Home