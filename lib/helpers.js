import axios from "axios";
const URL = "https://cobalt-blue-pike-vest.cyclic.app/posts";

export const deletePost = (idx, handleReload) => {
  axios
    .delete(URL + `/${idx}`)
    .then(() => {
      console.log("deleted post");
      handleReload();
    })
    .catch((e) => console.log({ message: e }));
};
