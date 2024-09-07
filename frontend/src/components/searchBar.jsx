import { IoSearchSharp } from "react-icons/io5";


function searchBar() {
  return (
    <div>
              <div className='flex justify-between h-12 ml-1 border-2 border-slate-200 bg-white rounded-md mr-2 my-4'>
        <div className="flex">
        <span className="ml-3 mt-3 text-xl text-slate-400"><IoSearchSharp/></span>
        <input type="text" className='ml-3 w-96 outline-none' placeholder='Search...'/>
        </div>
        <div className="flex">
        <h1 className="ml-3 text-md text-slate-400 text-md text-center mt-2">Sort:</h1>
        <select className="mx-3 text-md text-slate-400 text-sm mt-" name="" id="">
            <option value="">Recent</option>
            <option value="">Sort by name</option>
            <option value="">Sort by Date</option>

        </select>
        </div>
      </div>
    </div>
  )
}

export default searchBar