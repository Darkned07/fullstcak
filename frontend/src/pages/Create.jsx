import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const name = useRef();
  const email = useRef();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/create", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.current.value,
        email: email.current.value,
      }),
    })
      .then((data) => {
        data.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container max-w-4xl w-full mx-auto mt-[20px]">
      <h2 className="text-center">Create student</h2>
      <form onSubmit={handleForm} className="w-full flex flex-col gap-5">
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

export default Create;
