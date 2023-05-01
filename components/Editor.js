const URL = "https://cobalt-blue-pike-vest.cyclic.app/posts";
import {RiAttachment2} from 'react-icons/ri'
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
import Upload from "./Upload";


const Editor = ({ tit, message, id, editing, handleReload }) => {
  const { data: session, status } = useSession();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState(null);
  const [upload, setUpload] = useState(true);

  const handleUpload = () => {
    setUpload(!upload);
  }

  //show sumbit or edit button
  const showEditOrSubmit = () => {
    if (editing) {
      return (
        <button
          onClick={() => {
            patchData();
          }}
          className="bg-blue-400 px-3 rounded-md text-white"
        >
          Edit
        </button>
      );
    } else {
      return (
        <button
          onClick={postData}
          className="bg-blue-600 mt-2 px-3 rounded-md text-white"
        >
          Create Post
        </button>
      );
    }
  };

  const handleCategory = (cat) => {
    setCategory(cat);
  };

  useEffect(() => {
    setText(message);
    setTitle(tit);
  }, [tit, message, category]);

  const postData = () => {
    if (status === "authenticated") {
      if (title === null || title === "" || text === null || text === "")
        return;
      axios
        .post(URL, {
          title,
          contents: text,
          name: session.user.name,
          email: session.user.email,
          category: category ? category : 'general',
        })
        .then((res) => {
          console.log({ message: res });
          handleReload();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const patchData = () => {
    if (status === "authenticated") {
      if (title === null || title === "" || text === null || text === "")
        return;
      axios
        .patch(URL + `/${id}`, {
          title,
          contents: text,
          name: session.user.name,
          email: session.user.email,
          category: category,
        })
        .then((res) => {
          console.log({ message: res });
          handleReload();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="block p-6  bg-white  border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg rounded-br-none rounded-bl-none">
      <div className="flex justify-between	">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Create New 🗒️
        </h5>
      </div>
      <input
        className="mb-2 px-3 shadow appearance-none border rounded py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={tit ? tit : "Enter Title"}
      ></input>
      <p className="font-normal text-gray-700 dark:text-gray-400 ">
        <textarea
          className="p-2 text-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={text ? text : "Enter your message"}
        ></textarea>
      </p>
      {showEditOrSubmit()}
      <Dropdown handleCategory={handleCategory} />
      {/* <div onClick={handleUpload} className='cursor-pointer text-black flex flex-wrap dark:text-white'><RiAttachment2 fill='#000' className='mt-1 dark:fill-black'/> Attach</div>
      <Upload hidden={upload} /> */}
    </div>
  );
};

export default Editor;
