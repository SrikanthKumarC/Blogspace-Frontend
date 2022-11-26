import Nav from "../components/Nav";
import { MdOutlineDownloadDone } from "react-icons/md";
const URL = "http://localhost:9191/posts";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";
const importJodit = () => import("jodit-react");
import { useSession } from "next-auth/react";

const JoditEditor = dynamic(importJodit, {
  ssr: false,
});

const Post = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { data: session, status } = useSession();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(null);
  
  const config = useMemo(() => {
    return {
      readonly: false, // all options from https://xdsoft.net/jodit/doc/,
      placeholder: "Start typings...",
    };
  }, []);


  const postData = () => {
    if (status === "authenticated") {
      if (title === null || title === "" || content === null || content === "")
        return;
      axios
        .post(URL, {
          title,
          contents: content,
          name: session.user.name,
          email: session.user.email,
          category: category ? category : 'general',
        })
        .then((res) => {
          console.log({ message: res });
          notify();
          handleReload();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };


  const notify = () =>
    toast(" Post Created", {
      icon: <MdOutlineDownloadDone />,
      iconTheme: {
        primary: "#000",
        secondary: "#0f0f",
      },
    });
  return (
    <>
      <Nav />
      <div className="m-auto mt-5 max-w-lg p-2">
        <h2 className="capitalize text-lg font-bold mb-2 border-b-2 border-slate-300">
          Create your post
        </h2>
        <label htmlFor="title" className="text-sm capitalize">
          Enter title
        </label>
        <input
          className="w-full p-3 my-3 mt-0 border-black-700 border-2 rounded-md"
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="My First Post"
        />
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => {}}
        />
        <button
          onClick={postData}
          className="bg-blue-600 p-3 mt-3 rounded-sm text-white"
        >
          Create Post
        </button>
      </div>
      <Toaster />
    </>
  );
};

export default Post;
