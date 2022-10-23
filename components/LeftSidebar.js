const URL = "http://localhost:9191/posts";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);

  const getFlatCategories = (data) => {
    const listOfCategories = [];
    data.map((post) => {
      listOfCategories = [...listOfCategories, post.category];
    });
    setCategories(Array.from(new Set(listOfCategories)));
    console.log("listofcats", listOfCategories);
  };
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        getFlatCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mb-2">
      <h3 className="text-slate-700 py-1 rounded-r-lg px-3 text-2xl"><Link href={'/category'}>Spaces</Link></h3>
      <ul className="flex flex-wrap ease-in list-none  rounded max-w-sm ml-2 ">
        {/* <li className="px-2 m-2 my-1 py-1 bg-gray-400 rounded-full">DSA</li> */}
        {categories.map((category, id) => {
          return (
            <li
              key={id}
              className="px-2 m-2 my-1 py-1 rounded-[12px] border border-gray-400"
            >
              <Link href={`/category/${category}`}>{category}</Link>
            </li>
          );
        })}
        {/* <li className="px-2 m-2 my-1 py-1 bg-blue-400 rounded-full">NLP</li>
        <li className="m-2 px-2 my-1 py-1 bg-yellow-400 rounded-full">CSE</li> */}
      </ul>
    </div>
  );
};

export default LeftSidebar;
