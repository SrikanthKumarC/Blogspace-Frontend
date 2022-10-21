import axios from "axios";
const URL = "http://localhost:9191/posts";

export const deletePost = (idx, handleReload) => {
  axios
    .delete(URL + `/${idx}`)
    .then(() => {
      console.log("deleted post");
      handleReload();
    })
    .catch((e) => console.log({ message: e }));
};
