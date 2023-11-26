import React, { useEffect, useState } from 'react'
// import { Calendar } from 'react-date-range'
// import SalesLineChart from './SalesLineChart'
// import { FaUserAlt, FaDollarSign } from 'react-icons/fa'
import { BsFillCartPlusFill, BsFillHouseDoorFill } from 'react-icons/bs'
import { FaUsers } from "react-icons/fa6";
// import { getAdminStat } from '../../../../api/utils'

const AdminStats = () => {
//   const [statData, setStatData] = useState({})
//   useEffect(() => {
//     getAdminStat().then(data => {
//       setStatData(data)
//     })
//   }, [])
  return (
    <>
    <div className='w-fit mx-auto'>
      <h1 className='text-center p-2 m-2 border-b border-black text-xl'>You are a Admin!😍</h1>
    </div>
    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <FaUsers className='text-3xl absolute ml-10 top-[25%]' />
            <div className='p-4 mr-10 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                Total Users
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                454
              </h4>
            </div>
          </div>
          </>
  )
}

export default AdminStats