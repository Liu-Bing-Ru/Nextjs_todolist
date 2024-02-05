/*//CheckBtn.jsx
"use client";
import { HiCheck } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function CheckBtn({ id, onComplete }) {
  const router = useRouter();
  const handleComplete = async () => {
    const check = confirm("已經完成?");

    if (check) {
      try {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "PUT",
        });

        if (res.ok) {
          onComplete(); // 通知父組件刷新主題列表
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
}*/

//=======================================
/*
// CheckBtn.jsx
"use client";
import React, { Fragment } from "react";
import { HiCheck } from "react-icons/hi";
import { useRouter } from "next/navigation";
//import { useRouter } from "next/router";

export default function CheckBtn({ id, done, onComplete }) {
  const router = useRouter();

  const handleComplete = async () => {
    const check = confirm("已經完成?");

    if (check) {
      try {
        const res = await fetch(
          `http://localhost:3000/api/topics/${id}/updateStatus`,
          {
            method: "PUT",
            //新增在此
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ done: true }),
          }
          /*const res1 = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "PUT",
        }
        );

        if (res.ok) {
          onComplete(); // 通知父组件刷新主题列表
          console.log("CheckButton OK!!!!!!!!!");
        }
      } catch (error) {
        console.error("Failed to update status: ", error);
      }
    }
  };

  return (
    <Fragment>
      <button onClick={handleComplete} className="text-green-600">
        <HiCheck size={24} />
      </button>
    </Fragment>
  );
}
*/

/*
// CheckBtn.jsx
//此版本跑起來沒問題，只是不能更新true
"use client";
import React, { Fragment } from "react";
import { HiCheck } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function CheckBtn({ id, done }) {
  const router = useRouter();

  const handleComplete = async () => {
    const check = confirm("已經完成?");

    if (check) {
      try {
        const res = await fetch(
          `http://localhost:3000/api/topics/${id}/updateStatus`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ done: true }),
          }
        );

        if (res.ok) {
          // 在這裡處理相應的邏輯，例如刷新主題列表
          console.log("CheckButton OK!!!!!!!!!");
        }
      } catch (error) {
        console.error("Failed to update status: ", error);
      }
    }
  };

  return (
    <Fragment>
      <button onClick={handleComplete} className="text-green-600">
        <HiCheck size={24} />
      </button>
    </Fragment>
  );
}
*/
/*
// CheckBtn.jsx
//此版本可以跑 checkBtn OK 但是還不能連結後端資料庫

"use client";
import React, { Fragment } from "react";
import { HiCheck } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function CheckBtn({ id, done }) {
  const router = useRouter();
  //const done = done;
  const handleComplete = async () => {
    const check = confirm("已經完成?");
    //const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,
    if (check) {
      try {
        console.log("有進去抓資料");
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ done: true }),
        });

        if (res.ok) {
          //handleComplete();
          router.refresh();
          // 在這裡處理相應的邏輯，例如刷新主題列表
          console.log("CheckButton OK!!!!!!!!!");
          // 直接在這裡使用 done 變數進行輸出
          console.log("Updated Done Status:", done);
          //router.refresh();
          //=============
          // 等待更新完成，再獲取最新的 done 值
          await router.refresh();

          const updatedTopics = await getTopics();
          setTopics(updatedTopics.topics);
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
*/
/*
// CheckBtn.jsx
//嘗試新版本

"use client";
import React, { Fragment } from "react";
import { HiCheck } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import getTopics from "../components/TopicsList";

export default function CheckBtn({ id, done, updateDone }) {
  const [newdown, setdown] = useState(true);
  const router = useRouter();
  //const done = done;
  const handleComplete = async () => {
    const check = confirm("已經完成?");
    //const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,
    if (check) {
      //updateDone(done, true);
      try {
        console.log("有進去抓資料");
        ////懂了 這是get專用
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ done: true }),
        });

        if (res.ok) {
          updateDone(id, true);
          //handleComplete();
          //done = true;
          setdown(true);
          router.refresh();
          // 在這裡處理相應的邏輯，例如刷新主題列表
          console.log("CheckButton OK!!!!!!!!!");
          // 直接在這裡使用 done 變數進行輸出
          console.log("newdown:", newdone);
          console.log("Updated Done Status:", done);
          //router.refresh();
          //=============
          // 等待更新完成，再獲取最新的 done 值
          await router.refresh();

          //const updatedTopics = await getTopics();
          //setTopics(updatedTopics.topics);
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
*/
// CheckBtn.jsx
"use client";
import React, { Fragment, useState } from "react";
import { HiCheck } from "react-icons/hi";
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
