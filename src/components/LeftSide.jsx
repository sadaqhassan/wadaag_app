import React from 'react'
import assets, { userDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const LeftSide = ({selectedUser , setSelectedUser}) => {
    const navigate = useNavigate()
  return (
    <div className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${selectedUser ? 'max-md:hidden' :''}`}>
    <div className='pb-5'>
        <div className='flex justify-between items-center'>
            <img src={assets.logo} className='max-w-40' alt="logo" />
            <div className='relative py-2 group'>
            <img src={assets.menu_icon} className='max-h-5  cursor-pointer' alt="menu" />
              <div className=' 
            absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-100 hidden group-hover:block'>
                <p onClick={()=>{navigate('/profile')}} className='cursor-pointer text-sm'>Edit profile</p>
                <hr className='my-2 border-t border-gray-500'/>
                <p className='cursor-pointer text-sm'>Logout</p>
            </div>
            </div>
          
        </div>

        <div className='bg-[#282142] rounded-full flex items-center gap-2 py-3 px-4 my-5'>
            <img src={assets.search_icon} alt="search" className='w-3' />
            <input type="text" className='bg-transparent border-none outline-none text-white text-xs place-holder-[#c8c8c8] flex-1' 
            placeholder='search user...'/>
        </div>


        <div className='flex flex-col space-y-4'>
            {userDummyData.map((user,index)=>(
                <div key={index} className='flex items-center space-x-4'>
                <img src={user ?.profilePic || assets.avatar_icon} alt="" className='rounded-full w-[35px] aspect-[1/1]'/>
                <div className='flex flex-col leading-5'>
                    <p>{user.fullName}</p>
                    {index >3 ?
                    <span className='text-green-500 text-xs'>Online</span>:
                    <span className='text-neutral-400 text-xs'>Offline</span>
                    }
                </div>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default LeftSide