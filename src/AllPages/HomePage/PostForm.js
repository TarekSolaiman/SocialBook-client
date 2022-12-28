import React from "react";
import { useForm } from "react-hook-form";
import avatar from "../../logofolders/avatarImg.png";

const PostForm = () => {
  const { register, handleSubmit, reset } = useForm();
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <form>
        <div className="flex items-center">
          <img src={avatar} className="w-12 h-12" alt="" />
          <label htmlFor="postText" className="ml-5 block dark:text-gray-400">
            Post Now
          </label>
        </div>
        <div>
          <textarea
            {...register("postText")}
            type="text-aria"
            id="postText"
            placeholder="What's in your minde"
            className="textarea border bg-nun h-24 w-full my-5"
          />
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
