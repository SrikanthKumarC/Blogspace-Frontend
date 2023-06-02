import Card from "./Card";
import Editor from "./Editor";
import { useEffect, useState } from "react";
const URL = process.env.NEXT_PUBLIC_POST_URL;
console.log(URL);
import usePosts from "../lib/hooks/usePosts";

const Main = ({ category = "", editor = true }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState(null);
  const [isEditing, setisEditing] = useState(false);
  const [reload, setReload] = useState(false);
  const [categoryy, setCategoryy] = useState("");
  const handleReload = () => {
    setReload(!reload);
  };
  const posts = usePosts(category, reload);

  const getPostDetails = (t, msg, id, category) => {
    setTitle(t);
    setMessage(msg);
    setId(id);
    setisEditing(true);
    setCategoryy(category);
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
          categoryy={categoryy}
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
            category={post.category}
            key={post._id}
          />
        );
      })}
    </div>
  );
};

export default Main;
