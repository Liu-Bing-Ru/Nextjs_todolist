"use client";
import React, { Fragment } from "react";
import { HiCheck } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function Check({ id, done }) {
  //後面useState的done 是我傳進來的
  //const [newDone, setDone] = useState(true);
  console.log("done", done, id);
  //畫面更新會在cole一遍
  //const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ done: !done }),
      });

      if (!res.ok) {
        throw new Error("Failed to update done");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleSubmit} className="text-green-5000">
        <HiCheck size={24} />
      </button>
    </>
  );
}
