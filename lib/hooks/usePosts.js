import { useState, useEffect } from "react";
import axios from "axios";
const URL = "http://localhost:9191/posts";
const usePosts = (category, reload) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(URL + "/" + category)
      .then((res) => {
        setPosts(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [category, reload]); 
  //reload is in the dependency array because to rerender the main component.

  return posts;
};
export default usePosts;