/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";

const EditModal = ({ setOpen, userData, refetch }) => {
  const { nameUpdate, user } = useContext(AuthContext);
  const { _id } = userData;
  const { register, handleSubmit, reset } = useForm();

  const editAbout = (data) => {
    console.log(data);
    const name = data.name;
    fetch(`https://social-book-server-five.vercel.app/user/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          nameUpdate(name, user.photoURL);
          setOpen(false);
          refetch();
          reset();
        }
      });
  };
  return (
    <div className="modal" id="my-modal-2">
      <div className="modal-box">
        <form onSubmit={handleSubmit(editAbout)}>
          <input
            {...register("name")}
            type="text"
            placeholder="New Name"
            className="input input-bordered w-full max-w-xs my-5"
          />
          <input
            {...register("university")}
            type="text"
            placeholder="University"
            className="input input-bordered w-full max-w-xs my-5"
          />
          <input
            {...register("address")}
            type="text"
            placeholder="Address"
            className="input input-bordered w-full max-w-xs my-5"
          />
          <div className="modal-action flex justify-center items-center">
            <button type="submit" className="btn">
              Submit
            </button>
            <a href="#" onClick={() => reset()} className="btn">
              Cansel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
