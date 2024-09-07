import React from 'react'
import TaskColumn from './taskColumn'



function taskCard({data}) {
  return (
    <div className="bg-white
    p-2.5
    h-[360px]
    min-h-[346px]
    w-[280px]
    text-left
    rounded-xl
    hover:ring-2
    hover:ring-inset
    hover:ring-slate-100
    shadow-md flex flex-col">
        <h1 className='font-semibold w-full p-3 rounded-md text-center shadow-md bg-slate-100 h-14'>{data}</h1>
        <TaskColumn/>
    </div>
  )
}

export default taskCard
