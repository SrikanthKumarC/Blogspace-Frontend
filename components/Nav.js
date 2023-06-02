import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const notify = () =>
  toast("ACCESS DENIED: HITAM USERS ONLY", {
    icon: "",
    iconTheme: {
      primary: "#000",
      secondary: "#0f0f",
    },
  });
  
const Nav = ({ home = false, student = false, teacher = false }) => {
  const [userToggle, setUserToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const { data: session, status } = useSession();
  console.log(session);

  useEffect(() => {
    if (status !== "authenticated") {
      setUserToggle(true);
    }
  }, [status]);

  const hid = menuToggle ? "" : "hidden";

  const active =
    "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
  const notActive =
    "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  const showUserDetails = () => {
    if (userToggle) {
      const regex = "^[A-Za-z0-9._%+-]+@hitam.org$";
      const pattern = new RegExp(regex);
      if (status === "authenticated") {
        if (!pattern.test(session.user.email)) {
          notify();
          signOut();
          return;
        }
        return (
          <div className="login-logout flex justify-center flex-wrap sm:mt-2">
            <p className="dark:text-white mx-2">Welcome {session.user.name}</p>
            <button
              className="bg-green-200 text-black px-2 "
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        );
      } else {
        return (
          <div className="login-logout flex justify-center flex-wrap sm:mt-2">
            <p className="dark:text-white mx-2">Log in to continue</p>
            <button
              className="bg-green-200 text-black px-2 "
              onClick={() => signIn()}
            >
              Login
            </button>
          </div>
        );
      }
    }
  };

  return (
    <nav className="bg-green-200 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a href="https://blogspace.com/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              HITAM Blog Space
            </span>
          </a>
        </Link>
        <Toaster />

        <button
          onClick={() => setMenuToggle(!menuToggle)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="transition-all inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${hid} transition-all w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link href="/">
              <li>
                <a
                  href="#"
                  className={home ? active : notActive}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </Link>
            <Link href={"/student"}>
              <li>
                <a href="#" className={student ? active : notActive}>
                  Student Blog
                </a>
              </li>
            </Link>
            <Link href={"/teacher"}>
              <li>
                <a href="#" className={teacher ? active : notActive}>
                  Teacher Blog
                </a>
              </li>
            </Link>
            <Link href={"/contact"}>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="mt-4 md:mt-0 ">
          <div className="border-2 border-white-600 rounded-full h-[46px]">
            <Image
              onClick={() => setUserToggle(!userToggle)}
              src={
                session?.user?.image
                  ? session.user.image
                  : "https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
              }
              width="42"
              height="42"
              className={`rounded-full ${styles.round} round-here cursor-pointer`}
              alt="profile"
            />
          </div>
        </div>
      </div>
      {showUserDetails()}
    </nav>
  );
};

export default Nav;
