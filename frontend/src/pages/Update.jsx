import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const name = useRef();
  const email = useRef();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8000/update/${id}`, {
      method: "PATCH",
      body: [
        {
          name: name.current.value,
          email: email.current.value,
        },
      ],
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container max-w-7xl w-full mx-auto mt-[20px]">
      <h2 className="text-center">Update</h2>
      <form onSubmit={handleUpdate} className="w-full flex flex-col gap-5">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            ref={email}
            type="email"
            placeholder="email"
            className="input input-bordered w-full"
          />
        </label>
        <button className="btn btn-outline btn-dark w-full">Create</button>
      </form>
    </div>
  );
}

export default Update;
