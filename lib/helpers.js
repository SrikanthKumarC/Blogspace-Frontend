import axios from "axios";
const URL = process.env.NEXT_PUBLIC_POST_URL;

export const deletePost = (idx, handleReload) => {
  axios
    .delete(URL + `/${idx}`)
    .then(() => {
      console.log("deleted post");
      handleReload();
    })
    .catch((e) => console.log({ message: e }));
};
