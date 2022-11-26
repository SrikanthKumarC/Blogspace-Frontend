import Nav from "../components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Card from "../components/Card";
import usePosts from "../lib/hooks/usePosts";
import { useState } from "react";
import ResourceBox from "../components/studentComponents/ResourceBox";
import Footer from "../components/Footer";

const Student = () => {
  const { data: session, status } = useSession();
  const category = "";
  const [reload, setReload] = useState(false);
  const posts = usePosts(category, reload);
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
            Login
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <Nav student={true} />
      <div className="max-w-3xl m-auto flex mt-2 justify-between flex-wrap">
        <div className="left mb-2 md:mb-0 mx-4 shadow-md w-full md:w-fit bg-gray-100 p-4 rounded-md border-red-400">
          <h2>Your Profile</h2>
          {showProfileData()}
        </div>
        <div className="main max-h-72  overflow-auto grow border-red-400">
          <h2 className="py-3 rounded-t-sm uppercase tracking-wider text-white font-bold bg-slate-600 text-center">
            Answer
          </h2>
          {posts.map((post) => {
            return (
              <Card
                title={post.title}
                author={post.name}
                email={post.email}
                time={post.created}
                text={post.contents}
                id={post._id}
                edit={false}
                key={post._id}
              />
            );
          })}
        </div>
      </div>
        <div className="border-t-2 max-w-4xl m-auto mt-6 py-6 border-gray-200">
          <h2 className="text-center uppercase text-xl text-slate-600 font-bold">Resources</h2>
            <div className="flex">
                <ResourceBox />
            </div>
        </div>
        <Footer />
    </>
  );
};


export default Student;
