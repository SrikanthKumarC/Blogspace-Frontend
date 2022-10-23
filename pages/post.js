import Nav from "../components/Nav";
import FullEditor from '../components/FullEditor'
import { MdOutlineDownloadDone } from 'react-icons/md';
const URL = "http://localhost:9191/posts";

import toast, { Toaster } from 'react-hot-toast';
const Post = () => {
 

  const notify = () => toast(' Post Created', {
    icon: <MdOutlineDownloadDone />, 
    iconTheme: {
      primary: '#000',
      secondary: '#0f0f',
    },
  });
  return (
    <>
    <Nav />
      <div className="m-auto mt-5 max-w-lg p-2">
      <h2 className="capitalize text-lg font-bold mb-2 border-b-2 border-slate-300">Create your post</h2>
        <label htmlFor="title" className="text-sm capitalize">Enter title</label>
        <input className="w-full p-3 my-3 mt-0 border-black-700 border-2 rounded-md" type="text" name="title" id="title" placeholder="My First Post"/>
        <FullEditor />
        <button onClick={notify} className="bg-blue-600 p-3 mt-3 rounded-sm text-white">Create Post</button>
      </div>
      <Toaster />
    </>
  );
};

export default Post;
