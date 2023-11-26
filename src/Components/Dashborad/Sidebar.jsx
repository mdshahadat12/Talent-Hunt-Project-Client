import { useState } from 'react'
// Components
// import Logo from '../../Shared/Logo'
// import MenuItem from './MenuItem'
// import ToggleBtn from '../../Button/ToggleBtn'
// Icons
import { AiOutlineBars } from 'react-icons/ai'
import Menu from './Menu'
import { FaCheck, FaUsers } from 'react-icons/fa6'
import { GiBrasero } from "react-icons/gi";
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Role } from './Stats';

const Sidebar = () => {
  const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)

  //   For guest/host menu item toggle button
  const toggleHandler = event => {
    setToggle(event.target.checked)
  }
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='text-gray-800 flex  md:hidden'>
        <div>
          {/* <div className='block cursor-pointer p-4 font-bold'>
            <Logo />
          </div> */}
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 z-20 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed  overflow-x-hidden border-r-2 border-gray-200 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive ? '-translate-x-full ' : "bg-gray-200 md:bg-white"
        }  md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-gray-100 mx-auto'>
              <Link onClick={()=>toast.error("This is Home!")} to={"/"}>
            <div className="mb-0 flex">
                <img
                  src="https://i.ibb.co/MCVHxZ3/Talent-hunt.png"
                  className="h-8 mr-3"
                />
                <span className="self-center text-green-500 text-2xl font-extrabold whitespace-nowrap dark:text-white">
                Talent Hunt
                </span>
            </div>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* If a user is host */}
            {/* <ToggleBtn toggleHandler={toggleHandler} /> */}
            <nav>
              {
                Role == 'admin' && 
                <>
                <Menu
                icon={FaCheck}
                label='Admin Info'
                address='/dashboard'
              />
              <Menu
                icon={FaUsers}
                label='Manage User'
                address='manageuser'
              />
              <Menu
                icon={GiBrasero}
                label='Manage Contest'
                address='managecontest'
              />
                </>
              }
              {
                Role == 'user' && 
                <>
                <Menu
                icon={FaCheck}
                label='My Profile'
                address='/dashboard'
              />
              <Menu
                icon={FaUsers}
                label='My Participated Contest'
                address='manageuser'
              />
              <Menu
                icon={GiBrasero}
                label='My Winning Contest Page'
                address='managecontest'
              />
                </>
              }
              {
                Role == 'creator' && 
                <>
                <Menu
                icon={FaCheck}
                label='Your Contest Info'
                address='/dashboard'
              />
              <Menu
                icon={FaUsers}
                label='Add Contest Page'
                address='manageuser'
              />
              <Menu
                icon={GiBrasero}
                label='My Created Contest'
                address='managecontest'
              />
              <Menu
                icon={GiBrasero}
                label='Contest Submitted Page'
                address='managecontest'
              />
                </>
              }

              {/* Menu Items */}
            </nav>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default Sidebar