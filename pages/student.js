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
