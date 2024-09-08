// import { useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { FiEdit } from "react-icons/fi";
// import { IoMdArrowRoundBack } from "react-icons/io";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // toast.configure();

// function TaskCard({ data }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   const [taskTitle, setTaskTitle] = useState("");
//   const [taskDescription, setTaskDescription] = useState("");
//   const [selectedTask, setSelectedTask] = useState(null);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedTask(null);
//   };

//   const handleAddTask = () => {
//     if (taskTitle.trim() === "" || taskDescription.trim() === "") {
//       toast.error("Task title and description cannot be empty!");
//       return;
//     }
//     const creationTime = new Date().toLocaleString();

//     setTasks((prevTasks) => [
//       ...prevTasks,
//       { title: taskTitle, description: taskDescription, time: creationTime },
//     ]);

//     toast.success("Task added successfully!");

//     setTaskTitle("");
//     setTaskDescription("");
//     closeModal();
//   };

//   const handleTaskClick = (task) => {
//     setSelectedTask(task);
//     openModal();
//   };


//     const handleEditTask = () => {

//       closeModal();
//     };
    


//   const handleDeleteTask = () => {
//     setTasks((prevTasks) => prevTasks.filter((task) => task !== selectedTask));
//     toast.success("Task deleted successfully!");
//     closeModal();
//   };

//   return (
//     <div className="bg-white p-2.5 h-[410px] min-h-[346px] w-[320px] text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-slate-100 shadow-md flex flex-col">
//       <h1 className="font-semibold w-full p-3 rounded-md text-center shadow-md bg-slate-100 h-14">
//         {data}
//       </h1>
//       <div className="overflow-y-auto h-[300px] custom-scrollbar">
//         {tasks.map((task, index) => (
//           <div
//             key={index}
//             onClick={() => handleTaskClick(task)}
//             className="p-2.5 h-[70px] min-h-[70px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-slate-300 cursor-pointer relative task my-2 text-sm font-medium"
//           >
//             <h1>{task.title}</h1>
//             <p className="text-xs text-gray-500 absolute right-2 top-2">
//               {task.time}
//             </p>
//             <p className="text-xs text-gray-500">{task.description}</p>
//           </div>
//         ))}
//       </div>
//       <h1
//         onClick={openModal}
//         className="bg-black flex rounded-md p-2 w-4/4 border-2 border-black text-slate-50 font-normal text-lg cursor-pointer hover:bg-white hover:border-2 hover:border-black hover:text-black transition-all"
//       >
//         <span className="p-1 mr-3">
//           <FaPlus />
//         </span>
//         Add New Task
//       </h1>

//       {isModalOpen && (
//         <div
//           className="relative z-10"
//           aria-labelledby="modal-title"
//           role="dialog"
//           aria-modal="true"
//         >
//           <div
//             className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
//             aria-hidden="true"
//           ></div>

