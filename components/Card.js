import { useSession } from "next-auth/react";
import moment from "moment/moment";

const Card = ({
  title = "Noteworthy technology acquisitions 2021",
  author = "srikanth",
  email = "none@gmail.com",
  text = "Here are the biggest enterprise",
  time = "12 Oct 2012",
  id,
  getPostDetails,
  deletePost,
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
          <>
            <button
              onClick={() => getPostDetails(title, text, id)}
              className="dark:text-white"
            >
              Edit
            </button>
            <button onClick={() => deletePost(id)} className="dark:text-white ml-2">Delete</button>
          </>
        );
      }
    }
  };
  return (
    <div className="block p-6  bg-white  border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex justify-between	">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>
      <div className="text-gray-900 dark:text-white">
        by {author}. {parseDate()}
      </div>
      <div className="font-normal text-gray-700 dark:text-gray-400">{text}</div>
      {showEdit(title, text)}
    </div>
  );
};

export default Card;
