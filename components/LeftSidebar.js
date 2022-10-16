const LeftSidebar = () => {
  return (
    <div>
      <h3 className="text-slate-700 py-1 rounded-r-lg px-3 text-2xl">Spaces</h3>
      <ul
        className="flex flex-wrap ease-in list-none px-3 py-2 p-5 rounded max-w-sm ml-2 "
      >
        <li className="px-2 m-2 my-1 py-1 bg-gray-400 rounded-full">DSA</li>
        <li className="px-2 m-2 my-1 py-1 bg-indigo-400 rounded-full">ML</li>
        <li className="px-2 m-2 my-1 py-1 bg-blue-400 rounded-full">NLP</li>
        <li className="m-2 px-2 my-1 py-1 bg-yellow-400 rounded-full">CSE</li>
      </ul>
    </div>
  );
};
  
export default LeftSidebar;
