import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from 'react-toastify';


function Button() {
  const [items, setItems] = useState([]);
  const [task, setTask] = useState(''); 

  const validateTask = (task) => {
    if (task.trim() === '') {
      toast.error('Task cannot be empty');
      return false;
    }
    return true;
  };

  const handleAddTask = () => {
    if (validateTask(task)) { 
      setItems([...items, task]); 
      setTask(''); 
    }
  };

  return (
    <div className="flex justify-end pr-2">
      <input
        type="text"
        className="mx-3 pl-4 w-full outline-none border-2 border-slate-100 rounded-md"
        placeholder="Add a new task here..."
        value={task}
        onChange={(e)=>setTask(e.target.value)}
      />
      <h1
        onClick={handleAddTask}
        className="bg-black flex rounded-md p-2 w-1/4 border-2 border-black text-slate-50 font-normal text-lg cursor-pointer hover:bg-white hover:border-2 hover:border-black hover:text-black transition-all"
      >
        <span className="p-1 mr-3">
          <FaPlus />
        </span>
        Add New Task
      </h1>
    </div>
  );
}

export default Button;
