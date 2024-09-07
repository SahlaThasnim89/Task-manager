import React, { useState } from 'react'
import Button from './Button'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Home/sidebar'
import TaskCard from './Home/taskCard'
import SearchBar from './searchBar'

function todo() {

    
    const head=[{
        title:"ToDo"
    },
    {
        title:"In Progress"
    },
    {
        title:"Completed"
    },
]

  return (
    <div>
        <Header/>
    <div className='flex h-[78vh] gap-3 mt-3 mx-20'>
    <div className='shadow-md border rounded-xl w-3/12 p-4 mx-4 flex flex-col text-black justify-between mt-2'>
    <Sidebar/>
    </div>
    <div className='flex flex-col'>
        <SearchBar/>
    <div className=' bg-white h-screen w-12/12 p-2 flex gap-10'>
    {head?.map((item,i)=>(
    <TaskCard key={i} data={item.title}/>
    ))}
    </div>
    <Button/>
    </div>

</div>
<Footer/>
</div>
  )
  
}

export default todo