//           <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//             <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//               <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg mx-4 sm:mx-auto">
//                 <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//                   <div className="sm:flex sm:items-start">
//                     <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
//                       {selectedTask ? (
//                         <>
//                           <h3
//                             className="text-lg font-semibold leading-6 text-gray-900"
//                             id="modal-title"
//                           >
//                             {selectedTask.title}
//                           </h3>
//                           <div className="mt-2">
//                             <p className="text-sm text-gray-500">
//                               {selectedTask.description}
//                             </p>
//                             <p className="text-sm text-gray-500 mt-2">
//                               Created at: {selectedTask.time}
//                             </p>
//                           </div>
//                         </>
//                       ) : (
//                         <>
//                           <h3
//                             className="text-lg font-semibold leading-6 text-gray-900"
//                             id="modal-title"
//                           >
//                             Add New Task
//                           </h3>
//                           <div className="mt-2">
//                             <input
//                               type="text"
//                               placeholder="Task Title"
//                               value={taskTitle}
//                               onChange={(e) => setTaskTitle(e.target.value)}
//                               className="w-full p-2 mt-2 border rounded-md"
//                             />
//                             <textarea
//                               placeholder="Task Description"
//                               value={taskDescription}
//                               onChange={(e) =>
//                                 setTaskDescription(e.target.value)
//                               }
//                               className="w-full p-2 mt-2 border rounded-md"
//                             />
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                   {selectedTask ? (
//                     <>
//                       <button
//                         type="button"
//                         onClick={handleDeleteTask}
//                         className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold border-2 text-white shadow-sm hover:bg-white hover:text-black hover:border-black sm:ml-3 sm:w-auto"
//                       >
//                         <MdDelete />
//                       </button>
//                       <button
//                         type="button"
//                         onClick={handleEditTask}
//                         className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold border-2 text-white shadow-sm hover:bg-white hover:text-black hover:border-black sm:ml-3 sm:w-auto"
//                       >
//                         <FiEdit />
//                       </button>
//                     </>
//                   ) : (
//                     <button
//                       type="button"
//                       onClick={handleAddTask}
//                       className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold border-2 text-white shadow-sm hover:bg-white hover:text-black hover:border-black sm:ml-3 sm:w-auto"
//                     >
//                       Add Task
//                     </button>
//                   )}
//                   <button
//                     type="button"
//                     onClick={closeModal}
//                     className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//                   >
//                     <IoMdArrowRoundBack />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TaskCard;


import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TaskCard({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
    setIsEditing(false);
  };

  const handleAddTask = () => {
    if (taskTitle.trim() === "" || taskDescription.trim() === "") {
      toast.error("Task title and description cannot be empty!");
      return;
    }
    const creationTime = new Date().toLocaleString();

    setTasks((prevTasks) => [
      ...prevTasks,
      { title: taskTitle, description: taskDescription, time: creationTime },
    ]);

    toast.success("Task added successfully!");

    setTaskTitle("");
    setTaskDescription("");
    closeModal();
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setTaskTitle(task.title);
    setTaskDescription(task.description);
    openModal();
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdateTask = () => {
    if (taskTitle.trim() === "" || taskDescription.trim() === "") {
      toast.error("Task title and description cannot be empty!");
      return;
    }

    if (tasks.some(task => task.title === taskTitle && task.description === taskDescription && task !== selectedTask)) {
      toast.error("Task already exists!");
      return;
    }

    setTasks((prevTasks) => 
      prevTasks.map(task =>
        task === selectedTask
          ? { ...task, title: taskTitle, description: taskDescription }
          : task
      )
    );

    toast.success("Task updated successfully!");
    closeModal();
  };

  const handleDeleteTask = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== selectedTask));
    toast.success("Task deleted successfully!");
    closeModal();
  };

  return (
    <div className="bg-white p-2.5 h-[410px] min-h-[346px] w-[320px] text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-slate-100 shadow-md flex flex-col">
      <h1 className="font-semibold w-full p-3 rounded-md text-center shadow-md bg-slate-100 h-14">
        {data}
      </h1>
      <div className="overflow-y-auto h-[300px] custom-scrollbar">
        {tasks.map((task, index) => (
          <div
            key={index}
            onClick={() => handleTaskClick(task)}
            className="p-2.5 h-[70px] min-h-[70px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-slate-300 cursor-pointer relative task my-2 text-sm font-medium"
          >
            <h1>{task.title}</h1>
            <p className="text-xs text-gray-500 absolute right-2 top-2">
              {task.time}
            </p>
            <p className="text-xs text-gray-500">{task.description}</p>
          </div>
        ))}
      </div>
      <h1
        onClick={openModal}
        className="bg-black flex rounded-md p-2 w-4/4 border-2 border-black text-slate-50 font-normal text-lg cursor-pointer hover:bg-white hover:border-2 hover:border-black hover:text-black transition-all"
      >
        <span className="p-1 mr-3">
          <FaPlus />
        </span>
        Add New Task
      </h1>

      {isModalOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg mx-4 sm:mx-auto">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      {selectedTask ? (
                        <>
                          <h3
                            className="text-lg font-semibold leading-6 text-gray-900"
                            id="modal-title"
                          >
                            {selectedTask.title}
                          </h3>
                          <div className="mt-2">
                            {isEditing ? (
                              <>
                                <input
                                  type="text"
                                  value={taskTitle}
                                  onChange={(e) => setTaskTitle(e.target.value)}
                                  className="w-full p-2 mt-2 border rounded-md"
                                />
                                <textarea
                                  value={taskDescription}
                                  onChange={(e) => setTaskDescription(e.target.value)}
                                  className="w-full p-2 mt-2 border rounded-md"
                                />
                              </>
                            ) : (
                              <>
                                <p className="text-sm text-gray-500">
                                  {taskDescription}
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                  Created at: {selectedTask.time}
                                </p>
                              </>
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          <h3
                            className="text-lg font-semibold leading-6 text-gray-900"
                            id="modal-title"
                          >
                            Add New Task
                          </h3>
                          <div className="mt-2">
                            <input
                              type="text"
                              placeholder="Task Title"
                              value={taskTitle}
                              onChange={(e) => setTaskTitle(e.target.value)}
                              className="w-full p-2 mt-2 border rounded-md"
                            />
                            <textarea
                              placeholder="Task Description"
                              value={taskDescription}
                              onChange={(e) =>
                                setTaskDescription(e.target.value)
                              }
                              className="w-full p-2 mt-2 border rounded-md"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  {selectedTask ? (
                    <>
                      {isEditing ? (
                        <>
                          <button
                            type="button"
                            onClick={handleUpdateTask}
                            className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold border-2 text-white shadow-sm hover:bg-white hover:text-black hover:border-black sm:ml-3 sm:w-auto"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={handleEditToggle}
                            className="inline-flex w-full justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold border-2 text-white shadow-sm hover:bg-gray-600 hover:text-white hover:border-gray-600 sm:ml-3 sm:w-auto"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={handleEditToggle}
                            className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold border-2 text-white shadow-sm hover:bg-white hover:text-black hover:border-black sm:ml-3 sm:w-auto"
                          >
                            <FiEdit />
                          </button>
                          <button
                            type="button"
                            onClick={handleDeleteTask}
                            className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold border-2 text-white shadow-sm hover:bg-white hover:text-black hover:border-black sm:ml-3 sm:w-auto"
                          >
                            <MdDelete />
                          </button>
                        </>
                      )}
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={handleAddTask}
                      className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold border-2 text-white shadow-sm hover:bg-white hover:text-black hover:border-black sm:ml-3 sm:w-auto"
                    >
                      Add Task
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    <IoMdArrowRoundBack />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskCard;


