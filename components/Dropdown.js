import { useState } from "react";

const Dropdown = ({ handleCategory }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const listclass = dropdownOpen ? "" : "hidden";
  const categories = ["DSA", "ML", "AI", "WebDev"];
  const [cats, setCats] = useState(null);

  
  return (
    <>
      <button
        data-dropdown-toggle="dropdown"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-0.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
         {cats ? cats : 'select category'} {" "}
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={`${listclass} z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          {categories.map((category, id) => {
            return (
              <li
                key={id}
                onClick={() => {
                  handleCategory(category);
                  setCats(category)
                  setDropdownOpen(!dropdownOpen)
                }}
              >
                <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
