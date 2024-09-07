import { CgNotes } from "react-icons/cg";


function sidebar() {
  const data = [
    {
      title: "To Do",
      icon:<CgNotes/>
    },
    {
      title: "In Progress",
      icon:<CgNotes/>
    },
    {
      title: "Completed",
      icon:<CgNotes/>
    },
  ];
  return (
<>     <div className="">
        <h2 className="font-bold text-xl">Sahla Thasnim</h2>
        <h4 className="my-1 text-gray-400 mb-1">Sahlathasnim2002@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((items, i) => (
          <div className=" flex my-2 h-10 p-2 cursor-pointer hover:bg-slate-100 hover:rounded-xl hover:font-semibold" key={i}><span className="pt-1 px-3 transition-all">{items.icon}</span>{items.title}</div>
        ))}
      </div>
      <div>
        <button className="bg-black rounded-md p-2 w-full text-slate-50 font-semibold text-xl border-2 border-black cursor-pointer hover:bg-white hover:border-2 hover:border-black hover:text-black transition-all">Logout</button>
      </div>
      </> 
  );
}

export default sidebar;
