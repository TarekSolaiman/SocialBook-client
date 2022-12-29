/* eslint-disable jsx-a11y/anchor-is-valid */
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import EditModal from "./EditModal";

const About = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(true);

  const {
    data: userData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: "myPayments",
    queryFn: async () => {
      const res = await fetch(
        `https://social-book-server-tareksolaiman.vercel.app/user/${user?.email}`
      );
      const data = await res.json();
      setOpen(true);
      return data;
    },
  });
  // console.log(userData);
  return (
    <div>
      <div className="flex flex-col mx-auto my-10 justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        <img
          src={userData?.photo}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {userData?.name}
            </h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-400">
              {userData?.email}
            </p>
            <p className="px-5 text-xs sm:text-base dark:text-gray-400">
              {userData?.address}
            </p>
            <p className="px-5 text-xs sm:text-base dark:text-gray-400">
              {userData?.university}
            </p>
          </div>
          <div>
            <a href="#my-modal-2">
              <button className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>

                <span>EDIT</span>
              </button>
            </a>
            {open && (
              <EditModal
                setOpen={setOpen}
                userData={userData}
                refetch={refetch}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
