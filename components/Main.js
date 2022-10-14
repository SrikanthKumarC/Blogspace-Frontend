import Card from "./Card";
import Editor from "./Editor";
import axios from "axios";
import { useEffect, useState } from "react";
const URL = "http://localhost:9191/posts";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState(null);
  const [isEditing, setisEditing] = useState(false);
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(!reload);
  };

  const deletePost = (idx) => {
    axios
      .delete(URL + `/${idx}`)
      .then(() => {
        console.log("deleted post");
        handleReload();
      })
      .catch((e) => console.log({ message: e }));
  };

  const getPostDetails = (t, msg, id) => {
    setTitle(t);
    setMessage(msg);
    setId(id);
    setisEditing(true);
  };
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setPosts(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [reload]);
  return (
    <div>
      <Editor
        tit={title}
        message={message}
        id={id}
        handleReload={handleReload}
        editing={isEditing}
      />
      {posts.map((post) => {
        return (
          <Card
            title={post.title}
            author={post.name}
            email={post.email}
            time={post.created}
            text={post.contents}
            getPostDetails={getPostDetails}
            deletePost={deletePost}
            id={post._id}
            key={post._id}
          />
        );
      })}
    </div>
  );
};

export default Main;
