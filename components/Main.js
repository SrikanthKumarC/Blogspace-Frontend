import Card from "./Card";
import Editor from "./Editor";
import { useEffect, useState } from "react";
const URL = "http://localhost:9191/posts";
import usePosts from "../lib/hooks/usePosts";

const Main = ({ category = "", editor = true }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState(null);
  const [isEditing, setisEditing] = useState(false);
  const [reload, setReload] = useState(false);
  
  const handleReload = () => {  
    setReload(!reload);
    console.log('inside handleReload')
  };
  const posts = usePosts(category, reload);



  const getPostDetails = (t, msg, id) => {
    setTitle(t);
    setMessage(msg);
    setId(id);
    setisEditing(true);
  };

  return (
    <div>
      {editor && (
        <Editor
          tit={title}
          message={message}
          id={id}
          handleReload={handleReload}
          editing={isEditing}
        />
      )}
      {posts.map((post) => {
        return (
          <Card
            title={post.title}
            author={post.name}
            email={post.email}
            time={post.created}
            text={post.contents}
            getPostDetails={getPostDetails}
            handleReload={handleReload}
            id={post._id}
            key={post._id}
          />
        );
      })}
    </div>
  );
};

export default Main;
