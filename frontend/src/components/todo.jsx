import Footer from './Footer'
import Header from './Header'
import Sidebar from './Home/sidebar'
import TaskCard from './Home/taskCard'
import { IoSearchSharp } from "react-icons/io5";

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
    <div className='flex h-[78vh] gap-3 mt-3 mx-10'>
    <div className='shadow-md border rounded-xl w-3/12 p-4 mr-4 flex flex-col text-black justify-between mt-2'>
    <Sidebar/>
    </div>
    <div className='flex flex-col'>
    <div className="px-2">
  <div className="flex justify-between h-12 border-2 border-slate-200 bg-white rounded-md my-4">
    <div className="flex w-full md:w-auto">
      <span className="ml-3 mt-3 text-xl text-slate-400"><IoSearchSharp /></span>
      <input type="text" className="ml-3 w-full md:w-96 outline-none" placeholder="Search..." />
    </div>
    <div className="flex items-center">
      <h1 className="ml-3 text-md text-slate-400">Sort:</h1>
      <select className="mx-3 text-md text-slate-400">
        <option value="">Recent</option>
        <option value="">Sort by name</option>
        <option value="">Sort by Date</option>
      </select>
    </div>
  </div>
</div>
    <div className=' bg-white h-screen w-12/12 p-2 flex gap-10'>
    {head?.map((item,i)=>(
    <TaskCard key={i} data={item.title}/>
    ))}
    </div>
    </div>

</div>
<Footer/>
</div>
  )
  
}

export default todo