import axios from "axios";
import { useEffect, useState } from "react";
const URL = process.env.NEXT_PUBLIC_POST_URL;
import Image from "next/image";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/comment/${id}/comments`).then((res) => {
      setComments(res.data);
    });
  }, [id]);

  const handleDelete = (commentId) => {
    axios.delete(`${URL}/comment/${id}/comment/${commentId}`).then((res) => {
      console.log(res);
      setComments(comments.filter((comment) => comment._id !== commentId));
    });
  };

  if (comments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-500">No Comments Yet</h1>
      </div>
    );
  } else {
    return (
      <ul className="dark:text-white border rounded-md p-2 dark:border-white border-slate-700">
        {comments.map((comment) => (
          <li key={comment._id}>
            <div className="flex justify-between ">
              <p>
                <span className="font-bold">{comment.name}</span>
              </p>
              <Image
                className="rounded-full"
                src={comment.image}
                width={30}
                height={30}
                alt={comment.name}
              />
            </div>
            <span>
              <p className="text-slate-400 text-sm">
                {new Date(comment.date).toDateString()}
              </p>
            </span>
            <div>
              <p>{comment.comment}</p>
            </div>
            <button onClick={() => handleDelete(comment._id)} className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100">
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
};

export default Comments;
