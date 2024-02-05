//RemoveBTN : C:\Users\USER\Desktop\To_DO\todolist\components
"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const check = confirm("確定要刪除嗎");

    if (check) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTopic} className="text-red-600">
      <HiOutlineTrash size={24} />
    </button>
  );
}
