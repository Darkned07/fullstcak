import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Student() {
  const [doc, setDoc] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setDoc(data))
      .catch((err) => console.log(err));
  });

  const deleteFunc = (id) => {
    fetch(`http://localhost:8000/delete/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="container max-w-7xl w-full mx-auto mt-[20px]">
      <div className="overflow-x-auto">
        <Link to={"/create"} className="btn btn-outline btn-secondary">
          Create
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doc &&
              doc.map((d) => {
                return (
                  <tr key={d.id}>
                    <th>{d.id}</th>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td className="flex flex-row gap-2">
                      <Link
                        to={`/update/${d.id}`}
                        className="btn btn-sm btn-warning"
                      >
                        update
                      </Link>
                      <button
                        onClick={() => {
                          deleteFunc(d.id);
                        }}
                        className="btn btn-sm btn-primary"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;
