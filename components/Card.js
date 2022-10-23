import { useSession } from "next-auth/react";
import moment from "moment/moment";
import { deletePost } from "../lib/helpers";
import {AiFillEdit} from 'react-icons/ai'
import {MdOutlineDeleteForever} from 'react-icons/md'


const Card = ({
  title = "Noteworthy technology acquisitions 2021",
  author = "srikanth",
  email = "none@gmail.com",
  text = "Here are the biggest enterprise",
  time = "12 Oct 2012",
  id,
  getPostDetails,
  handleReload
}) => {
  const { data: session, status } = useSession();
  const parseDate = () => {
    const timeA = moment(time);
    const timeB = moment(new Date());
    return <p className="text-slate-400 inline">{timeA.from(timeB)}</p>;
  };

  const showEdit = () => {
    if (status === "authenticated") {
      if (session.user.email === email) {
        return (
          <div className="flex justify-between  mt-2 pt-2">
            <button
              onClick={() => getPostDetails(title, text, id)}
              className="dark:text-slate-300 text-lg text-slate-700 hover:text-white transition-all"
            >
              <AiFillEdit />
            </button>
            <button
              onClick={() => deletePost(id, handleReload)}
              className="text-red-400 text-xl ml-2"
            >
              <MdOutlineDeleteForever />
            </button>
          </div>
        );
      }
    }
  };
  return (
    <div className="block p-6  bg-white  border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex justify-between	">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>
      <div className="text-slate-400 dark:text-white mb-2">
        <p className="text-slate-400 inline-block">{author}</p> · {parseDate()}
      </div>
      <div className="font-normal  dark:text-white">{text}</div>
      {showEdit(title, text)}
    </div>
  );
};

export default Card;
