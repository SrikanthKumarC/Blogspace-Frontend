import axios from "axios";
import { useState } from "react";
import { useSession } from "next-auth/react";
const URL = process.env.NEXT_PUBLIC_POST_URL;
import toast, { Toaster } from 'react-hot-toast';

const notify = (text = 'comment created') => toast(text);


const CommentInput = ({id}) => {
  const { data: session, status } = useSession();
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "authenticated") {
      const res = await axios.post(`${URL}/comment/${id}/comment`, {
        comment,
        email: session.user.email,
        name: session.user.name,
        image: session.user.image,
      });
      notify();
      console.log(res);
    }else {
      notify('please login to comment');
    }
  };
  
  return (
    <div className="flex  items-center justify-center mb-1">
      <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
            Add a new reply
          </h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Type Your reply..."
              required
            ></textarea>
          </div>
          <div className="w-full flex items-start md:w-full px-3">
            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
              <svg
                fill="none"
                className="w-5 h-5 text-gray-600 mr-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs md:text-sm pt-px">be nice.</p>
            </div>
            <div className="-mr-1">
              <input
                onClick={handleSubmit}
                type="submit"
                className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                value="Post Reply"
              />
            </div>
          </div>
        </div>
        <Toaster />
      </form>
    </div>
  );
};


export default CommentInput;
