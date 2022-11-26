import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import usePosts from "../lib/hooks/usePosts";
import axios from "axios";
import { deletePost } from "../lib/helpers";
import { useState } from "react";


const Teacher = () => {
  const { data: session, status } = useSession();
  const posts = usePosts('', '');
  const [reload, setRelaod] = useState(false);
  const handleReload =()  => {
    setRelaod(!reload)
  }
  const showProfileData = () => {
    if (status === "authenticated") {
      return (
        <div className="max-w-xl flex flex-col items-center justify-center">
          <Image
            src={session.user.image}
            alt="profile"
            width={32}
            height={32}
            className="rounded-full w-32 h-32"
          />
          <h1 className="text-2xl font-bold">{session.user.name}</h1>
          <p className="text-xl">{session.user.email}</p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div className="max-w-xl flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">You are not logged in</h1>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => signIn()}
          >
            Login - Access to HITAM Teachers only
          </button>
        </div>
      );
    }
  };
  let showTeacher = 'hidden';
  if (status === "authenticated") {
     showTeacher = typeof(session.user.email[0] == 'number' || session.user.email == '19e51a0524@hitam.org') ? 'block' : 'hidden';
  }
  return (
    <div >
      <Nav teacher={true}  />
      <div classNameName="left mb-2 md:mb-0 mx-4 shadow-md w-full md:w-fit bg-gray-100 p-4 rounded-md border-red-400">
        <h2>Your Profile</h2>
        {showProfileData()}
      </div>
      <div className={showTeacher}>
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Student name
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Roll Number
                </th>
                <th scope="col" className="py-3 px-6">
                   Delete 
                   </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                return (
                  <tr key={post._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {post.name}
                    </th>
                    <td className="py-4 px-6">{post.email}</td>
                    <td className="py-4 px-6">{post.email.substring(0, post.email.indexOf("@"))}</td>
                    <td className="py-4 px-6" onClick={() => deletePost(post._id, handleReload)}>Delete</td>
                  </tr>
                );
              })}
              
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Teacher;
