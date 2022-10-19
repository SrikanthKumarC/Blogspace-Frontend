import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
const URL = "http://localhost:9191/posts";

const Categories = () => {
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
    <>
      <Nav />
      <div className="mt-auto mt-5 text-center">
        <div className="text-2xl">Choose from categories</div>
        <p className="text-gray-500">
          Choose a category from below list to continue
        </p>
        <ul class="mx-auto w-4/6 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {categories.map((category, id) => {
            return (
              <li
                key={id}
                className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
              >
                {category}
              </li>
            );
          })}
          
        </ul>
      </div>
    </>
  );
};

export default Categories;
