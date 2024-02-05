// CheckBtn.jsx
"use client";
import React, { Fragment, useState } from "react";
//import { HiCheck } from "react-icons/fa";
import { HiCheck } from "react-icons/hi";
//import { HiCheck } from "../models/react-icons/hi";
import { useRouter } from "next/navigation";
//import "../styles/global.css";

export default function CheckBtn({ id, done, updateDone }) {
  const [newdown, setdown] = useState(true);
  const router = useRouter();

  const handleComplete = async () => {
    const check = confirm("已經完成?");
    console.log(done);
    if (check) {
      try {
        console.log("有進去抓資料");
        const res = await fetch(`http://localhost:3000/api/topics`, {
          method: "PUT",
          body: JSON.stringify({ id: id }),
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));

        if (res.ok) {
          // 更新 newdown 的值
          updateDone(id, true);
          setdown(true);
          router.refresh();
          console.log("CheckButton OK!!!!!!!!!");
          console.log("Updated Done Status:", newdown);
          console.log("id:", id);
          console.log("id.done", done);
          await router.refresh();
        }
      } catch (error) {
        console.error("Failed to update status: ", error);
      }
    }
  };

  return (
    <button onClick={handleComplete} className="text-green-600">
      <HiCheck size={24} />
    </button>
  );
}
