import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";


const Teacher = () => {
    const { data: session, status } = useSession();
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
               Login - ACCESS TO TEACHER ONLY
             </button>
           </div>
         );
       }
     };
   
    return (
        <div>
            <Nav teacher={true} />
            <div className="left mb-2 md:mb-0 mx-4 shadow-md w-full md:w-fit bg-gray-100 p-4 rounded-md border-red-400">
          <h2>Your Profile</h2>
          {showProfileData()}
        </div>
            <Footer />
        </div>
    );
}

export default Teacher;