/*
//TopicsList.jsx
"use server";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import CheckBtn from "./CheckBtn";
// import Check from "./Check";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
//TopicList傳送update
export default async function TopicsList({ updateDone }) {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        {t.done === true && (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <CheckBtn id={t._id} done={t.done} updateDone={updateDone} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
        )}
      ))}
    </>
  );
}
*/
