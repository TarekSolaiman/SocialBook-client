import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";
import avatar from "../../logofolders/avatarImg.png";

const PostForm = ({ refetch }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const imghostKey = process.env.REACT_APP_imagekey;

  const postHandle = (data) => {
    if (user) {
      const postPhoto = data.postPhoto;
      const formData = new FormData();
      formData.append("image", postPhoto[0]);
      const url = `https://api.imgbb.com/1/upload?key=${imghostKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgdata) => {
          if (imgdata.success) {
            const postData = {
              userPhoto: user.photoURL,
              userName: user.displayName,
              userEmail: user.email,
              postPhoto: imgdata.data.url,
              postText: data.postText,
              like: 0,
            };
            fetch(
              "https://social-book-server-tareksolaiman.vercel.app/makePost",
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(postData),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                refetch();
                toast.success("Successful Post", {
                  autoClose: 500,
                });
              })
              .catch((e) => {
                console.log(e.message);
                toast.error(e.message, {
                  autoClose: 500,
                });
              });
            console.log(postData);
            reset();
          }
        });
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="bg-gray-900 p-6 rounded-lg mb-10">
      <form onSubmit={handleSubmit(postHandle)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                className="w-12 h-12 rounded-full"
                alt=""
              />
            ) : (
              <img src={avatar} className="w-12 h-12 rounded-full" alt="" />
            )}

            <label htmlFor="postText" className="ml-5 block dark:text-gray-400">
              Post Now
            </label>
          </div>
          <button type="submit" className="btn btn-ghost font-semibold">
            POST
          </button>
        </div>
        <div>
          <textarea
            {...register("postText")}
            type="text-aria"
            id="postText"
            required
            placeholder="What's in your minde"
            className="textarea border bg-nun h-24 w-full my-5"
          />
          <div className="flex justify-between items-center">
            <label htmlFor="postPhoto" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span>Photo</span>
            </label>
            <label htmlFor="" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span>Location</span>
            </label>
            <label htmlFor="" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
              <span>Feelings</span>
            </label>
          </div>
          <input
            {...register("postPhoto")}
            type="file"
            id="postPhoto"
            className="file-input hidden file-input-bordered file-input-success w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default PostForm;
