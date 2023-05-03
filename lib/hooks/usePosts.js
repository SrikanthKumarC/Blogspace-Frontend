import { useState, useEffect } from "react";
import axios from "axios";
const URL = process.env.NEXT_PUBLIC_POST_URL;
const usePosts = (category, reload) => {
  const isCategoryPage = category ? "category" : "";
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(URL + `/${isCategoryPage}/` + category)
      .then((res) => {
        setPosts(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [isCategoryPage, category, reload]);
  //reload is in the dependency array because to rerender the main component.

  return posts;
};
export default usePosts;
