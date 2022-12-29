/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const EditModal = () => {
  return (
    <div className="modal" id="my-modal-2">
      <div className="modal-box">
        <form action="">
          <input
            type="text"
            placeholder="New Name"
            className="input input-bordered w-full max-w-xs my-5"
          />
          <input
            type="text"
            placeholder="University"
            className="input input-bordered w-full max-w-xs my-5"
          />
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered w-full max-w-xs my-5"
          />
          <div className="modal-action flex justify-center items-center">
            <button type="submit" className="btn">
              Submit
            </button>
            <a href="#" className="btn">
              Cansel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
